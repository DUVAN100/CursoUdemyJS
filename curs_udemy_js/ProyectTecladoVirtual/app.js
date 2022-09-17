const keys = [
    [
        ['1', '!'],
        ['2', '@'],
        ['3', '#'],
        ['4', '$'],
        ['5', '%'],
        ['6', '&'],
        ['7', '/'],
        ['8', '('],
        ['9', ')'],
        ['0', '='],
        ['?', '¡']
    ],//first row

    [
        ['q', 'Q'],
        ['w', 'W'],
        ['e', 'E'],
        ['r', 'R'],
        ['t', 'T'],
        ['y', 'Y'],
        ['u', 'U'],
        ['i', 'I'],
        ['o', 'O'],
        ['p', 'P'],
    ],
    [
        ['MAYUS', 'MAYUS'],
        ['a', 'A'],
        ['s', 'S'],
        ['d', 'D'],
        ['f', 'F'],
        ['g', 'G'],
        ['h', 'H'],
        ['j', 'J'],
        ['k', 'K'],
        ['l', 'L'],
        ['ñ', 'Ñ']
    ],

    [
        ['SHIFT', 'SHIFT'],
        ['<', '>'],
        ['z', 'Z'],
        ['x', 'X'],
        ['c', 'C'],
        ['v', 'V'],
        ['b', 'B'],
        ['n', 'N'],
        ['m', 'M'],
        [',', ';'],
        ['.', ':'],
        ['-', '_']
    ],
    [
        ['SPACE', 'SPACE']
    ],//last row
]
let mayus = false;
let shift = false;
let current = null;
renderkeyboard();
function renderkeyboard(){
    const keyboardContainer = document.querySelector('#keyboard-container');
    let empty = '<div class="key-empty"></div>';
    
    
    const layers = keys.map((layer) =>{
        return layer.map(key =>{
            if(key[0] == 'SHIFT'){
                return `<button class="key key-shift">${key[0]}</button>`;
            }
            if(key[0] == 'MAYUS'){
                return `<button class="key key-mayus">${key[0]}</button>`;
            }
            if(key[0] == 'SPACE'){
                return `<button class="key key-mayus"></button>`;
            }
            return`
                <button class="key key-normal">
                ${
                    shift 
                        ? key[1] 
                        : mayus &&
                        key[0].toLowerCase().charCodeAt(0) >= 97 &&
                        key[0].toLowerCase().charCodeAt(0) <= 122 
                        ? key[1]
                        : key[0]
                    }
                </button>
            `;
        })
    });
    document.querySelectorAll('.key').forEach(key =>{
        console.log/(key);
        key.addEventListener('click', (e) =>{
            if(current){
                if(key.textContent == 'SHIFT'){
                    shift = !shift;                    
                }

            }

        })
    })
    layers[0].push(empty);
    layers[1].unshift(empty);
    const htmlLayers = layers.map((layer) =>{
        return layer.join('');
    });

    keyboardContainer.innerHTML = '';
    htmlLayers.forEach(layer =>{
        keyboardContainer.innerHTML += `<div class="layer">${layer}</div>`
    })

}


document.querySelectorAll('input').forEach((input) =>{
    input.addEventListener('focusin', (e) =>{
        current = e.target;
       
    });
});