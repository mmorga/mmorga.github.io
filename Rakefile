STATIC_FILES = Rake::FileList.new("static/*")

task static: "_site"

STATIC_FILES.each do |f|
  site_file = File.join("_site", File.basename(f))
  file site_file => f do
    sh "cp #{f} #{site_file}"
  end
  task static: site_file
end

directory "_site"

task jekyll: :static do
  sh "jekyll build"
end

task default: [:static, :jekyll]
