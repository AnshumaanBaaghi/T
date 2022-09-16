let form = document.getElementById('form')
let arr= JSON.parse(localStorage.getItem("UserData"))||[]

form.addEventListener("submit",function(e){
    e.preventDefault()
    let data={
        name:form.name.value,
        username:form.username.value,
        password:form.password.value
    }
    arr.push(data)
    localStorage.setItem("UserData",JSON.stringify(arr))
    window.location.href='./login.html'
})