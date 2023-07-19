

    function validateForm(){
        var em=document.getElementById("em").value;
        var pas=document.getElementById("pas").value;
        var error=document.getElementById("error");
        
        
            if(em.indexOf("@")===-1 || pas.length<8){
             error.innerText="Invalid email or password!";
             error.className = "error";
             return false;
            }
            else{
                error.innerText = "Valid email and password!";
                error.className = "success";
                return true;
            }
    }

