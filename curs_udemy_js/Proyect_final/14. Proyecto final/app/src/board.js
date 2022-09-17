import { generateId } from "./ids";
export default class Board{
    id;
    title;
    items;
    constructor(title, items){
        this.id = generateId();
        this.title = title;
        this.items = [...items];
    }
    getIndex(id){
        return this.items.findIndex(item => item.id ==id);
    }
    get(index){
        return this.items[index];
    }
    add(card){
        this.items.push(card);
    }
    get length(){
        return this.items.length;
    }
    getHTML(boardIndex, cards){
        return`
                <dir class="board--${this.id}">
                     <div class="header">
                        <div class="tilte">
                        ${this.title}
    
                        </div>
                        <div class="options">
                            <button class="more-options">...</button>
                            <div class="submenu">
                                <ul>
                                    <li><a href="#" class="board-submenu" data-id="${this.id}" data-index="${boardIndex}">edit</a></li>
                                    <li><a href="#" class="board-submenu" data-id="${this.id}" data-index="${boardIndex}">eliminar</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="items">
                    ${cards.join('')}
    
                    </div>
                    <div class="newItem">
                        <form action="#" class="form">
                            <input type="text" class="new-input" placeholder="+ Add another card" name="" id="">
                            <input type="hidden" class="index-board" name=""  value="${boardIndex}">
                        </form>
                    </div>
                 </dir>`
    }

}