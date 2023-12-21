function toggleText() {

    //Get all the elements from the page
    let points=document.getElementById("points");

    let showMoreText=document.getElementById("moreText");

    let buttonText=document.getElementById("textButton");

    
    if (points.style.display === "none") {
        
        //Hide the text between the spam elements
        showMoreText.style.display = "none";
        
        points.style.display = "inline";
        
        //Change the text on button to 'Show More'
        buttonText.innerHTML = "Show More &#x2193;";
    }

    else{
        
        //Show the text between the span elements
        showMoreText.style.display = "inline";
        
        //Hide the dots after the content is shown
        points.style.display = "none";
        
        //Change text on button to show less
        buttonText.innerHTML = "Show Less &#x2191;";
    }

}