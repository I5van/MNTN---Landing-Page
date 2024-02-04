let contentBlock1=document.querySelector("#block-1")
let contentBlock2=document.querySelector("#block-2")
let contentBlock3=document.querySelector("#block-3")





let lastKnownScrollPosition = 0;

let d = 100;
let flag = false

document.addEventListener("scroll", (event) => {
    let positionContent1=contentBlock1.getBoundingClientRect().top
let positionContent2=contentBlock2.getBoundingClientRect().top
let positionContent3=contentBlock3.getBoundingClientRect().top

    if(positionContent1<d && flag==false){
        flag=true
        console.log("vcvvvvvvvvvvvvvvv")
    }
    if(lastKnownScrollPosition<positionContent2){
        
    }
    if(lastKnownScrollPosition<positionContent3){
        
    }



    
 }
)

