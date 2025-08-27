// Sign In elements
var loginEmail = document.querySelector("#loginEmail");
var loginPass = document.querySelector("#loginPass");

// Sign Up elements
var userName = document.querySelector("#userName");
var userEmail = document.querySelector("#userEmail");
var userPass = document.querySelector("#userPass");
var userRePass = document.querySelector("#userRePass");
var userPhone = document.querySelector("#userPhone");


// Sign In Function
async function SignIn(){
    var data = {
     email: loginEmail.value,
   password: loginPass.value,
}
    var res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin",
        {
            method:"POST",
            headers:{"Content-Type":"Application/json"},
            body:JSON.stringify(data)
        }
    );
    var finalRes = await res.json();
    console.log(finalRes);
}
 
document.querySelector("button").addEventListener("click",function(e){
    SignIn();
    e.preventDefault();
})




// Sign Up Function
async function SignUp(){
    var data = {
    name: userName.value,
    email: userEmail.value,
    password: userPass.value,
    rePassword: userRePass.value,
    phone: userPhone.value,
}
    var res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup",
        {
            method:"POST",
            headers:{"Content-Type":"Application/json"},
            body:JSON.stringify(data)
        }
    );
    var finalRes = await res.json();
    console.log(finalRes);
}
 
document.querySelector("button").addEventListener("click",function(e){
    SignUp();
    e.preventDefault();
})
