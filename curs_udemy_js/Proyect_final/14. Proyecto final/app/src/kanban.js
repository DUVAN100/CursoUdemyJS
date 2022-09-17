export default class Kanban{
    boards; 
    constructor(){
        this.boards=[];
    }
    add(board){
        this.boards.push(board)
    }
    addCard(card, indexBoard){
        this.getBoard(indexBoard).add(card)
    }
    gatBoard(index){
        return this.boards[index];
    }
    getIndex(id){
        return this.boards.findIndex(board => board.id == id)
    }
    removeCard(index, indexCard){
        const card = this.getBoard(indexBoard).items.splice(indexCard, 1)[0];
        return card;
    }
    insertCard(card, indexBoard, indexCard){
        this.getBoard(indexBoard).items.splice(indexCard + 1, 0, card );
    }
    moveCard(indexBoardSrc, indexCardSrc, indexBoardTarget, indexCardTarget){
        const srccard = this.removeCard(indexBoardSrc, indexCardSrc);
        this.insertCard(srccard, indexBoardTarget, indexCardTarget)
    }
    updateBpard(id, index, title){
        this.getBoard(index).title = title;
    }
    removeBoard(index){
        const id = this.boards[index].id;
        this.boards.splice(index, 1);
    }
    updateCard(indexBoard, indexCard, title){
        const card = this.boards[indexBoard].items[indexCard];
        card.title = title;
    }
}