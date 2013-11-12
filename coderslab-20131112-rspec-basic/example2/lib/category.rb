class Category
  attr_accessor :promoted
  def initialize(params = {})
    @promoted = params[:promoted]
  end

  def promoted?
    promoted
  end
end
