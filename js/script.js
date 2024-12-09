let username;

document.getElementById("mySubmit").onclick=function(){
    username=document.getElementById("userid").value
    document.getElementById("par1").textContent=`Привіт ${username}`
}

function showHidePSWD(){
    let x=document.getElementById("pswd");
    if (x.type==="password"){
        x.type="text";
    }else{      
        x.type="password";
    }
}

    
