document.addEventListener('DOMContentLoaded', function() {

  function createHeaderAndFooter() {
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
      })
      .catch(error => console.error("Error fetching header content:", error));
  
    // Fetch and append footer content (similar logic)
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
  
  // Call the function with your container ID (replace with yours)
  createHeaderAndFooter();



});










