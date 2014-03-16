!SLIDE bullets

# Rodzaje testów

* jednostkowe - jedna klasa
* integracyjne - kilka klas
* akceptacyjne - feature


!SLIDE

# Capybara


!SLIDE

    @@@Ruby
    # Gemfile
    gem 'capybara'

    # spec_helper
    require 'capybara/rails'
    require 'capybara/rspec'


!SLIDE

## Capybara: find

    @@@Ruby
    find("div.price").should have_text "20"
    find("a.book").click


!SLIDE

## within(selector) { do stuff }

    @@@Ruby
    within("ul.products-list") do
      page.should have_text "Harry Potter"
      click_link "Harry Potter"
    end
