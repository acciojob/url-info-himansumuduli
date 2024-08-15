//your JS code here. If required.
// Function to display the length of the current URL
function showUrlLength() {
 
    let currentUrl = window.location.href;
    

    let urlLength = currentUrl.length;
    
   
    alert("The length of the URL is: " + urlLength);
}

// Call the function to show the URL length
showUrlLength();
