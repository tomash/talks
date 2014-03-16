!SLIDE

# RSpec: Double, Stub, Mock
### gem 'rspec-mocks'

    @@@Ruby
    category.
      stub(:bestsellers).
      and_return([product])
    product.should be_bestseller


!SLIDE

# Object Double
### dubler, kompletnie "sztuczny" obiekt

    @@@Ruby
    category = instance_double("Category",
      :products => [], :bestsellers => [])


!SLIDE

# Method Stubs
### możemy robić na "prawdziwych" obiektach

    @@@Ruby
    allow(category).
      to receive(:bestsellers) { [product] }
    allow(category).
      to receive(:bestsellers).
      and_return( [product] )


!SLIDE

# Message expectation

    @@@Ruby
    expect(category).
      to receive(:bestsellers) { [] }




!SLIDE

# Ciemna strona dublerów
### Factory+Factory+Factory -> Double+Double+Double
## Izolacja od prawdziwych, zasłoniętych klas


!SLIDE


    @@@Ruby
    # Gemfile:
    gem 'rspec-fire'

    # spec_helper.rb:
    require 'rspec/fire'
    RSpec.configure do |config|
      config.include(RSpec::Fire)
    end

!SLIDE


    @@@Ruby
    # Gemfile
    gem 'rspec-radar'

    # spec_helper.rb
    require 'rspec/radar'


