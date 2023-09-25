let turn='X'
let button=document.querySelectorAll('.btn')
let display=document.querySelector('.display')
let gameover=false;
function changeTurn(){
    if(turn=='X'){
        return turn='O'
    } 
    else{
        return turn='X'
    }
}
function checkWins(){
    let boxtexts=document.querySelectorAll('.boxtext')
    let line=document.querySelector('.line')
    let imgbox=document.querySelector('.imgbox').getElementsByTagName('img')
    let winarray=[
        [0,1,2,2,5,0],[3,4,5,2,15,0],[6,7,8,2,25,0],
        [0,3,6,-8,15,90],[1,4,7,2,15,90],[2,5,8,12,15,90],
        [0,4,8,2,15,45],[2,4,6,2,15,135]
    ]
    winarray.forEach((e)=>{
        let x=boxtexts[e[0]].textContent
        let y=boxtexts[e[1]].textContent
        let z=boxtexts[e[2]].textContent
        if((x===y) && (y===z) && x!=''){
         const img=document.createElement('img')
         display.textContent=turn+" won";
         line.style.width="26vw"; 
         line.style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate( ${e[5]}deg)`
         imgbox[0].style.width="15vw"
         gameover=true;
        //  reset();
        }
    })
        
}
function reset(){
    Array.from(button).forEach((element)=>{
        element.children[0].textContent='';
        element.addEventListener('click',abc)
    })  
    turn='X';
    gameover=false; 
    display.textContent='turn for '+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0vw"
    document.querySelector('.line').style.width=`0vw`;
}
function abc(){
    let boxtext=this.children[0];
    if(boxtext.textContent===''){
        boxtext.textContent=turn;
        checkWins();
        changeTurn();
        if(!gameover){
        display.textContent='turn for '+turn;
        }
        else{
            Array.from(button).forEach((element)=>{
                element.removeEventListener('click',abc) 
            })
        }
    }
}

Array.from(button).forEach((element)=>{
    element.addEventListener('click',abc)
})
