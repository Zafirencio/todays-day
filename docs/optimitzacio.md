# Documentació d'Optimització - Today's Day

## OnPush
S'ha aplicat `changeDetection: ChangeDetectionStrategy.OnPush` als components `TargetaElement` i a `Detall`.
El motiu d'aplicar OnPush a l'aplicació es perquè Angular només comprova els canvis als components amb només inputs, fent que no s'actualitzi constantment.

## Virtualització de la llista (Angular CDK)
S'ha aplicat el component `CdkVirtualScrollViewport`. La implementeció fa que el navegador renderitzi les targetes actives a la finestra de l'usuari. Si aquestes targetes deixen d'estar actives o s'hauríen d'activar altres fent scroll, es reciclen, fent així que trigui menys en carregar la llista.