# Backend dla prostej aplikacji TODO

## Opis:
Rozwiązanie prezentuje podstawową implementacją REST API dla prostej aplikacji TODO.
Serwer został wdrożony na platformę Heroku, by ułatwić dostęp do endpointów wykorzystywanych w aplikacji.

Główna ścieżka serwera: [https://api-todo-app-recruitment-task.herokuapp.com/todos](https://api-todo-app-recruitment-task.herokuapp.com/todos)

**Dostępne Endpointy:**
1. Tworzenie nowego TODO - _**/create**_
2. Pobieranie wszystkich TODO z bazy - _**/get**_
3. Pobieranie dowolnej ilośći TODO - _**/getRand/$amount**_ (np. /getRand/5)
4. Aktualizacja TODO - _**/update/$IDtodo**_
5. Usunięcie TODO - _**/$IDtodo**_

Kolekcja endpointów oraz przykładowe zastosowanie jest dostępne do pobrania w sekcji release jako kolekcja postman.

### Funkcjonalność:
  - Dodawanie
  - Usuwanie
  - Uaktualnianie (wykonanie zadania)
  - Generowanie i zwracanie dowolnej liczby randomowo wygenerowanych zadań

### Stack:
  - TypeScript
  - Express.js
  - RestAPI
  - MongoDB Atlas
  - Mongoose

