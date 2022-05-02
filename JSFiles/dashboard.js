let profile = document.querySelector(".navigation .ic1");
let chat = document.querySelector(".navigation .ic2");

let greet = document.querySelector(".greetings_content");
let profile_page = document.querySelector(".profile-page");
let chatlist = document.querySelector(".chat-window2");
let chatbox = document.querySelector(".chat-window");
let conversation = document.querySelectorAll(".chat-box2 ul li");

profile.addEventListener('click',function(){
    greet.style.display="none";
    chatlist.style.display="none";
    chatbox.style.display="none";
    profile_page.style.display="block";
})

chat.addEventListener('click',function(){
    profile_page.style.display="none";
    greet.style.display="none";
    chatbox.style.display="none";
    chatlist.style.display="block";
   
})
conversation.forEach(item => {
    item.addEventListener('click',function(){
    profile_page.style.display="none";
    greet.style.display="none";
    chatlist.style.display="none";
    chatbox.style.display="block";
    })  
})