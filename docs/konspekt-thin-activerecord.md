
1. Rys historyczny

2005: Model jest tylko do trzymania danych, wrzucajmy logikę do kontrolera i widoku.
Agile Web Development with Rails, ed. 1 & 2

2007: Kontroler ma tylko odbierać żądanie i renderować wyniki, wrzucajmy logikę do modeli.
http://weblog.jamisbuck.org/2006/10/18/skinny-controller-fat-model

2013: Żadna klasa nie powinna być gruba (ani kontrolery, ani modele, ani żadne inne).
http://blog.codeclimate.com/blog/2012/10/17/7-ways-to-decompose-fat-activerecord-models/


2. "Naturalny" porządek rozwoju aplikacji w Rails.

persystencja -> model
asocjacje -> model
walidacje -> model
dostęp do pól -> model
logika klasy -> model
logika kilku klas -> model
logika zewnętrznych serwisów -> model

More like: naturalny porządek degradacji aplikacji w Rails.


3. Object Oriented Programming

W środowisku Rails OOP jest w wersji tak perwersyjnej że obiekty niedziedziczące z komponentów frameworka mają własną, specjalną, długą nazwę.

PORO: Plain Old Ruby Object


4. Wszyscy jesteśmy winni.

Kto rozwijał w Rails większą aplikację (5000+ LOC) w której nie trafiła się ani jedna spuchnięta klasa (20+ metod, 100+ linii)?


5. Domyślni podejrzani.

Społecznościówki: model Użytkownik.
Ecommerce: model Zamówienie.


6. Przyczyna: łatwość.

Entropia kodu*: średnia ilość odpowiedzialności (logicznych funkcjonalności) przypadających na komponent (klasę).

* jako analogia do entropii w teorii informacji


7. Konsekwencje.

Degradacja do antywzorców:
- Big Ball Of Mud
- God Object
- Magic Pushbutton
- Object Orgy
- Callback Hell


8. No dobra, ale co z tym robimy?

Programujemy obiektowo.


9. Proste do zapamiętania reguły (nie zasady!).

1 Jedna odpowiedzialność - jedna klasa (jedna czynność - jedna metoda)
2 Prawo Demeter (klasa rozmawia tylko z najbliższymi sobie)


10. Proponowana kolejność terapii klas ActiveRecord

Sytuacja idealna: klasa AR zawiera wyłącznie logikę której NIE MA w ActiveModel (persystencja, asocjacje, (scopes))

1 Callbacki -> Service, Builder
2 Walidacje (także before_validation) -> FormObject
3 Logika wieloklasowa -> Mediator
4 Prezentacja -> Decorator
5 Wysyłanie emaili -> Kontroler


11. Protip: Defaktoryzacja

Czasem dla świeżego spojrzenia trzeba przerzucić logikę z powrotem do kontrolera

-> http://railscasts.com/episodes/398-service-objects
-> http://railscasts.com/episodes/416-form-objects


12. Protip: Delegacja

Ułatwia myślową separację zestawu rozmawiających ze sobą metod, dobry wstęp do separacji realnej.


Kolejne wzorce warte spróbowania

NullObject
Object Trees (vs. Lone Wolves)

-> Avdi Grimm "Confident Ruby"


