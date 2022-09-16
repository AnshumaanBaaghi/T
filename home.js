let UserdataDiv = document.getElementById('Userdata')
let UserData = JSON.parse(localStorage.getItem("SingleUser"))

UserdataDiv.innerHTML=`
            <div>Name:${UserData.name}</div>
            <div>Username:${UserData.username}</div>
            <div>Password:${UserData.password}</div>
`
