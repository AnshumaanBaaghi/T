let form = document.getElementById('form')
let arr = JSON.parse(localStorage.getItem("UserData")) || []
form.addEventListener("submit",function(e){
    e.preventDefault()
    let data={
        username:form.username.value,
        password:form.password.value,
    }
    let flag=false
    arr.forEach(function(element){
        console.log('element:', element)
        if(element.username=== data.username && element.password=== data.password){
            flag=true
            localStorage.setItem("SingleUser",JSON.stringify(element))
        }    
    });
    if(flag){
        alert("Login Successfull")
        window.location.href="./home.html"
    }
    else{
        alert("Login Failed")
    }
})