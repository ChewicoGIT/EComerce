
function getVariable(variable, window) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  } 
  return null;
}

function removeFileFromUrl(window) {
  // Parse the URL
  const parsedUrl = window.location.href;
  
  // Split the pathname into parts
  const pathParts = parsedUrl.split('/');
  
  // Remove the last part (which is the file name)
  pathParts.pop();
  
  // Reconstruct the pathname
  const newPathname = pathParts.join('/');
  
  // Return the modified URL as a string
  return newPathname;
}