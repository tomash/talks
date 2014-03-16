!SLIDE

# Capybara: formularze


!SLIDE

# Zanim zaczniemy
## zbudujmy działający formularz


!SLIDE

    @@@Ruby
    visit "/categories/new"
    within("#new_category_form") do
      fill_in 'category_name', :with => 'Some Category'
    end
    click_link 'Create'
    page.should have_content 'Success'

!SLIDE

    @@@Ruby
    visit "/categories/new"
    within("#new_category_form") do
      fill_in 'category_name', :with => ''
    end
    click_link 'Create'
    page.should have_content 'Failure'


!SLIDE

## dalsza praca z formularzami

    @@@Ruby
    choose('A Radio Button')
    check('A Checkbox')
    uncheck('A Checkbox')
    attach_file('Image', '/path/to/image.jpg')
    select('Option', :from => 'Select Box')
