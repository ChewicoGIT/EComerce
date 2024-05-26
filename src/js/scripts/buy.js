


let itemsList;
let envio = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
let posibleProductID;
document.addEventListener("DOMContentLoaded", function(event) {
    posibleProductID = getVariable("id", window); // Get id of product for specific sale
    //console.log(posibleProductID);
    itemsList = document.getElementById("itemsList");
    document.getElementById("subtotalEnvio").innerHTML = envio + "€";
    
    const form = document.getElementById("buyerForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Buy successful");
        window.location.href = "index.html";
    });

    // see if it is a single sale or from the cart
    if(posibleProductID != null){
        buyOneItem(posibleProductID);
    }else{
        loadProducts();
    }




    
});



function loadProducts(){
    selectAll(db.collection("Basket")).then((basket) => {
        let content = "";
        let totalPrice = 0;
        basket.forEach(items => {
            //console.log(items.data());
            //console.log("idclient: " + items.data().idClient);
            //console.log("idcurrent: " + firebase.auth().currentUser.uid);


            // item has to be saved in the basket by the current user
            if(items.data().idClient === firebase.auth().currentUser.uid){
                // Get the data of the product IF the product is stored in the BAsked by current user
                selectById(db.collection("Product"), items.data().idProduct).then((currentProd) => {
                    //console.log("curprod id: " +items.data().idProduct);
                    //console.log(currentProd.data());
                    var productIMG = currentProd.data().imgUrl;
                    var productName = currentProd.data().name;
                    var productCategory = currentProd.data().nomCategory;
                    var productManufacturer = currentProd.data().nomManufacturer;
                    var productPrice = currentProd.data().price;

                    totalPrice += parseFloat(productPrice);

                    content += '<div id="items" style="display: inline-flex; justify-content:space-between;align-items:center;">' +
                        '<img src="' + productIMG + '" height="100px" style="aspect-ratio: 1;" />' +
                        '<dir id="itemInfo" height="100px">' +
                            '<p class="my-0 py-0">' + productName + '</p>' +
                            '<p>' + productCategory + '-' + productManufacturer+ '</p>' +
                            '<p>'  + productPrice + '€</p>'+
                        '</dir>' +
                    '</div>';
                    itemsList.innerHTML = content;
                    document.getElementById("subtotalPrice").innerHTML = totalPrice + "€";
                    document.getElementById("subtotalTotal").innerHTML = "<strong>" +  (totalPrice + envio) + "€" + "</strong>";
                });
            }
            
        });
        //console.log("CONTENTS: " + content);
        itemsList.innerHTML = content;
    });
}

function buyOneItem(posibleProductID){
    selectById(db.collection("Product"), posibleProductID).then((currentProd) => {
        //console.log(currentProd.data());
        var productIMG = currentProd.data().imgUrl;
        var productName = currentProd.data().name;
        var productCategory = currentProd.data().nomCategory;
        var productManufacturer = currentProd.data().nomManufacturer;
        var productPrice = currentProd.data().price;

        let totalPrice = parseFloat(productPrice);

        let content = '<div id="items" style="display: inline-flex; justify-content:space-between;align-items:center;">' +
            '<img src="' + productIMG + '" height="100px" style="aspect-ratio: 1;" />' +
            '<dir id="itemInfo" height="100px">' +
                '<p class="my-0 py-0">' + productName + '</p>' +
                '<p>' + productCategory + '-' + productManufacturer+ '</p>' +
                '<p>'  + productPrice + '€</p>'+
            '</dir>' +
        '</div>';
        itemsList.innerHTML = content;
        document.getElementById("subtotalPrice").innerHTML = totalPrice + "€";
        document.getElementById("subtotalTotal").innerHTML = "<strong>" +  (totalPrice + envio) + "€" + "</strong>";
    });
}



    