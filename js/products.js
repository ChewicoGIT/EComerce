var collectionRef = firestore.collection("/Product/jsMxZ4yzxfAF3OgrI4Q8");

// Obtenir una llista dels productes
function getProducts(){
    return collectionRef.get().then((query) => {
        const documents = [];
        query.forEach((doc) => {
            documents.push(doc.data());
        });
        
        return documents;
    });
}
