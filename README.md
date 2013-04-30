backbone-for-example
====================

Backbone application created for training and some JS examples 

# Requirements

1. static http server który ustawiamy na root \ 
2. ja osobiście preferuję 
	- dla python 2.*: `python -m SimpleHTTPServer` 
	- dla python 3.*: `python -m http.server`
	<br />w katalogu projektu

# Info 
 oba skrypty pythonowe automatycznie odpalają się na porcie 8000 
 <br />(oczywiście możemy podać inny)
 <br /> Dlatego linki w tym readme prowadzą przez [http://localhost:8000/](http://localhost:8000/)


#[/app](http://localhost:8000/app) 
Nasza mała aplikacja backbone'owa

### Cele *

1. Rozwiązać typowe problemy UI
	- Pokazać animowany region: widok listy -> widok szczegółowy rekordu
	- prosty formularz z walidacją
	- wymiana 2 różnych widoków
	- nawigacja
	- redundancja CSS
	

2. Rozwiązać problemy techniczne
	- modularna konstrukcja aplikacji
	- asynchroniczne ładowanie danych
	- komunikacja między różnymi elementami aplikacji
	- testy
	- optymalizacja kodu produkcyjnego

\* Tworzenie aplikacji zaczynając od celów technicznych zamiast użytkowych nie jest dobrym planem... :(

### Użyte biblioteki
1. [RequireJS](http://requirejs.org/)
2. [jQuery](http://jquery.com/)
3. [Underscore.js](http://underscorejs.org/)
4. [Backbone.js](http://backbonejs.org/)
5. [Backbone.Marionette](http://marionettejs.com/)
6. [backbone-forms](https://github.com/powmedia/backbone-forms)


#[/examples](http://localhost:8000/examples) 
Różne przykłady javascriptowe


- [use_strict](http://localhost:8000/exaples/use_strict.html) 
 	- przykład pokazuje w jaki sposób "use strict"; nie pozwala nadpisać zmiennych globalnych 
 	