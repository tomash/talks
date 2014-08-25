!SLIDE

# Rys Historyczny


!SLIDE

## 2005: Model jest tylko do trzymania danych, wrzucajmy logikę do kontrolera i widoku.
## "Agile Web Development with Rails", ed. 1 & 2


!SLIDE

## 2007: Kontroler ma tylko odbierać żądanie i renderować wyniki, wrzucajmy logikę do modeli.
## [http://weblog.jamisbuck.org/2006/10/18/skinny-controller-fat-model](http://weblog.jamisbuck.org/2006/10/18/skinny-controller-fat-model)


!SLIDE

## 2013: Żadna klasa nie powinna być gruba (ani kontrolery, ani modele, ani żadne inne).
## [http://blog.codeclimate.com/blog/2012/10/17/7-ways-to-decompose-fat-activerecord-models/](http://blog.codeclimate.com/blog/2012/10/17/7-ways-to-decompose-fat-activerecord-models/)


!SLIDE bullets incremental

# "Naturalny" porządek rozwoju aplikacji w Rails

* persystencja -> model
* asocjacje -> model
* walidacje -> model
* dostęp do pól -> model


!SLIDE bullets incremental

# "Naturalny" porządek 2

* logika klasy -> model
* logika kilku klas -> model
* logika zewnętrznych serwisów -> model


!SLIDE

# Bardziej jak:

## naturalny porządek degradacji aplikacji w Rails.


!SLIDE

# Object Oriented Programming

W środowisku Rails OOP jest w wersji tak perwersyjnej że obiekty niedziedziczące z komponentów frameworka mają własną, specjalną, długą nazwę.

# PORO: Plain Old Ruby Object


!SLIDE

# Wszyscy jesteśmy winni.

Kto rozwijał w Rails większą aplikację (5000+ LOC) w której nie trafiła się ani jedna spuchnięta klasa (20+ metod, 100+ linii)?


!SLIDE

# Domyślni podejrzani

## Społecznościówki: model Użytkownik
## Ecommerce: model Zamówienie

"(Najbardziej puchnie) klasa skupiająca główną logikę domenową."

!SLIDE

# Przyczyna: łatwość.

Entropia kodu: średnia ilość odpowiedzialności przypadających na komponent (klasę)

(analogia do entropii w teorii informacji)


!SLIDE bullets

# Konsekwencje: antywzorce

* Big Ball of Mud
* God Object
* Magic Pushbutton
* Object Orgy
* Callback Hell


!SLIDE

# Q: No dobra, ale co z tym robimy?

# A: Programujemy obiektowo (!)


!SLIDE

# Proste reguły (nie zasady!)

## 1. Jedna odpowiedzialność - jedna klasa
## 1b. (jedna czynność - jedna metoda)
## 2. Prawo Demeter


!SLIDE

# Proponowana terapia klas ActiveRecord

sytuacja idealna: klasa AR zawiera wyłącznie logikę której NIE MA w ActiveModel

czyli: persystencja, asocjacje, (scopes)


!SLIDE bullets incremental

# Proponowana kolejność

* Callbacki -> Service, Builder
* Walidacje -> FormObject
* Logika wieloklasowa -> Mediator
* Prezentacja -> Decorator
* Wysyłanie emaili -> Kontroler


!SLIDE bullets

# trudności z Form Object

* brak ActiveRecord::Validations (uniqueness)
* brak bąbelkowania błędów walidacji


!SLIDE

# Protip: Defaktoryzacja

## Czasem dla świeżego spojrzenia warto przerzucić logikę do kontrolera.

[http://railscasts.com/episodes/398-service-objects](http://railscasts.com/episodes/398-service-objects)
[http://railscasts.com/episodes/416-form-objects](http://railscasts.com/episodes/416-form-objects)


!SLIDE

# Protip: Delegacja

Ułatwia wstępną separację zestawu rozmawiających ze sobą metod.

Dobry początek separacji realnej.


!SLIDE

# Dalsze zagadnienia

## 1. Virtus coercions
## 2. NullObject
## 3. Object Trees (vs. Lone Wolves)

-> Avdi Grimm "Confident Ruby"


!SLIDE

# źródła

* [http://blog.codeclimate.com/blog/2012/10/17/7-ways-to-decompose-fat-activerecord-models/](http://blog.codeclimate.com/blog/2012/10/17/7-ways-to-decompose-fat-activerecord-models/)
* [http://railscasts.com/episodes/398-service-objects](http://railscasts.com/episodes/398-service-objects)
* [http://railscasts.com/episodes/416-form-objects](http://railscasts.com/episodes/416-form-objects)
* Avdi Grimm "Confident Ruby"
* Andrzej Krzywda "Rails Refactoring"
