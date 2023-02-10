let signupbtn= document.getElementById('signup-btn');
let signinbtn= document.getElementById('signin-btn');
let namefield= document.getElementById('nameField');
let title= document.getElementById('title');

signinbtn.onclick= function(){
    namefield.style.maxHeight= '0px';
    title.innerHTML= 'Sign in';
    signupbtn.classList.add('disable');
    signinbtn.classList.remove('disable');
}

signupbtn.onclick= function(){
    namefield.style.maxHeight= '60px';
    title.innerHTML= 'Sign up';
    signupbtn.classList.remove('disable');
    signinbtn.classList.add('disable');
}