import Board from "./board";
import Card from "./card";
import Kanban from "./kanban"
//creamos una instacia de kanban
const kanban = new Kanban();
//? Creo algunas de las carpetas
const card01  = new Card('Tarea 1');
const card02  = new Card('Tarea 2');
const card03  = new Card('Tarea 3');
const card04  = new Card('Tarea 4');
const card05  = new Card('Tarea 5');
const card06  = new Card('Tarea 6');
//? Creo los tableros
const board01 = new Board('TODO', [card01,card02])
const board02 = new Board('TODO', [card03,card04])
const board03 = new Board('TODO', [card05,card06])
kanban.add(board01);
kanban.add(board02); 
kanban.add(board03);
console.log(kanban);
//!references
const container= document.querySelector('#container');
const  newBoardButton = documen.querySelector('#new-board-button');

newBoardButton.addEvenListener('click', addBoard)
renderUI();
function renderUI(){
    const boardsHTML = kanban.boards.map((board, boardIndex)=>{
        const cardsHTML = board.items.map((card,index)=>{
            return card.getHTML(board, boardIndex, index)
        })
        return board.getHTML(boardIndex, cardsHTML);
    });
    container.innerHTML = boardsHTML.join('');
    enableNewCard();

}

function addBoard(e){
    const name = prompt('name of the board')
    if(name){
        const board = new Board(name, []);
        kanban.add(board)
        renderUI();
    }
  function enableNewCard(){
    document.querySelector('.form-new').array.forEach(form => {
        form.addEvenListener('submit', e=>{
            e.preventDefault();
            const text = fomr.querySelector('.text').value;
            const card = new Card(text);
            const indexBoard = form.querySelector('.index-board').value;
            kanban.addCard(card, indexBoard);
            renderUI();
        })
    });
  }
}