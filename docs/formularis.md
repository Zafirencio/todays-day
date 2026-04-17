# Documentació de Formularis - Today's Day

En aquest apartat es detallen els formularis reactius utilitzats per a la gestió de cerques en l'aplicació.


## Validadors Implementats
S'ha aconseguit fer dos validadors síncrons. Aquests son:
    - `Validators.minLength(2)`: Assegura que el camp tingui almenys 2 caràcters.
    - `Validators.maxLength(50)`: Limita el camp a un màxim de 50 caràcters.

A més a més, s'ha afegit un validador asíncron:
    - ``codiDisponibleValidator`: Comprova que el terme buscat existeixi a la db.json amb un retard de 500ms. Aquesta retorna { sensResultats: true} si no
        troba cap resultat.

## Comportament Debounce
S'ha aplicat un comportament Debounce, provocant un temps d'espera de 400ms a les cerques per no llençar peticions fins que l'usuari acabi d'escriure
la seva cerca.

## FormArray
S'ha implementat un FormArray al panell de preferits per permetre a l'usuari afegir als esdeveniments preferits notes.
Es necessari omplir cada field del FormArray i ha de ser com a mínim 3 caràcters.
Els canvis fets al FormArray es sincronitzen directament al LocalStorage, fent que es mantingui la informació encara que es tanqui la pàgina.