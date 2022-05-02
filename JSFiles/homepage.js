

function create_galaxy(){
    let contentbox = document.querySelector(".maincontent");
    let contentbox2 = document.querySelector(".maincontent2");
    let greet_box = document.querySelector(".greetings_content");
    greet_box.style.display="none";
    contentbox.style.transform= "translateY(130px)";
    contentbox2.style.display = "none";
    contentbox.style.display = "block";
    
}
function exit_dialog(){
    let contentbox = document.querySelector(".maincontent");
    let contentbox2 = document.querySelector(".maincontent2");
    let greet_box = document.querySelector(".greetings_content");
    greet_box.style.display="block";
    contentbox.style.display = "none";
    contentbox2.style.display = "none";
}


function Login_galaxy(){
    let contentbox = document.querySelector(".maincontent");
    let contentbox2 = document.querySelector(".maincontent2");
    let greet_box = document.querySelector(".greetings_content");
    greet_box.style.display="none";
    contentbox.style.transform= "translateY(130px)";
    contentbox2.style.display = "block";
    contentbox.style.display = "none";
    
}