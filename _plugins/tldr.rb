module Jekyll
  module Tags
    class TooLongDidntReadBlock < Liquid::Block
      include Jekyll::Filters

      def initialize(tag_name, text, tokens)
        super
      end

      def render(context)
        @context = context
        output = markdownify(super(context).strip)
        "<aside class=\"tldr\">#{output}</aside>"
      end
    end
  end
end

Liquid::Template.register_tag('tldr', Jekyll::Tags::TooLongDidntReadBlock)
