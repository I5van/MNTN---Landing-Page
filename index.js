let contentBlock1=document.querySelector("#block-1")
let contentBlock2=document.querySelector("#block-2")
let contentBlock3=document.querySelector("#block-3")
let scrollUpBlock1 = document.querySelector("#scroll-up-1")
let scrollUpBlock2 = document.querySelector("#scroll-up-2")
let scrollUpBlock3 = document.querySelector("#scroll-up-3")
let scrollUpBlock4 = document.querySelector("#scroll-up-4")
let footer = document.querySelector("#footer-content")



let lastKnownScrollPosition = 0;

let d = 280;
let n =420;
let m = 480;
let flag = false
let flagBlock2 = false
let flagBlock3=false


document.addEventListener("scroll", (event) => {
let positionContent1=contentBlock1.getBoundingClientRect().top
let positionContent2=contentBlock2.getBoundingClientRect().top
let positionContent3=contentBlock3.getBoundingClientRect().top
let positionFooter=footer.getBoundingClientRect().top

console.log(positionContent3)
    if(positionContent1<d && flag==false){
        
        flag=true
        block1Appear()
        
        
    }
    
    if(n>positionContent2 && flagBlock2==false){
        flagBlock2=true
        block2Appear()
    }
    if(n>positionContent3 && flagBlock3==false){
        flagBlock3=true
        block3Appear()
    }



    
 }
)
function block1Appear(){
    
    contentBlock1.style.animationPlayState="running"
    scrollUpBlock2.style.opacity="100%"
    scrollUpBlock1.style.opacity="50%"
}
function block2Appear(){
    contentBlock2.style.animationPlayState="running"
    scrollUpBlock3.style.opacity="100%"
    scrollUpBlock2.style.opacity="50%"
}
function block3Appear(){
    contentBlock3.style.animationPlayState="running"
    scrollUpBlock4.style.opacity="100%"
    scrollUpBlock3.style.opacity="50%"
}

