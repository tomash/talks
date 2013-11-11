require "spec_helper"
require "product"
describe Product do
  it "has a default price" do
    product = Product.new
    product.price.should == 10
  end

  it "should be available" do
    product = Product.new
    product.available?.should == true
    product.available?.should be_true
    product.should be_available
  end

  describe "showing let in action" do
    let(:product) { Product.new }
    it "has a default price" do
      product.price.should == 10
    end
    describe "describe can be nested" do
      let(:products) { [product, product] }
      it "has a default price" do
        products[0].price.should == 10
      end
    end
  end

  # pending
  it "has many variants"
  it "belongs to category" do
    pending "awaiting Category feature"
    product.category should_not be_nil
  end
  xit "has weight" do
    product.weight should_not be_nil
  end
end