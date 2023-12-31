const winning = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

let boxes = document.querySelectorAll('.box');
let resetbut = document.querySelector('.reset');
let msgContainer = document.querySelector('.msg-container');
let message = document.querySelector('.msg');
let newbut = document.querySelector(".new");



let turnO = true;
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if(turnO){
      box.innerHTML = "O";
      turnO = false;
    }else{
      box.innerHTML = 'X';
      turnO = true;
    }
    box.disabled = true;
    checkWinnner();
  });
  
});

const showWinner = (winner) => {
  message.innerHTML = `Congratulation!!! Winner is ${winner}`
  msgContainer.classList.remove('hide');
  disableButton();
}
const checkWinnner =() =>{
  for(let pattern of winning){
    let pos1 = boxes[pattern[0]].innerHTML;
    let pos2 = boxes[pattern[1]].innerHTML;
    let pos3 = boxes[pattern[2]].innerHTML;
    
    if (pos1 != "" && pos2 != "" && pos3 != ""){
      if (pos1 === pos2 && pos2 === pos3){
        showWinner(pos1);  
    }

  }
}
}
const disableButton =()=>{
  for (let box of boxes){
    box.disabled = true;
  }
}
const enableButton =()=>{
  for (let box of boxes){
    box.disabled = false;
    box.innerHTML='';
  }
}

function resetGame(){
  turnO = true;
  enableButton();
  msgContainer.classList.add('hide');
}

newbut.addEventListener('click',resetGame);
resetbut.addEventListener('click',resetGame);
