

    
function addProduct(name, description, category, manufacturer, price, urlImage){
    let products = db.collection("Product");
    var dataToUpload = {
        description: description,
        name: name,
        nomCategory: category,
        nomManufacturer: manufacturer,
        price: price,
        urlImage: urlImage
    };

    add(products, dataToUpload);

}

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
