

// document.querySelector("button").addEventListener("click" ,function(){

//     alert("I got clicked")
// })

for( i=0 ; i<7 ; i++){

document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
            
        
//         var audio =new Audio("./sounds/crash.mp3")
//         audio.play()
//         console.log(this.style.color=" red")
        Play_Drum(this.innerHTML);
        Animation(this.innerHTML);
        
  })

}

document.addEventListener("keypress" , function(event){
    Play_Drum(event.key)
    Animation(event.key)
    console.log(event.key)
})


function Play_Drum(a){
switch(a){

    case 'w':
        var audio =new Audio("./sounds/crash.mp3")
        audio.play()
        break
       
    case "a":
        var audio =new Audio("./sounds/kick-bass.mp3")
        audio.play()
        break

    case "s":
        var audio =new Audio("./sounds/snare.mp3")
        audio.play()
        break
        
    case "d":
        var audio =new Audio("./sounds/tom-1.mp3")
        audio.play()
        break
     
    case "j":    
        var audio =new Audio("./sounds/tom-2.mp3")
        audio.play()
        break  
        
    case  "k":
        var audio =new Audio("./sounds/tom-3.mp3")
        audio.play()
        break

    case "l":
        var audio =new Audio("./sounds/tom-4.mp3")
        audio.play()
        break

    default:
        var audio =new Audio("./sounds/tom-4.mp3")
        audio.play()
        break    
}

}


function Animation(takeValue){

    document.querySelector("." + takeValue).classList.add("pressed");

    setTimeout(function(){

        document.querySelector("." + takeValue).classList.remove("pressed");

    },100)

}