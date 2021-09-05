var numsquares=6;
var colors=generateRandomColor(numsquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.getElementById("ColorDisplay");
var messagedisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

colordisplay.textContent=pickedcolor;


easybtn.addEventListener("click",function(){
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numsquares=3;
    colors=generateRandomColor(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++)
    {
    if(colors[i])
    squares[i].style.backgroundColor=colors[i];
    else
    squares[i].style.display="none";
    }
})

hardbtn.addEventListener("click",function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numsquares=6;
    colors=generateRandomColor(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++)
    {
    squares[i].style.backgroundColor=colors[i];
    squares[i].style.display="block";
    }
})
    


resetbutton.addEventListener("click",function(){
    colors=generateRandomColor(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    this.textContent="New Colors";
    messagedisplay.textContent="";
    for(var i=0;i<squares.length;i++)
    {
    squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
    
}
)

for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
        var clickedcolor=this.style.backgroundColor;

        if(clickedcolor===pickedcolor){
            messagedisplay.textContent="CORRECT!";
            resetbutton.textContent="Play Again?";
            changeColors(clickedcolor);
            h1.style.backgroundColor=clickedcolor;
        }else{
            this.style.backgroundColor="#232323";
            messagedisplay.textContent="Try Again!";
        }
    });
}


function changeColors(color){
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}

function pickcolor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}


function generateRandomColor(num){
    var arr=[];

    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }

    return arr;
}


function randomColor(){ 
    var r=Math.floor(Math.random() * 256);

    var g=Math.floor(Math.random() * 256);

    var b=Math.floor(Math.random() * 256);


    return  "rgb(" + r + ", " + g + ", " + b + ")";
}