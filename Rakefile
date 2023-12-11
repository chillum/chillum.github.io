# frozen_string_literal: true

task default: %i[main cv css]

desc 'index.html'
task :main do
  sh 'haml src/index.haml > index.html'
end

desc 'cv/index.html, cv.docx'
task :cv do
  sh 'haml src/cv.haml > cv/index.html'
  sh 'pandoc src/cv.md -o cv.docx'
end

desc 'main.css, cv.css'
task :css do
  sh 'sass src/main.scss > main.css'
  sh 'sass src/cv.scss > cv/cv.css'
end
