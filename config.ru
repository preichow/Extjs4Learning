#vim: set filetype=ruby:
unless defined? Bundler
    require 'rubygems'
    require 'bundler'
end
Bundler.require
run Rack::File.new(".")
