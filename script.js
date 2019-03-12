// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
window.onload = function() {onwindowLoad();};

function onwindowLoad(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        if(document.getElementById("tocList").style.display != "block"){
            document.getElementById("myBtn").style.display = "block";
        }
        else{
            document.getElementById("myBtn").style.display = "none";
        }
    } else {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById("tocList").style.display = "none";
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        if(document.getElementById("tocList").style.display != "block"){
            document.getElementById("myBtn").style.display = "block";
        }
    } else {
        document.getElementById("myBtn").style.display = "none";
    }

     if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        //document.getElementById("tocList").style.display = "block";
    } else {
        document.getElementById("tocList").style.display = "none";
    }
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    //document.body.scrollTop = 0; // For Chrome, Safari and Opera
    //document.documentElement.scrollTop = 0; // For IE and Firefox
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("tocList").style.display = "block";
    document.getElementById("closebutton").style.display = "block";
    
}

function hideRightList(){
    console.log("Close button clicked !!")
    document.getElementById("myBtn").style.display = "block";
    document.getElementById("tocList").style.display = "none";
    document.getElementById("closebutton").style.display = "none";
}
