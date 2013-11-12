require 'spec_helper'
describe Product do
  let(:category) { Category.new }
  let(:product) { Product.new(category) }
  it "has a nonzero price" do
    product.price.should == 10
  end
  it "is available by default" do
    product.available?.should == true
    product.available?.should be_true
    product.should be_available
  end

  context "being in a promoted category" do
    let(:category) { Category.new(:promoted => true) }
    it "is also promoted" do
      product.should be_promoted
    end
  end

  context "not being in a promoted category" do
    let(:category) { Category.new(:promoted => false) }
    it "is not promoted" do
      product.should_not be_promoted
    end
  end
end
