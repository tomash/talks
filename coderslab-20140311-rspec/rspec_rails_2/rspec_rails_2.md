!SLIDE

# czytelność

    @@@Ruby
    require 'spec_helper'
    describe Product do
      it "is invalid without a name" do
        product = Product.new
        product.valid?.should == false
        product.should_not be_valid
        subject.should_not be_valid
      end
    end


!SLIDE

# kilka sposobów testowania walidacji

    @@@Ruby
    it "is invalid without a name" do
      product.should_not be_valid # p.valid?
      product.save.should_not be_true
      expect { product.save }.
        to change { Product.count }.by 1
      expect { product.save! }.
        to_not raise_error
    end


!SLIDE

# product\_test => product\_spec


!SLIDE

## products\_controller\_test => products\_controller\_spec

