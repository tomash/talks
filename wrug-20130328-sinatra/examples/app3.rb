# main.rb
require 'rubygems'
require 'sinatra'
require 'blasphemy'
  
get '/' do
  haml :index
end

post '/' do
  @generator = Faker::MetalIpsum.new
  @count = params[:count].to_i
  @count = 100 if(@count > 100)
  haml :generated
end