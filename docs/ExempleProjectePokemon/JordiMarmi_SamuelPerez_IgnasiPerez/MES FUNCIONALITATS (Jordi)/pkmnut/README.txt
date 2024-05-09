Avans d'explicar els canvis que he fet a un projecte anterior, li vull donar les gràcies per utilitzar el seu temps per mirar la pàgina web.

Canvis fets:
    - Correcció d'errors amb ids de HTML repetides

    - Millores del buscador de Publicacions:
        · Millorat el buscador per categoría varía al crear o eliminar alguna categoría a la base de dades.
        · Creat el buscador per likes i busca per major, menor, igual a, etc.
        · Creat el buscador per dislikes i busca per major, menor, igual a, etc.
        · Creat el buscador per comentaris en una publicació i busca per major, menor, igual a, etc.

    - Millores de l'ordenador de Publicacions:
        · Creada l'opció d'ordenar per cuantitat de likes.
        · Creada l'opció d'ordenar per cuantitat de dislikes.
        · Creada l'opció d'ordenar per cuantitat de respostes.
        
    - Millores al registrar un usuari:
        · Es demanen més dades a l'usuari i es guarden a la base de dades.
        · No es poden registrar dos usuaris amb el mateix correu.
        · Els correus es guarden en minúscules.
        · No es poden crear usuaris amb un nom començat amb un espai.
        · No es poden crear usuaris amb un punt ('.').

    - Millores als comentaris:
        · Al crear comentaris, el document de l'usuari en la base de dades s'actualitza, igual que la quantitat de comentaris en la publicació.
        · Al fer like a un comentari, ara es deshabiliten els botóns, tot i que no persisteix la deshabilitació.
        · Al fer like o dislike a un comentari, es veu reflexat a les dades de l'usuari que ha creat el comentari.

    - Millores a les publicacions:
        · Al crear publicacions, el document de l'usuari de la base de dades s'actualitza.
        · Al fer like o dislike a una publicació, aixó es veu reflexat en les dades de l'usuari que ha creat la publicació.
        · Cada publicació està asociada a una categoría de la base de dades.

    - Millora de persisténcia:
        · Funciona de forma local amb l'extenció del Visual Studio Live Prevew, pero l'aplicació Laragon només em detecta el html, tot i que té la carpeta sencera.

    - Millores d'eliminació:
        · En eliminar un comentari tots els seus likes i dislikes s'eliminen de les dades de l'usuari.
        · En eliminar una publicació, tots els seus comentaris s'eliminen juntament amb la publicació, restant els likes i dislikes de cada comentari a l'usuari que els ha creat.
    
    - Millora de llistat de publicacions i categoríes:
        · Generals:
            + Les publicacions i els comentaris mostraràn el nom de l'usuari asociat a la base de dades.
            + Només es veuràn els botóns d'editar o eliminar si ets l'usuari que ha creat la publicació o si ets l'usuari administrador.
            + S'han creat arxius ocults perque les coleccions de Publicacions i Categories no s'esborrin al no tenir cap document adins.

        · Publicacions:
            + En el cas de que una categoría que avans existía, l'hagin esborrat, es mostrarà com a categoría "Esta categoría ha sido eliminada".

    - Creació d'un editor de publicacions:
        · L'editor mostra les dades de la publicació.
        · Guarda els canvis fets a la publicació.
        · Guarda la data i quin usuari ha fet l'edició.
    
    - Creació d'un editor de comentaris:
        · L'editor mostra les dades del comentari.
        · Guarda els canvis fets al comentari.
        · Guarda la data i quin usuari ha fet l'edició.

    - Creació d'un editor de categoríes:
        · Hi haurà una categoría oculta perque la colecció de categoríes no s'esborri.
        · Sent l'administrador ara tindràs l'opció de l'editor de categoríes:
            + Es mostren totes les categoríes guardades en la base de dades.
            + Es poden crear categoríes.
            + Es poden borrar categoríes.
        
    - Creació d'una secció d'usuaris:
        · Hi ha un usuari ocult perque la colecció d'usuaris no s'esborri.
        · Un cop registrat.
            + Apareixerà un botó de "Mi perfil" el cual et mostrarà totes les dades del teu perfil.
            + Hi haurà una secció de "Usuarios":
                | En aquesta secció es mostren tots els usuaris registrats a la pàgina web.
                | Es pot ordenar pel seu nom, el seu correu o la seva descripció alfabéticament ascendent o descendentment.
                | Es pot ordenar per la cuantitat de publicacions, cuantitat de comentaris, likes acumulats o dislikes acumulats numericament ascendent o descendentment.
                | Es pot buscar un usuari en concret o varis usuaris depenent el seu nom, el seu correu, la seva descripció amb un text de com comença.
                | Es pot buscar un usuari en concret o veris usuaris depenent del nombre de likes, dislikes, publicacions fetes o comentaris publicats.
                | Cada usuari tindrà un botó de "Ver perfil" el cual mostrarà totes les dades d'aquell usuari.

Per millorar:
    - Refactoring / Canviar nom de variables reiteratives i en diferents idiomes.
    - Falta persisténcia de likes i dislikes.
    - Una publicació o comentari al ser editat, mostrar un text "(editat)" perque altres usuaris sàpiguen que la publicació o comentari s'ha editat.
    - Una publicació o comentari al ser editat, mostrar quin usuari ha editat el text.
    - Editor de perfil.
    - Eliminador de perfil.
    - Creació de secrets per poder eliminar perfils.

Cualsevol canvi no comentat per millorar, si li ha agradat o si no li ha agradat, siusplau, contacta amb mi.