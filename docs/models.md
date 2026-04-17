# Documentació Models i Adaptadors - Today's Day

Aplicació d'adaptadors per mantenir els elements intactes encara que l'API externa canviï els noms de camps.

## Taula mapeig camps

| ElementApiResponse | ElementCalendar | Type |
| :--- | :--- | :--- |
| id | id | string |
| nom | titol | string |
| descripcio | descripcio | string |
| categoria | categoria | string |
| preu | preu | number |
| imatge | imatgeUrl | string |
| popular | esPopular | boolean |
| stock | unitats | number |
| duration_mins | timeInMinutes | number |
| start_datetime | dateStart | string/Date |
| end_time | dateEnd | string/Date |