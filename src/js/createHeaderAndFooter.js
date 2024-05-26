

document.addEventListener('DOMContentLoaded', function() {

  // adds heather and foooter 
  createHeaderAndFooter();

});

function signOut(){
  console.log("out");
  firebase.auth().signOut();
}

// dynamical change login button for user name
function userOrLogin(){    
  const loginButton = document.getElementById("user-or-login");

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is logged in
      loginButton.innerHTML = '<p class="nav text-white me-3">' + "<em>Benvingut, </em> &nbsp;"+ " " + user.displayName + '&nbsp;<img src = "imgs/x-circle-fill.svg" onClick="signOut()"/></p> '; 
    } else {
      // User is not logged in
      loginButton.innerHTML = '<a class="nav-link active text-white me-3" href="login.html">Login</a>';
    }
  });
}

function addSearchVar(){
  const loginButton = document.getElementById("searchBar");
  loginButton.innerHTML = '<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="searchQuery" onInput="UpdateProducts()">'; 
}


  function createHeaderAndFooter() {

    // add heather
    const headerContainer = document.getElementById("header-container");
  
    if (!headerContainer) {
      console.error("Header container element not found!");
      return;
    }
  
    // Fetch and append header content
    fetch("common/header.html")
      .then(response => response.text())
      .then(htmlContent => {
        const parser = new DOMParser();
        const headerElement = parser.parseFromString(htmlContent, "text/html").querySelector("nav.navbar.navbar-expand-lg");
        headerContainer.appendChild(headerElement);

        // add the logn button or name
        userOrLogin()

        // add SearchBar if located in index.html
        if (window.location.pathname === "/index.html") {

          addSearchVar();
        }
      })
      .catch(error => console.error("Error fetching header content:", error));
  
    // add footer
    const footerContainer = document.getElementById("footer-container");  // Replace with your footer container ID
  
    if (footerContainer) {
      fetch("common/footer.html")
        .then(response => response.text())
        .then(htmlContent => {
          const parser = new DOMParser();
          const footerElement = parser.parseFromString(htmlContent, "text/html").querySelector("footer");
          footerContainer.appendChild(footerElement);
        })
        .catch(error => console.error("Error fetching footer content:", error));
    } else {
      console.warn("Footer container element not found:", "footer-container");
    }


  }







