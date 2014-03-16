require 'sinatra'

get '/' do
  "No i? <a href='/hello'>hello</a>"
end

get '/hello' do
  "Hello WRUG!"
end