require "spec_helper"
require "fizzbuzz"
describe Fizzbuzz do
  it "gives Fizz when divisible by 3" do
    Fizzbuzz.answer(3).should == "Fizz"
    Fizzbuzz.answer(12).should == "Fizz"
    Fizzbuzz.answer(21).should == "Fizz"
  end

  it "gives Buzz when divisible by 5" do
    Fizzbuzz.answer(5).should == "Buzz"
    Fizzbuzz.answer(20).should == "Buzz"
    Fizzbuzz.answer(50).should == "Buzz"
  end

  it "gives FizzBuzz when divisible by 15" do
    Fizzbuzz.answer(15).should == "FizzBuzz"
    Fizzbuzz.answer(60).should == "FizzBuzz"
    Fizzbuzz.answer(90).should == "FizzBuzz"
  end
end
