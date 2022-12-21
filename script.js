// question-1
let C=document.getElementById("text");
console.log(C.innerText);

// question-1
let tagName=document.getElementsByTagName("h3");
console.log(tagName[0].innerText);

// question-1
let box=document.getElementsByClassName("box");
console.log(box.innerText)


// Clock

function timer(){
    let times= new Date();

    let hr=times.getHours();
    let min=times.getMinutes();
    let secs=times.getSeconds();
    document.getElementById("clock").innerHTML=hr+":"+min+":"+secs
    // document.getElementById("clock").innerHTML=`${hr} : ${min} :${secs}` //using tilda

    console.log(hr,min, secs);
    //call fuction after 5 sec again and again
    // setTimeout(timer,1000);//call the function at once in every 5 sec
}
setInterval(timer ,1000);//this will execute the code with out calling



let helloElement=document.getElementById("hello");
helloElement.addEventListener("click",function(){
    helloElement.style.backgroundColor="plum";
 console.log(helloElement.innerText="Hello World");

})


// flex box

let flexElement=document.getElementById("flex");
let bttElement=document.getElementsByClassName("btt");
let btfElement=document.getElementById("btf");

btfElement.addEventListener("click",function(){
    flexElement.style.flexDirection="column";
   
})


// heading

let headingElement=document.getElementById("heading")
headingElement.addEventListener("mouseover",function(){
    headingElement.style.color="red";
})
headingElement.addEventListener("mouseleave",function(){
    headingElement.style.color="black";
})


// Change Text


let helloworldElement=document.getElementById("helloworld");
helloworldElement.addEventListener("click",function(){
    helloworldElement.style.color="red";
 console.log(helloworldElement.innerText="Welcome to Elevation Academy");

})
