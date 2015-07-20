---
image: /assets/images/chittenango-falls-ny.jpg
categories:
  - software
tags:
  - oop
  - inheritance
  - delegation
title: "OOP: More Than Inheritance"
---

>   Everything you think you know about OOP is wrong

-   Define OOP

-   It all started going wrong with C++

    -   or maybe even earlier: Alan Kay quote on Smalltalk-80 going wrong

    -   http://queue.acm.org/detail.cfm?id=1039523

-   Class oriented programming

-   Language support for Inheritance instead of Delegation

-   Inheritance

    -   is-a vs has-a

    -   pros:

        -   is pretty easy to implement in most languages

    -   cons:

        -   locks the implementation of a method to a particular place in the
            class hierarchy \# Inheritance Examples

Think about Legos

Animal
------

-   Animal

    -   Bird

        -   .fly()

        -   Penguin

            -   .fly() --fail

        -   Sparrow

Stream
------

-   NetworkStream

-   MemoryStream

-   FileStream

AutoParts
---------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class part
{
    OEM
    Manufacturer
    Number
    Description
}

class Tire extends Part
{
   Speed
   Rating

}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Beware of hierarchy to maintain
http://en.wikipedia.org/wiki/Liskov\_substitution\_principle

Inheritance is to substitute behavior instead of data

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public interface Expression {
    int evaluate();

    public class Constant implements Expression {

        private final int value;

        public Constant(int value) {
            this.value = value;
        }

        @Override
        public int evaluate() {
            return this.value;
        }

        @Override
        public String toString() {
            return String.format(" %d ", this.value);
        }

    }

    public class Negate implements Expression {

        private final Expression expression;

        public Negate(Expression expression) {
            this.expression = expression;
        }

        @Override
        public int evaluate() {
            return -(this.expression.evaluate());
        }

        @Override
        public String toString() {
            return String.format(" -%s ", this.expression);
        }
    }

    public class Exponent implements Expression {

        private final Expression expression;
        private final int exponent;

        public Exponent(Expression expression, int exponent) {
            this.expression = expression;
            this.exponent = exponent;
        }

        @Override
        public int evaluate() {
            return (int) Math.pow(this.expression.evaluate(), this.exponent);
        }

        @Override
        public String toString() {
            return String.format(" %s ^ %d", this.expression, this.exponent);
        }

    }

    public class Addition implements Expression {

        private final Expression left;
        private final Expression right;

        public Addition(Expression left, Expression right) {
            this.left = left;
            this.right = right;
        }

        @Override
        public int evaluate() {
            return this.left.evaluate() + this.right.evaluate();
        }

        @Override
        public String toString() {
            return String.format(" (%s + %s) ", this.left, this.right);
        }
    }

    public class Multiplication implements Expression {

        private final Expression left;
        private final Expression right;

        public Multiplication(Expression left, Expression right) {
            this.left = left;
            this.right = right;
        }

        @Override
        public int evaluate() {
            return this.left.evaluate() *  this.right.evaluate();
        }

        @Override
        public String toString() {
            return String.format(" (%s * %s) ", this.left, this.right);
        }
    }

}

public static void main(String[] args) {

    Expression two = new Constant(2);
    Expression four = new Constant(4);
    Expression negOne = new Negate(new Constant(1));
    Expression sumTwoFour = new Addition(two, four);
    Expression mult = new Multiplication(sumTwoFour, negOne);
    Expression exp = new Exponent(mult, 2);
    Expression res = new Addition(exp, new Constant(1));

    System.out.println(res + " = " + res.evaluate());

}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Language Topics
---------------

### Python

Traits in Python: http://code.enthought.com/projects/traits/

### Ruby

Traits in Ruby: http://ruby-naseby.blogspot.co.at/2008/11/traits-in-ruby.html

References
----------

-   http://blog.berniesumption.com/software/inheritance-is-evil-and-must-be-destroyed/

Cognitive Load
--------------

Do our tools make us resistant to writing good code?

Do you resist adding a new class because it means:

1.  creating a new class file

2.  creating a matching unit test file

3.  adding the boilerplate code necessary (imports, module decls, etc)

http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod

 
