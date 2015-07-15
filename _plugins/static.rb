# require 'jekyll'

# Jekyll::Hooks.register :site, :post_render do |post|
#   Dir.glob("static/**/*").each do |f|
#     site_file = File.join("_site", File.basename(f))
#     file site_file => f do
#       sh "cp #{f} #{site_file}"
#     end
#   end
# end

# TODO: Currently this feature is unavailable in Jekyll 2.5.3
