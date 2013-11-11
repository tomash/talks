!SLIDE

# RSpec z Railsami

    @@@Ruby
    gem 'rspec-rails'


!SLIDE

# pamiętacie predykaty?

    @@@Ruby
    require 'spec_helper'
    describe Product do
      it "is invalid without a name" do
        product = Product.new
        product.should_not be_valid
      end
    end


