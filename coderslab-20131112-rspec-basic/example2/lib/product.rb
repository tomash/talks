class Product
  attr_accessor :price

  def initialize(category)
    @price = 10
    @category = category
  end

  def available?
    true
  end

  def promoted?
    @category.promoted?
  end
end
