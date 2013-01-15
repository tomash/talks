!SLIDE bullets incremental

# Podstawowe założenia Rails 4.0

* mniej rewolucji niż 2.x -> 3.0
* *it's done when it's done*
* kompatybilność z Ruby 1.9.3


!SLIDE

# Zacznijmy od tych niekontrowersyjnych


!SLIDE bullets incremental

# ActionController i przyjaciele

* attr\_accessible wylatuje, zastąpione przez strong_params [c49d959e]
* czasownik **PATCH** (zamiast **PUT**) do update
* wiele plików z routes [6acebb38b]
* match wymaga czasownika
* Cache Digests


!SLIDE

# Koniec niekontrowersyjnych.


!SLIDE bullets incremental

# Te najbardziej kontrowersyjne

* Rails.queue API [adff4a70]
* Routing Concerns [0dd24728b]
* Turbolinks [e35d8b18]



!SLIDE bullets incremental

## ActiveRecord

* .none scope: zawsze pusta kolekcja [1a20683f]
* trochę nowych finderów [13b3c77e]
* ActiveRecord::Observer do gema
* .first kontra .take [07e5301e,489166e1,1379375f]
* .count z blokiem [f9cb645d]
* AR::Store: wybieralny serializer [3c0bf043]



!SLIDE

# PostgreSQL

* partial indexes [d70e0236]
* wsparcie dla HSTORE [f7b915b5]
* wsparcie dla typu JSON  [3b516b5b]
* wsparcie dla typu Array [4544d2bc]
* native uuid [12e9a75f]


!SLIDE

# Takie tam

* wsparcie dla typów HTML5 w helperach formularzowych (color, datetime) [446940c3, 1ce4b5b3, b02d14aa, ...]
* \#destroy! [4faaa811]
* development: wymuś migracje [96f19f6c]


!SLIDE bullets

# Nikogo nie obchodzą (oby!), 1/2

* ActiveRecord::Model - out [9e4c41c99]
* pluginy - out [dad7fdc57]
* ActiveSupport::OrderedHash - out
* create_join_table dla migracji do HABTM


!SLIDE bullets

# Nikogo nie obchodzą (oby!), 2/2

* find_or_create_by_{attribute}!
* Object.try woła tylko publiczne metody
* scope z parametrem wymaga lambdy
* Action i Page cache do gema


!SLIDE bullets

# Źródła

* http://www.edgerails.info
* RailsCast \#400
* http://blog.endpoint.com/2012/09/rails-4-highlights.html
* http://goo.gl/Ta6vQ


!SLIDE title-slide

# that's all, folks!