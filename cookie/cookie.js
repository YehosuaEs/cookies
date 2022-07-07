// Close entire cookiePopup with out accept
function closePopup() {
    document.getElementById('cookiePopup').style.display = 'none'; 
}

// Conditional to check if there is info inside local storage
if (!localStorage.getItem('accept_cookies')){
    document.getElementById("cookiePopup").style.display = "flex" 
} else (
    document.getElementById("cookiePopup").style.display = "none"   
)

// Set cookie consent and close the cookiePopup
function acceptCookieConsent() {
    document.getElementById("cookiePopup").style.display = "none"
    localStorage.setItem('accept_cookies', true)  
}
 
  