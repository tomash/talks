!SLIDE

## oficjalna dokumentacja
### https://www.relishapp.com/rspec/

## fajne ficzery RSpec
### http://betterspecs.org/


!SLIDE

## before, after vs. setup, teardown


    @@@Ruby
    before(:each) do
      # something
    end

https://www.relishapp.com/rspec/rspec-core/v/2-0/docs/hooks/before-and-after-hooks


!SLIDE

# subject jako wyjątkowy let

    @@@Ruby
    subject { build(:product) }
    it "is valid" do
      should be_valid
    end


!SLIDE

# kolejny model: Category
## has_many :products


!SLIDE bullets

# zarządzanie złożonością

* Factory -> Factory -> Factory...
* before(:all)
* mocks & stubs

