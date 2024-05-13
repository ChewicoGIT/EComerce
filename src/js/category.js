import {firestore} from 'FirebaseAuth.js'
var categoryRef = firestore.collection("Category");

// Obtenir una llista dels productes
function getCategory(){
    return categoryRef.get().then((query) => {
        const documents = [];
        query.forEach((doc) => {
            documents.push(doc.data());
        });
        
        return documents;
    });
}

function addCategory(_name){
    var dataToUpload = {
        name: _name
    };

    // Add a new document with a generated ID
    categoryRef.add(dataToUpload)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}