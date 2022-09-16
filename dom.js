let maindiv = document.getElementById("maindiv")
// console.log('maindiv:', maindiv)
// let arr=[1,2,3,4,5,6,7,8]
// setInterval(()=>{
//         
//         
// },1000)
let arr=[
    {brand:"apple",price:60000,imgUrl:""},
    {brand:"samsung",price:6000,imgUrl:""},
    {brand:"sony",price:10000,imgUrl:""},
    {brand:"moto",price:20000,imgUrl:""},
    {brand:"vivo",price:30000,imgUrl:""},
    {brand:"oppo",price:40000,imgUrl:""}
]
// for(let i=0;i<arr.length;i++){
//     console.log('index:', i)
//     console.log('element:', arr[i])
// }

let btn = document.getElementById("button")
btn.addEventListener('click',renderDOM)
document.getElementById("s").addEventListener("change",function(e){
    console.log(e.target.value);
})
function renderDOM(){
    arr.forEach(function(element){
        let div = document.createElement('div')
        // let img = document.createElement("img")
        // img.setAttribute("src",element.imgUrl)
        // img.setAttribute("alt","Invalid Url")
        // let Childdiv1 = document.createElement('h1')
        // Childdiv1.innerText="Brand: "+element.brand
        // let Childdiv2 = document.createElement('p')
        // Childdiv2.innerText="Price: "+ element.price
        // div.append(Childdiv1,Childdiv2)
        div.innerHTML=`
        <h1>Brand: ${element.brand}</h1>
        <p>Price: ${element.price}</p>
        `
        maindiv.append(div)
    });
}
// renderDOM()
