const USUARIS = db.collection("Usuaris");
const PUBLICACIONES = db.collection("Publicacions");
const MEDIA = db.collection("Media");
const COMENTARIOS = db.collection("Comentaris");
const CATEGORY = db.collection("Categories");

//Variable general para guardar en que coleccionn se buscará
var coleccion = PUBLICACIONES;

function whatCollection() {

    //Variable que guarda que coleccion se usará
    let selectSearcher = document.getElementById("queSeccion").value;

    //Variable para avisar al usuari en que seccion está buscando
    let buscando;

    //Si el valor de la variable es publicaciones
    if (selectSearcher == "publicaciones") {

        //buscando contendrá el texto publicaciones y lo mostrará en el elemento con id buscandoEn
        buscando = "publicaciones";
        document.getElementById("buscandoEn").innerHTML = "<p>Estas buscando en " + buscando + "</p>";

        //La coleccion llamará a la coleccion de publicaciones y mostrarà la opcion de ordenar por categoría y la opcion de ordenar por la cantidad de comentarios
        coleccion = PUBLICACIONES;
        document.getElementById("categoriaPublicaciones").style.display = "block";
        document.getElementById("cantidadComentarios").style.display = "block";
    }

    //Sinó, pero si la seleccion del usuario és comentarios
    else if (selectSearcher == "comentarios") {

        //buscando tendrá el texto comentarios y lo mostrará en el elemento con id buscandoEn
        buscando = "comentarios";
        document.getElementById("buscandoEn").innerHTML = "<p>Estas buscando en " + buscando + "</p>";

        //La colección llamará a la coleccion de comentarios de firebase y esconderá la opción de ordenar por categoría i la opción para ordenar por la cantidad de comentarios
        coleccion = COMENTARIOS;
        document.getElementById("categoriaPublicaciones").style.display = "none";
        document.getElementById("cantidadComentarios").style.display = "none";
    }
}

function buscador() {

    //Crea dos variables. field para guardar que campo el usuario ha seleccionado y value para guardar el valor que el usuario ha escrito
    let field = document.getElementById("selectSearcher").value;
    let value = document.getElementById("inputTextSearcher").value;

    //Si el usuario no ha seleccionado ningun campo
    if (field == "null") {

        //Muestra todos los elementos de la coleccion de la variable
        selectAll(coleccion)
            .then((arrayItems) => {
                showElements(arrayItems);
            })
            .catch(() => {

                //Si hay algun error, muestra una alerta
                showAlert("Error al mostrar els elements", "alert-danger");
            });
    }

    //Sinó, pero si no escribe ningún valor
    else if (value == "") {

        //Muestra los elementos de la coleccion de la variable coleccion ordenados por el campo indicado
        selectAll(coleccion, field)
            .then((arrayItems) => {
                showElements(arrayItems);
            })
            .catch(() => {

                //Si hay algun error, muestra una alerta
                showAlert("Error al mostrar els elements", "alert-danger");
            });
    }

    //Sinó, pero si la variable field es igual a likes, dislikes o quantitatComentaris
    else if (field == "likes" || field == "dislikes" || field == "quantitatComentaris") {

        //Crea una variable donde guarde que operador se usarà en el selectWhere
        let operator = document.getElementById("operador").value;

        //Selecciona los documentos que cumplen con la operacion del selectWhere. Number(value) permite que el valor de la variable value se detecte como un numero y no como una frase.
        selectWhere(coleccio, field, operator, Number(value))
            .then((arrayItems) => {
                showElements(arrayItems);
            })
            .catch(() => {
                showAlert("Error al mostrar els elements", "alert-danger");
            });
    }

    //Sinó
    else {

        //Muestra los elementos de la coleccion de la variable coleccion ordenados por el campo indicado, solo mostrando aquellos que empiezan por el valor que el usuario haya escrito
        selectLike(coleccion, field, value)
            .then((arrayItems) => {
                showElements(arrayItems);
            })
            .catch(() => {

                //Si hay algun error, muestra una alerta
                showAlert("Error al mostrar els elements", "alert-danger");
            });
    }
}

function orderAll(numero, field, desc) {
    close_filtro();

    //Si el valor de numero es 1
    if (numero == 1) {

        //Si el valor de desc no es nulo
        if (desc != null) {

            //Muestra todos los elementos de la coleccion USUARIS ordenados por el campo indicado
            selectAll(USUARIS, field)
                .then((arrayItems) => {

                    //Esto haze que los elementos de dentro del array se ordenen inversamente
                    arrayItems.reverse();
                    showElements(arrayItems);
                })
                .catch(() => {

                    //Si hay algun error, muestra una alerta
                    showAlert("Error al mostrar els elements", "alert-danger");
                });
        }

        //Sinó
        else {

            //Muestra los elementos de la coleccion USUARIS ordenados por el campo indicado
            selectAll(USUARIS, field)
                .then((arrayItems) => {
                    showElements(arrayItems);
                })
                .catch(() => {
                
                    //Si hay algun error, muestra una alerta
                    showAlert("Error al mostrar els elements", "alert-danger");
                });
        }
    }

    //Sinó
    else {

        //Si la variable desc no es nula
        if (desc != null) {

            //Muestra los elementos de la coleccion USUARIS ordenados por el campo indicado
            selectAll(coleccion, field)
                .then((arrayItems) => {

                    //Invierte el array
                    arrayItems.reverse();
                    showElements(arrayItems);
                })
                .catch(() => {

                    //Si hay algun error, muestra esta alerta
                    showAlert("Error al mostrar els elements", "alert-danger");
                });
        }

        //Sinó
        else {
            
            //Muestra los elementos de la coleccion USUARIS ordenados por el campo indicado
            selectAll(coleccion, field)
                .then((arrayItems) => {
                    showElements(arrayItems);
                })
                .catch(() => {

                    //Si hay algún error, muestra esta alerta
                    showAlert("Error al mostrar els elements", "alert-danger");
                });
        }
    }
}

function showElements(arrayItems) {

    //Elimina todo el texto html del elemento con id ordenar
    document.getElementById("ordenar").innerHTML = "";

    //Si el contenido de la coleccion és igual al de PUBLICACIONES, muestra las publicaciones con su contenido habitual: imagen, usuario, categoría, contenido, likes, dislikes y cantidad de comentarios
    if (coleccion == PUBLICACIONES) {

        arrayItems.forEach((doc) => {
            document.getElementById("ordenar").innerHTML += `<div style="margin-bottom: 100px" class="card card-body border border-secondary text-center mt-3">
                                                                <div style="display: flex">
                                                                    <div class="border">
                                                                        <img src="${doc.data().image}" class="rounded" style="max-width: 500px; max-height: 10000px;" "alt="${doc.data().title}">
                                                                    </div>
                                                                    <div>
                                                                        <p>${doc.data().usuari}</p>
                                                                        <p>${doc.data().categoria}</p>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <h4 id="scrollspyHeading2">${doc.data().titol}</h4>
                                                                    <div class="border text-center mt-3">
                                                                        <p>${doc.data().contingut}</p>
                                                                    </div>
                                                                </div>
                                                                <div style="display: flex">
                                                                    <button type="button" class="btn btn-primary mx-2 mt-2" >
                                                                        
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/unbreakable-ties.appspot.com/o/Iconos%2FLike.png?alt=media&token=d25345f7-3c43-4fb0-92ae-abcee4423f71" alt="Like" style="width: 20px">
                                                                            ${doc.data().likes}
                                                                        
                                                                    </button>
                                                                    <button type="button" class="btn btn-primary mx-2 mt-2">
                                                                        
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/unbreakable-ties.appspot.com/o/Iconos%2FDislike.png?alt=media&token=be89c399-f9e5-4106-8ecd-1a66a95af004" alt="Dislike" style="width: 20px">
                                                                            ${doc.data().dislikes}
                                                                        
                                                                    </button>
                                                                    <div class="border">
                                                                        <p>${doc.data().quantitatComentaris}</p>
                                                                    </div>
                                                                </div>
                                                            </div>`;
        });
    }

    //Sinó, muestra una carta con imagen, usuario, título, contenido, likes y dislikes
    else {

        arrayItems.forEach((doc) => {
            document.getElementById("ordenar").innerHTML += `<div class="card card-body border border-secondary text-center mt-3" style="margin-bottom: 100px">
                                                                <div style="display: flex">
                                                                    <div class="border">
                                                                        <img src="${doc.data().image}" class="rounded" style="max-width: 100px; max-height: 10000px;" "alt="${doc.data().title}">
                                                                    </div>
                                                                    <div>
                                                                        <p>${doc.data().usuari}</p>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <h4 id="scrollspyHeading2">${doc.data().titol}</h4>
                                                                    <div class="border text-center mt-3">
                                                                        <p>${doc.data().contingut}</p>
                                                                    </div>
                                                                </div>
                                                                <div style="display: flex">
                                                                    <div class="border">
                                                                        <p>
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/unbreakable-ties.appspot.com/o/Iconos%2FLike.png?alt=media&token=d25345f7-3c43-4fb0-92ae-abcee4423f71" alt="Like" style="width: 20px">
                                                                            ${doc.data().likes}
                                                                        </p>
                                                                    </div>
                                                                    <div class="border">
                                                                        <p>
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/unbreakable-ties.appspot.com/o/Iconos%2FDislike.png?alt=media&token=be89c399-f9e5-4106-8ecd-1a66a95af004" alt="Dislike" style="width: 20px">
                                                                            ${doc.data().dislikes}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>`;
        });
    }
}

function addItem(doc) {
    add(PUBLICACIONES, doc)
        .then(() => {
            loadItems();

            document.getElementById("title").value = "";
            document.getElementById("content").value = "";
            document.getElementById("image").value = "";

            showAlert("Element guardat correctament", "alert-success");
        })
        .catch(() => {
            showAlert("Error al intentar guardar l'element", "alert-danger");
        });
}

function deleteItem(id) {
    deleteById(items, id)
        .then(() => {
            loadItems();
            showAlert("Element eliminat correctament", "alert-success");
        }).catch(() => {
            showAlert("Error al intentar eliminar l'element", "alert-danger");
        });
}

function editItem(id) {
    document.getElementById("elementId").value = id;
    document.getElementById("thumbnail").style.visibility = "visible";
    selectById(items, id)
        .then((doc) => {
            document.getElementById("title").value = doc.data().title;
            document.getElementById("content").value = doc.data().content;
            document.getElementById("thumbnail").src = doc.data().image;
        })
        .catch(() => {
            showAlert("Error al intentar editar l'element", "alert-danger");
        });
}

function loadItems() {
    selectAll(coleccion)
        .then((arrayItems) => {
            showElements(arrayItems)
        })
        .catch(() => {
            showAlert("Error al mostrar els elements", "alert-danger");
        });
}

function updateItem(id, doc) {
    updateById(coleccion, id, doc)
        .then(() => {
            loadItems();
            document.getElementById("elementId").value = "";
            document.getElementById("title").value = "";
            document.getElementById("content").value = "";
            document.getElementById("image").value = "";
            document.getElementById("thumbnail").style.visibility = "hidden";

            showAlert("Element actualitzat correctament", "alert-success");
        })
        .catch(() => {
            showAlert("Error al intentar actualitzat l'element", "alert-danger");
        });
}