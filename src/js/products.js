var productRef = firestore.collection("/Product/jsMxZ4yzxfAF3OgrI4Q8");

// Obtenir una llista dels productes
function getProducts(){
    return productRef.get().then((query) => {
        const documents = [];
        query.forEach((doc) => {
            documents.push(doc.data());
        });
        
        return documents;
    });
}


function addProducts(){
    var dataToUpload = {
        description: "A nice one...",
        age: 30,
        city: "New York"
    };

    // Add a new document with a generated ID
    productRef.add(dataToUpload)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}