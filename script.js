
let items = document.querySelector(".ch")
let items2 = document.querySelector(".sliding");
let countItem = items.length;
let itmeactive = 0;
let itmeactive2 = 0;
let a=0;


let keepchange = setInterval(()=>{
    
    slide()
    
    
},3000)


let sliding = setInterval(()=>{
    
    slide2()
    
},10000)




function slide(){
    let a = document.querySelector(".active");
    a.classList.remove('active')

    itmeactive++;
    if(itmeactive>3){
        itmeactive = 0;
    }

    items.children[itmeactive].classList.add('active');
    
}

function slide2(){

    let x = document.querySelector(".activeslide");
    x.classList.remove('activeslide')

    itmeactive2 ++;
    if(itmeactive2 >4){
        itmeactive2 = 0;
    }


    items2.children[itmeactive2].classList.add('activeslide');
}



let rc = document.querySelector("#redimg")
let bluc = document.querySelector("#blueimg")
let gc = document.querySelector("#goldimg")
let blc = document.querySelector("#blackimg")

let rc2 = document.querySelector("#redimg2")
let bluc2 = document.querySelector("#blueimg2")
let gc2 = document.querySelector("#goldimg2")
let blc2 = document.querySelector("#blackimg2")

let rc3 = document.querySelector("#redimg3")
let bluc3 = document.querySelector("#blueimg3")
let gc3 = document.querySelector("#goldimg3")
let blc3 = document.querySelector("#blackimg3")

let color = [rc,bluc,gc,blc,rc2,bluc2,gc2,blc2,rc3,bluc3,gc3,blc3]


function changecolor(x){
    if(x<=3){

        for(let i =0;i<4;i++){
            if(i==x){
                color[i].style.display='inline'
            }else{
                color[i].style.display='none' 
            }
        }
    }else if(x>3 && x<=7){
        for(let i =4;i<8;i++){
            if(i==x){
                color[i].style.display='inline'
            }else{
                color[i].style.display='none' 
            }
        }
    }else{
        for(let i =8;i<12;i++){
            if(i==x){
                color[i].style.display='inline'
            }else{
                color[i].style.display='none' 
            }
        }
    }
}






