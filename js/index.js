var signUpName=document.querySelector("#signUpName")
var signUpEmail=document.querySelector("#signUpEmail")
var signUpPass=document.querySelector("#signUpPass")
var signUpBtn=document.querySelector("#signUpBtn")
var cheackEmail=document.querySelector("#cheackEmail")
users=[]

if(JSON.parse(localStorage.getItem("userDetail")) !=null){
users=JSON.parse(localStorage.getItem("userDetail"))
}
function signUp(){
    
if (signUpName.value ==""|| signUpEmail.value==""||signUpPass.value==""){
        cheackEmail.innerHTML=`<span class=" text-danger my-3">All input required</span> `}
else{
    for(i=0;i<users.length;i++){
        if (users[i].email.toLowerCase()==signUpEmail.value.toLowerCase()){
            cheackEmail.innerHTML=`<span class=" text-danger my-3">Already Exist</span> `
            return false}
        }

        userData()
        cheackEmail.innerHTML=`<span class=" text-success my-3">Success</span> `
    }
}
function userData(){
    user={
        name:signUpName.value,
        email:signUpEmail.value,
        password:signUpPass.value
    }
    users.push(user)
    localStorage.setItem("userDetail",JSON.stringify(users))
}



signUpBtn?.addEventListener("click",function(){
signUp()

})


//   -------------------------------------------------------------


var signInPass=document.querySelector("#signInPass")
var signInEmail=document.querySelector("#signInEmail")
var logInBtn=document.querySelector("#logInBtn")
var checkInput=document.querySelector("#checkInput")


function signIn(){
if(signInEmail.value==""||signInPass.value==" " ){
    checkInput.innerHTML=`<span class=" text-danger my-3">All input required</span>`
}

else{
for(let i=0;i<users.length;i++){
    if(signInEmail.value == users[i].email && signInPass.value==users[i].password){
        checkInput.innerHTML=`<span class=" text-success my-3">Success</span>`
        localStorage.setItem("userName",JSON.stringify(users[i].name))
        window.location.href="home.html"
        return;
    }
}
checkInput.innerHTML=`<span class=" text-danger my-3">Email or Password is incorrect</span`


}
}


        logInBtn?.addEventListener("click",function(){
            signIn()
        })
// ............................................................................

var home=document.querySelector('#homeUser')
let loged=localStorage.getItem('userName')
home.innerHTML=` <h2 class="text-info fs-1 ">Welcome ${loged}</h2>`