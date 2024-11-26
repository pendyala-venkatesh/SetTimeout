function displayMessage(){
    setTimeout(() =>{
        //perform task
        let h1=document.getElementById("msg")
        h1.innerText="welcome to javascript!"
    },2000);
}
function changeColor(){
    let allElements=document.getElementsByClassName("color")
    let input=allElements[0].value
    setTimeout(() =>{
        allElements[1].style.backgroundColor=input
    },3000);
}
function displayImage(){
    let div =document.getElementById("image")

    setTimeout(() => {
        div.innerHTML=
        "<img src='photo.jpg'></img>"
    },3000);
}
function displayMessage2(){
    var input="full stack java developer"
    let h1=document.getElementById("output")

    setInterval(() =>{
        h1.innerText += input
    },2000);
}