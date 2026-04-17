# Serveis Tècnics - Today's Day

## ElementService (HTTP)

- Endpoint: `http://localhost:3000/elements`
- Mètodes:
    - `obtenirPopulars()`: GET amb filtre `?popular=true`.
    - `cercar(terme)`: GET amb filtre `?title_like=terme`.
- Estats:
    - `carregant` (boolean)
    - `error` (string) mitjançant Signals.

## PreferitsService
- LocalStorage Key: `preferits-cataleg`
- Funcionalitat: Desa objectes `ElementCalendar` complets.
- Mètodes: 
    -`afegirPreferit` 
    -`eliminarPreferit`
    -`esPreferit`
    -`actualitzarNotes`.