class Product
  attr_accessor :price

  def initialize
    @price = 10
  end

  def available?
    true
  end
end