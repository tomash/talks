# Konspekt bloku RSpec @ Coderslab

### Tomasz Stachewicz, tomasz.stachewicz@rebased.pl

### Dzień Pierwszy

1. Wprowadzenie do RSpec
    1. Przypomnienie Test::Unit
    2. Zalety Test::Unit:
        * w bibliotece standardowej Ruby
        * prosta składnia
        * proste zasady (setup, test\_xxx)

    3. Braki Test::Unit: 
        * czytelności kodu
        * zarządzania złożonością
        * (np.) grupowania testów
        * (np.) pending cases
        * warsztaty: demonstracja

    4. Dodatki do Test::Unit
        * shoulda (con)
        * mocha
        * factory\_girl

    5. Czym jest Rspec
        * popularny framework do testowania
        * o naturalnej ("ludzkiej") składni
        * bogaty w funkcjonalności
        * wygodny do pisania testów behawioralnych

    6. TDD vs BDD
        * outside-in testing
        * behavior vs. state
        * zawsze powinniśmy testować zachowanie, publiczny interfejs
        * warsztaty: demonstracja klas

2. Instalacja RSpec
    1. Standalone (gem 'rspec')
    2. Rails (gem 'rspec-rails')
    3. rspec --init

3. Użycie RSpec
    0. Warsztaty na przykładzie aplikacji otestowanej Test::Unit
    1. describe, it
        1. Describe Classname
    2. .should vs. expect(expr).to
    3. podstawowe matchers
    4. gem 'rspec-expectations'
    5. Predykaty good? -> is\_good
    6. pending
    7. let
    8. describe, context: zagnieżdżenia
    9. subject
    10. shared examples

4. Różne sposoby zapisu i przetestowania tych samych rzeczy
    1. Czytelność: matchers, subject
    2. Behavior: różne sposoby przetestowania walidacji

5. Przygotowanie środowiska (danych)
    1. let vs. let!
    2. before, after, each i all
    3. factory\_girl
    4. database\_cleaner
    5. https://www.relishapp.com/rspec/rspec-core/v/2-0/docs/hooks/before-and-after-hooks


### Dzień Drugi

(być może przeniesienie punktu 5. z dnia pierwszego)

6. Dublerzy, makiety i podmiany
    1. Double
    2. Mock
    3. Stub (method, request)
    4. dokumentacja gema 'rspec-mocks'
    5. Ryzyko używania dublerów
    6. gem 'rspec-fire'


7. Testy akceptacyjne
    0. Rodzaje testów: jednostkowe, integracyjne, akceptacyjne
    1. vs. testy kontrolera
    2. Capybara
    3. Podstawowe API (widoczność)
    4. selektory: CSS, XPath
    5. describe -> background, it -> scenario
    6. Interakcja
        1. visit
        2. click\_link, click\_button
        3. wypełnianie formularzy
            1. fill\_in
            2. choose
            3. check, uncheck
            4. attach\_file
            5. select
    7. Testowanie stron z javascriptem
        1. driver selenium
        2. page.execute\_script
        3. Element#trigger
        4. Element#hover
        5. Element#drag\_to
