# Documentació de Navegació - Today's Day

## Taula mapejat rutes

| Path | Component | Públic/Privat |
|------|-----------|---------------|
| `/` | `Redirecció` | Públic |
| `/calendari` | `Calendari` | Públic |
| `/cerca` | `Cerca` | Públic |
| `/detall/:id` | `Detall` | Públic |
| `/preferits` | `Preferits` | Privat |
| `/login` | `Login` | Públic |
| `**` | Redirecció a `/calendari` | Públic |

## Explicació Routing

S'ha configurat els objectes d'Angular de la seguent manera:

- **providerRouter**: S'ha definit a `app.config.ts` les rutes de navegació amb la constant `routes`
- **routerOutlet**: S'ha definit a `app.html` el component que renderitza les rutes
- **routerLink i RouterLinkActive**: S'han fet servir pel menú de navegació per creat enllaços i que evitin la recàrrega del navegador i afegir CSS.