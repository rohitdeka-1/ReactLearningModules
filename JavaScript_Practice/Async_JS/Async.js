

const sayRohit = function(){
    console.log("Rohit")
}

const changeName = function(){
    document.querySelector('h1').innerHTML = "Jay Shri Ram"
}

const changeMe =  setTimeout(changeName,2000)

document.querySelector('#stop')
addEventListener('click', function(){
    clearTimeout(changeMe)
})
