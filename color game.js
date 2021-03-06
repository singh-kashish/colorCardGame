//old way
// var numSquares=6;
// var colors=generateRandomColors(6);
// var squares=document.querySelectorAll(".square");
// var pickedColor=pickColor();
// var colorDisplay=document.getElementById("colorDisplay");
// colorDisplay.textContent=pickedColor;
// var messageDisplay=document.querySelector("#message");
// var h1=document.querySelector("h1");

// var easyBtn=document.querySelector("#easyBtn");
// var hardBtn=document.querySelector("#hardBtn");

// easyBtn.addEventListener("click",function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares=3;
//     colors=generateRandomColors(numSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent=pickedColor;
//     for(var i=0;i<squares.length;i++){
//         if(colors[i]){squares[i].style.backgroundColor=colors[i];
//     }
//     else{
//         squares[i].style.display="none";
//     }
// }

// })
// hardBtn.addEventListener("click",function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     colors=generateRandomColors(numSquares);
//     pickedColor=pickColor();
    
//     colorDisplay.textContent=pickedColor;
//     for(var i=0;i<squares.length;i++){
//         squares[i].style.display="block";
//         {squares[i].style.backgroundColor=colors[i];
    
//     }
    
    
// }

// })


// var resetButton=document.querySelector("#reset");
// resetButton.addEventListener("click",function(){
//     //generate all new colors
//     colors=generateRandomColors(numSquares);
//     //pick a new random color
//     pickedColor=pickColor();
//     //change color display to match picked color
//     colorDisplay.textContent=pickedColor;
//     //change colors of squres
//     for(var i=0;i<squares.length;i++){
//         squares[i].style.backgroundColor=colors[i];
//     }
//     h1.style.backgroundColor="steelblue";
//     messageDisplay.textContent=""
//     this.textContent="New Colors"
// })

// for(var i=0;i<squares.length;i++)
// {
//     squares[i].style.backgroundColor=colors[i];
//     //add initial colors to squares
//     squares[i].addEventListener("click",function(){
//         //grab color of clicked square
//         var clickedColor=this.style.backgroundColor;
//         //compare color to picked color
//         if(clickedColor===pickedColor)
//         {
//             messageDisplay.textContent = "Correct";
//             changeColors(clickedColor);
//             h1.style.backgroundColor=clickedColor;
//             resetButton.textContent="Play Again";

//         }
//         else{
//             this.style.backgroundColor="#232323";
//             messageDisplay.textContent = "Try Again";
//         }
//     })

// }
// function changeColors(color){
//     //loop through all the colors
//     for(var i=0;i<squares.length;i++){
//         //change each color to match
//         squares[i].style.backgroundColor=color;
//     }
// }
// function pickColor(){
//           var random= Math.floor(Math.random()*colors.length);  
//           return colors[random];
// }
// function generateRandomColors(num){
//     //make an array
//     var arr=[];
//     //add num random colors to array
//     for(var i=0;i<num;i++){
//         //get random color and push into arr
//             arr.push(randomColor());
//     }
//     //return that array
//     return arr;
// }
// function randomColor(){
//     //pick a "red" from 0-255
//     var r=Math.floor(Math.random()*256);
//     //pick a "green" from 0-255
//     var g=Math.floor(Math.random()*256);
//     //pick a "blue" from 0-255
//     var b=Math.floor(Math.random()*256);
//     return "rgb("+ r + ", " + g + ", " + b+")";
// }

//new 


var numSquares=6;
var colors=[];
var squares=document.querySelectorAll(".square");
var pickedColor;
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();
function init(){
    setUp();

for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];
    //add initial colors to squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor=this.style.backgroundColor;
        //compare color to picked color
        if(clickedColor===pickedColor)
        {
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
            resetButton.textContent="Play Again";

        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent = "Try Again";
        }
    })

}
reset();
}
function setUp()
{
    for(var i=0;i<modeButtons.length;i++){
                modeButtons[i].addEventListener("click",function(){
                    modeButtons[0].classList.remove("selected");
                    modeButtons[1].classList.remove("selected");
                    this.classList.add("selected");
                    this.textContent==="Easy"?numSquares=3 : numSquares=6;
                    reset();
        })
    }
}
function reset(){
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    resetButton.textContent="New Colors";
    messageDisplay.textContent="";
    for(var i=0;i<squares.length;i++){
        if(colors[i])
        {
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
    }
    else{

        squares[i].style.display="none";
    }
}
h1.style.backgroundColor="steelblue";

}



// var easyBtn=document.querySelector("#easyBtn");
// var hardBtn=document.querySelector("#hardBtn");

// easyBtn.addEventListener("click",function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares=3;
    

// })
// hardBtn.addEventListener("click",function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     colors=generateRandomColors(numSquares);
//     pickedColor=pickColor();
    
//     colorDisplay.textContent=pickedColor;
//     for(var i=0;i<squares.length;i++){
//         squares[i].style.display="block";
//         {squares[i].style.backgroundColor=colors[i];
    
//     }
    
    
// }

// })


var resetButton=document.querySelector("#reset");
resetButton.addEventListener("click",function(){
    reset();
})




function changeColors(color){
    //loop through all the colors
    for(var i=0;i<squares.length;i++){
        //change each color to match
        squares[i].style.backgroundColor=color;
    }
}
function pickColor(){
          var random= Math.floor(Math.random()*colors.length);  
          return colors[random];
}
function generateRandomColors(num){
    //make an array
    var arr=[];
    //add num random colors to array
    for(var i=0;i<num;i++){
        //get random color and push into arr
            arr.push(randomColor());
    }
    //return that array
    return arr;
}
function randomColor(){
    //pick a "red" from 0-255
    var r=Math.floor(Math.random()*256);
    //pick a "green" from 0-255
    var g=Math.floor(Math.random()*256);
    //pick a "blue" from 0-255
    var b=Math.floor(Math.random()*256);
    return "rgb("+ r + ", " + g + ", " + b+")";
}

