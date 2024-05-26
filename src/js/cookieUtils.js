function setUserIdCookie(userId, expiresInDays = 1) {
    // Create the cookie string with user ID, expiration date, path, and secure flag
    const cookieString = `userId=${userId}; expires=${getExpirationDate(expiresInDays)}; path=/`; // TODO add ; Secure after path to make the cookie secure
  
    // Set the cookie
    document.cookie = cookieString;
  }
  
  function getExpirationDate(days) {
    const now = new Date();
    now.setTime(now.getTime() + (days * 24 * 60 * 60 * 1000));
    return now.toUTCString();
  }
  
  // Example usage: assume you have retrieved the user ID from a login process
  const userId = 12345;
  setUserIdCookie(userId);