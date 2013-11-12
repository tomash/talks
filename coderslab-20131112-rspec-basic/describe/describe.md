!SLIDE

# describe
## podstawowy blok Rspec

    @@@Ruby
    require 'spec_helper'
    describe "our Product" do
      # test-cases here
    end


!SLIDE

# it 
### blok: konkretna testowana sytuacja

    @@@Ruby
    describe "our Product" do
      it "has a nonzero price"
    end

!SLIDE

# describe klasy

    @@@Ruby
    describe Product do
      it "has a nonzero price"
    end


!SLIDE

# it + blok
### i nasza pierwsza "asercja"

    @@@Ruby
    describe Product do
      it "has a default price" do
        product = Product.new
        product.price.should == 10
      end
    end


!SLIDE

# predykaty
### available? => should be_available

    @@@Ruby
    describe Product do
      it "is available by default" do
        product = Product.new
        product.available?.should == true
        product.available?.should be_true
        product.should be_available
      end
    end


!SLIDE

# pending
### "oczekuje na implementację"

    @@@Ruby
    describe Product do
      it "has many variants"
      it "belongs to category" do
        pending
        product.category should_not be_nil
      end
      xit "has weight" do
        product.weight should_not be_nil
      end
    end


!SLIDE

# let
### leniwe wykonanie:
### wykonaj blok dopiero kiedy potrzebny

    @@@Ruby
    describe Product do
      let(:product) { Product.new }
      it "has a default price" do
        product.price.should == 10
      end
    end


!SLIDE

## describe describe describe
### zagnieżdżanie kontekstów

    @@@Ruby
    describe Product do
      describe "showing let in action" do
        let(:product) { Product.new }
        describe "describe can be nested" do
          let(:products) {[product, product]}
          it "has a default price" do
            products[0].price.should == 10
          end
        end
      end
    end
