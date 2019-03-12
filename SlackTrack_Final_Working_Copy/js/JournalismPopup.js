

// Get the modal
var modal = document.getElementById('myModal');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = 'scroll'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = 'scroll'
  }
}


//jump Button functions 
window.onscroll = function() {scrollFunction()};
            
function scrollFunction() {
  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtntop").style.display = "block";
    
    } else {
    document.getElementById("myBtntop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // var elmnt = document.getElementById("123abc");
    // elmnt.scrollIntoView();
}


		
BtnJ100.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J100";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=100",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ101.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J101";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=101",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ196.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J196";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=196",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ198.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J198";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=198",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ199.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J199";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=199",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ201.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J201";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=201",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ208.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J208";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=208",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ209.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J209";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=209",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ211.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J211";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=211",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ212.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J212";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=212",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ213.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J213";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=213",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ314.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J314";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=314",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ315H.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J315H";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=315H",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ320.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J320";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=320",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ331.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J331";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=331",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ333.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J333";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=333",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ340.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J340";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=340",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ342.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J342";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=342",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ350.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J350";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=350",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ352.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J352";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=352",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ361.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J361";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=361",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ365.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J365";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=365",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ371.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J371";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=371",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ385.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J385";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=385",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ387.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J387";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=387",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ396.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J396";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=396",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ397.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J397";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=397",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ399.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J399";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=399",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ400M.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J400M";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=400M",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ401.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J401";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=401",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ403.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J403";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=403",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ404.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J404";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=404",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ405.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J405";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=405",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ406.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J406";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=406",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ407.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J407";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=407",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ408.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J408";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=408",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ409.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J409";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=409",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ410.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J410";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=410",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ411M.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J411M";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=411M",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ412.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J412";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=412",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ413.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J413";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=413",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ416.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J416";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=416",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ421.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J421";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=421",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ424H.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J424H";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=424H",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ427M.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J427M";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=427M",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ428M.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J428M";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=428M",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ432.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J432";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=432",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ434.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J434";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=434",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ436.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J436";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=436",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ443.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J443";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=443",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ444.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J444";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=444",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ448.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J448";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=448",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ449.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J449";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=449",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ452.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J452";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=452",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ453.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J453";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=453",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ454.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J454";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=454",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ457.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J457";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=457",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ458.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J458";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=458",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ459.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J459";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=459",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ460.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J460";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=460",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ461.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J461";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=461",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ462.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J462";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=462",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ463.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J463";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=463",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ466.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J466";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=466",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ467.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J467";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=467",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ468.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J468";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=468",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ469.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J469";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=469",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ472.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J472";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=472",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ473.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J473";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=473",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ474.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J474";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=474",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ475.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J475";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=475",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ480.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J480";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=480",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ483.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J483";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=483",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ494.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J494";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=494",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ495.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J495";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=495",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ496.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J496";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=496",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ503.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J503";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=503",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ507.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J507";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=507",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ508.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J508";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=508",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ510.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J510";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=510",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ511M.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J511M";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=511M",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ512.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J512";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=512",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ516.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J516";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=516",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ521.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J521";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=521",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ527M.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J527M";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=527M",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ528M.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J528M";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=528M",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ532.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J532";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=532",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ534.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J534";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=534",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ536.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J536";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=536",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ543.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J543";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=543",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ544.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J544";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=544",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ548.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J548";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=548",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ549.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J549";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=549",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ552.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J552";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=552",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ553.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J553";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=553",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ554.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J554";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=554",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ557.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J557";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=557",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ558.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J558";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=558",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ559.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J559";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=559",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ560.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J560";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=560",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ561.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J561";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=561",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ562.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J562";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=562",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ563.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J563";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=563",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ566.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J566";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=566",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ567.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J567";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=567",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ568.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J568";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=568",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ569.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J569";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=569",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ572.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J572";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=572",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ573.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J573";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=573",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ574.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J574";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=574",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ575.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J575";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=575",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ580.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J580";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=580",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ583.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J583";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=583",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ594.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J594";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=594",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ595.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J595";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=595",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ596.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J596";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=596",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ601.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J601";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=601",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ602.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J602";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=602",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ603.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J603";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=603",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ604.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J604";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=604",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ605.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J605";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=605",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ606.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J606";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=606",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ607.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J607";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=607",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ608.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J608";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=608",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ609.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J609";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=609",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ610.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J610";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=610",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ611.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J611";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=611",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ612.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J612";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=612",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ613.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J613";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=613",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ614.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J614";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=614",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ616.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J616";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=616",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ617.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J617";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=617",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ618.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J618";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=618",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ619.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J619";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=619",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ621.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J621";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=621",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ623.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J623";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=623",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ624.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J624";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=624",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ626.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J626";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=626",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ627.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J627";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=627",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ628.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J628";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=628",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ638.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J638";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=638",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ641.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J641";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=641",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ642.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J642";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=642",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ643.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J643";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=643",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ644.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J644";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=644",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ646.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J646";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=646",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ648.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J648";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=648",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ649.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J649";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=649",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ654.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J654";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=654",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ656.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J656";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=656",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnJ660.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="J660";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/JournalismBackEnd.php?data=660",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}
