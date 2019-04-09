// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
var container =  document.getElementById("container");

// Get the offset position of the navbar/container
var sticky = navbar.offsetTop;
var sticky2 = container.offsetTop;
// Add the sticky class to the navbar/sticky2 to the container when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
  } else {
      navbar.classList.remove("sticky");
  }
  if (window.pageYOffset >= sticky2) {
      container.classList.add("sticky2")
  } else {
      container.classList.remove("sticky2");
  }
} 

// Click Event zum Anzeigen von Inalt / click event to show content

function myGeschichte() {
    document.getElementById('header_1').style.display = "grid";
}

aGeschichte.addEventListener('click', myGeschichte2)
function myGeschichte2() {
    var  x = document.getElementById('bGeschichte');

    if ( x.style.display === 'none') {
        x.style.display = 'grid';
    } else {
        x.style.display ='none';
    }
    if (x.style.backgroundColor ==='transparent') {
        x.style.backgroundColor = 'lightgray';
    } else {
        x.style.backgroundColor = 'transparent';
    }
}
  
function myAufbau() {
    document.getElementById('header_2').style.display = 'grid';
}

aAufbau.addEventListener('click', myAufbau2)
function myAufbau2() {
    var x = document.getElementById('bAufbau');

    if ( x.style.display === 'none') {
        x.style.display = 'grid';
    } else {
        x.style.display ='none';
    }
    if (x.style.backgroundColor ==='transparent') {
        x.style.backgroundColor = 'lightgray';
    } else {
        x.style.backgroundColor = 'transparent';
    }
}

function myTon() {
    document.getElementById('header_3').style.display = 'grid';
}

aTon.addEventListener('click', myTon2)
function myTon2() {
    var x = document.getElementById('bTon');

    if ( x.style.display === 'none') {
        x.style.display = 'grid';
    } else {
        x.style.display ='none';
    }
    if ( x.style.backgroundColor === 'transparent') {
        x.style.backgroundColor = 'lightgray';
    } else {
        x.style.backgroundColor ='transparent';
    }
}

function mySpiel() {
    document.getElementById('header_4').style.display = 'grid';
}

aSpiel.addEventListener('click', mySpiel2)
function mySpiel2() {
    var x = document.getElementById('bSpiel');
    
    if ( x.style.display === 'none') {
        x.style.display = 'grid';
    } else {
        x.style.display ='none';
    }
    if ( x.style.backgroundColor === 'transparent') {
        x.style.backgroundColor = 'lightgray';
    } else {
        x.style.backgroundColor ='transparent';
    }
}

function myLied() {
    document.getElementById('header_5').style.display = 'grid';
}

aLied.addEventListener('click', myLied2)
function myLied2() {
    var x = document.getElementById('bLied');

    if ( x.style.display === 'none') {
        x.style.display = 'grid';
    } else {
        x.style.display ='none';
    }
    if ( x.style.backgroundColor === 'transparent') {
        x.style.backgroundColor = 'lightgray';
    } else {
        x.style.backgroundColor ='transparent';
    }
}


/* HMMMMM
aTon.addEventListener('click', myTon2)
function myTon2  () {
    document.getElementById('bTon').style.dislay = document.getElementById('bTon').style.display == 'grid' ? 'none' : 'grid';   
}
*/
/*"document.getElementById('GrosserText').style.display=document.getElementById('GrosserText').style.display=='block' ? 'none' : 'block';" alt="" border="" /> */
