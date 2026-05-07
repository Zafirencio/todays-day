# Today's Day: EL vostre calendari. Fet per Joel Font

Aquest projecte s'ha generat utilitzant [Angular CLI](https://github.com/angular/angular-cli) versió 21.1.4.

## Descripció

Today's Day es una aplicació que fa de calendari per ajudar a l'usuari a organitzar-se tant a nivell personal com professional.
A nivell personal pot planificar esdeveniments, consultar horaris, configurar recordatoris i més.
També té funcionalitat per empreses. Els usuaris poden organitzar el seu grup empresarial per sincronitzar horaris i esdeveniments dins de la jornada laboral, així facilitant el saber quan reunir-se.

## Stack Tècnic

Els requisits utilitzats son [Angular CLI](https://github.com/angular/angular-cli) versió 21.1.4, SCSS, Standalone, Typescript...

## Mapa de rutes

| Path | Component | Públic/Privat |
|------|-----------|---------------|
| `/` | `Redirecció` | Públic |
| `/calendari` | `Calendari` | Públic |
| `/cerca` | `Cerca` | Públic |
| `/detall/:id` | `Detall` | Públic |
| `/preferits` | `Preferits` | Privat |
| `/login` | `Login` | Públic |
| `**` | Redirecció a `/calendari` | Públic |

## Execució en local

Per executar l'aplicació en local, cal seguir els següents passos:

1. **Clonar el repositori amb**:
`git clone https://github.com/Zafirencio/todays-day`

2. **Accedir desde terminal al directori**:
``cd todays-day``

3. **Instal·lar les dependències**:
``npm install``

4. **Executar la base de dades**:
`npx json-server --watch db.json`

5. **Iniciar l'aplicació Angular**:
`ng serve`

6. **Accedir a l'aplicacio amb navegador**
Obrir al navegador la URL `http://localhost:4200`

## Credencials d'accés
Per accedir a la ruta privada de Preferits, s'han de fer ús d'aquestes credencials de prova.
- **Email**: `admin@test.com`
- **Contrasenya**: `1234`

## Estat i mida de la build.

Primera build completada amb `ng build`. La mida dels fitxers son:
- **Mida total inicial (Raw size**): 331.64 kB
- **Mida de trasnferència estamda**: 88,73 kB
- **Lazy chunk (Preferits)**: 309 bytes.