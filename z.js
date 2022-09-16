let arr=[
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRaGh-0bWaBIhLrdvi07yq-trgR6CFQPmeQ&usqp=CAU",
        price:400
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRaGh-0bWaBIhLrdvi07yq-trgR6CFQPmeQ&usqp=CAU",
        price:500
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRaGh-0bWaBIhLrdvi07yq-trgR6CFQPmeQ&usqp=CAU",
        price:600
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRaGh-0bWaBIhLrdvi07yq-trgR6CFQPmeQ&usqp=CAU",
        price:700
    },
]
let obj = arr[2]
localStorage.setItem("KeyKaNaam",JSON.stringify(obj))
// new page
let element = localStorage.getItem("KeyKaNaam")
let data = JSON.parse(element)
console.log('data:', data)