module Jekyll
  module Tags
    class PullQuoteBlock < Liquid::Block
      include Jekyll::Filters

      def initialize(tag_name, text, tokens)
        super
      end

      def render(context)
        @context = context
        output = markdownify(super(context).strip)
        "<span class=\"pullquote\">#{output}</span>"
      end
    end
  end
end

Liquid::Template.register_tag('pullquote', Jekyll::Tags::PullQuoteBlock)
