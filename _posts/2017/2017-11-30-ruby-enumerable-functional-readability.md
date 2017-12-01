---
title: Ruby Enumerable Functional Readability
layout: post
category: software
---
One of the functional techniques that I really enjoy using in Ruby is the subset of methods in the [`Enumerable` module](http://ruby-doc.org/core-2.4.2/Enumerable.html) that give you the power to filter, transform, and otherwise boil down the contents in an enumeration in a concise and powerful way.

The concepts I'm talking about refer to any of the methods in `Enumerable` that take a [block](http://ruby-doc.com/docs/ProgrammingRuby/html/intro.html#S6) and use the result of the block to do something useful. Most commonly, I'm talking about:

Method   | Description
-------- | -----------
[`map`](http://ruby-doc.org/core-2.4.2/Enumerable.html#method-i-map)    | Returns a new array with the results of running block once for every element in enum.
[`select`](http://ruby-doc.org/core-2.4.2/Enumerable.html#method-i-select) | Returns an array containing all elements of enum for which the given block returns a true value.
[`reject`](http://ruby-doc.org/core-2.4.2/Enumerable.html#method-i-reject) | Returns an array for all elements of enum for which the given block returns false.
[`reduce`](http://ruby-doc.org/core-2.4.2/Enumerable.html#method-i-reduce) (aka [`inject`](http://ruby-doc.org/core-2.4.2/Enumerable.html#method-i-inject)) | Combines all elements of enum by applying a binary operation, specified by a block or a symbol that names a method or operator.

The basic use-case that most programmers are familiar with is something like this:

Given an array of strings, convert it into an array of the length of each string.

```ruby
ary = ["apple", "banana", "orange", "pink"]

ary.map { |str| str.size }

=> [5, 6, 6, 4]
```

These methods also take a nifty shortcut that permits you to call a method on each item in the enumeration as a substitution for the explicit block. The same result above can be returned with this shortcut method instead:

```ruby
ary.map(&:size)

=> [5, 6, 6, 4]
```

The result here is still pretty readable and recommended for these cases.

Another nifty feature of these methods is, of course, the ability to chain the method calls to achieve a more complex result.

For example, should you only care about the lengths of strings greater than five, you could write this:

```ruby
ary.map(&:size).select { |len| len > 5 }

=> [6, 6]
```

Armed with this level of power, you can go a little mad sometimes and end up with a long chain of method calls that even you won't remember what it is doing after a long weekend. 

![We all go a little mad sometimes]({{ "/assets/article_images/2017-11-27-ruby-enumerable-functional-readability/psycho.jpg" | absolute_url }})

This is sometimes natures way of telling you to split the method (containing the chain) into several methods. Other times, the algorithm expressed in the chain is of intrinsic value when kept together. In this case, do you need to give up the syntactic sugar of the Enumerable chain? No.

Since these methods take a block, it follows that you can pass a block, or a [`Proc`](http://ruby-doc.org/core-2.4.2/Proc.html), or a [`lambda`](http://ruby-doc.org/core-2.4.2/Kernel.html#method-i-lambda) to the same effect. The following examples explain the refactoring path you could take.

As a toy example, given an Array of objects, return a list of the name attributes of the objects that are less than $10 and are in the categories of "tools" or "toys".

```ruby
Item = Struct.new(:name, :price, :categories)
items = [
	Item.new("Pliers", 8.00, %w[tools handtools]),
	Item.new("Dremel", 30.00, %w[tools powertools]),
	Item.new("Legos", 15.00, %w[toys building]),
	Item.new("Spatula", 3.00, %w[cooking kitchen]),
	Item.new("Yoyo", 6.00, %w[toys])
]
items
	.reject { |item| item.price >= 10.0 }
	.select { |item| %w[toys tools].any? { |category| item.categories.include?(category) } }
	.map {|item| item.name }

=> ["Pliers", "Yoyo"]
```

You can start by changing the traditional block syntax with the equivalent lambda syntax:

```ruby
higher_prices = ->(item) { item.price >= 10.0 }
includes_category = ->(item, category) { item.categories.include?(category) }
favorite_categories = ->(item) { %w[toys tools].any?(&includes_category.curry[item]) }

items
  .reject(&higher_prices)
  .select(&favorite_categories)
  .map(&:name)

# => ["Pliers", "Yoyo"]
```

This, to me, reads better than the first example. Reading aloud:

	items reject higher prices,
	select favorite categories,
	map name. 

The lambda declarations above are fairly clear on their own above (assuming you are used to the [`curry`](http://ruby-doc.org/core-2.4.2/Proc.html#method-i-curry) method - if not, check it out!)

![Because Curry is Delicious]({{ "/assets/article_images/2017-11-27-ruby-enumerable-functional-readability/lamb-curry.jpg" | absolute_url }})

So the final issue to deal with is where to define your cool new lambdas. There are a number of ways to do this and it depends on your use case. 

If the lambda isn't going to be used in other places, you can define it within the method in which is it used. This is how I used illustrated the examples. If the lambda begins to get more complex than a one or two liner, you will want to consider moving it elsewhere. 

Either to its own method:

```ruby
def higher_prices
  ->(item) { item.price >= 10.0 }
end
```

Or possibly to it's own module or move related lambdas to a shared module. 

```ruby
module BusinessLogic
  module_function
  
  def higher_prices
    ->(item) { item.price >= 10.0 }
  end

  def favorite_categories
    includes_category = ->(item, category) { item.categories.include?(category) }

    ->(item) { %w[toys tools].any?(&includes_category.curry[item]) }
  end
end


class SalesBrochure
  include BusinessLogic

  def initialize(items)
    @items = items
  end

  def sales_items
    @items
      .reject(&higher_prices)
      .select(&favorite_categories)
      .map(&:name)
  end
end

SalesBrochure.new(items).sales_items

# => ["Pliers", "Yoyo"]
```

This refactoring has the value of isolating the **business logic** functionality of our example from the algorithm of putting together the list of items in the sale.

Aside: the `module_function` method is kind of nice to use for this use-case because it makes the methods available where they are included, the methods are isolated from the namespace of the including class, and the instance methods are private so they don't pollute your class' public instance methods.

While we are at it, another direction we could go is to pass the lambdas into the `SalesBrochure` which decouples the concrete implementation of the `BusinessLogic` methods and this would permit reuse of the `SalesBrochure` class for a number of different contexts. That factoring would look something like this:

```ruby
class Brochure
  def initialize(items, price_rejector, included_categories)
    @items = items
    @price_rejector = price_rejector
    @included_categories = included_categories
  end

  def items
    @items
      .reject(&@price_rejector)
      .select(&@included_categories)
      .map(&:name)
  end
end

Brochure.new(items, BusinessLogic.higher_prices, BusinessLogic.favorite_categories).items

# => ["Pliers", "Yoyo"]
```
