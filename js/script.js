// VARIABLES GLOBALES

let elementoCasillaLista = document.querySelectorAll("article section")
let elDesboard = document.getElementById("desboard")

let gameState = true

let tableroSudoku = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]






// FILAS
function hayRepetidosEnLasFilas(matriz) {
            
    let bandera =  false // supongo que no hay repetidos

    for(let i = 0; i < matriz.length; i ++){
        if(matriz[i][0] == matriz[i][1] || matriz[i][0] == matriz[i][2] || matriz[i][1] == matriz[i][2] || matriz[i][0] == 0 || matriz[i][1] == 0 || matriz[i][2] == 0){
            bandera = true
        }
    }
    return bandera
}

    // COLUMNAS
    function hayRepetidosEnLasColumnas(matriz) {
    let bandera = false
    for(let j = 0; j < matriz.length; j++){
        if(matriz[0][j] == matriz[1][j] || matriz[0][j] == matriz[2][j] || matriz[1][j] == matriz[2][j] || matriz[0][j] == 0 || matriz[1][j] == 0 || matriz[2][j] == 0){
            bandera = true 
         }
}
return bandera
}



function sumarUnoPosicion(i,j){
    if(tableroSudoku[i][j] < 3 ){
        tableroSudoku[i][j]++
    } else {
        tableroSudoku[i][j] = 1
    }
}


function jugada(casillaDondeSeHizoClick){
    if (gameState == true){
    //saco del elemento donde se hizo click, los valores de los atributos que creé (data-x="0" data-y="0") para representar las posiciones
    let i = casillaDondeSeHizoClick.getAttribute("data-x")
    let j = casillaDondeSeHizoClick.getAttribute("data-y")
    //paso la posicion donde se jugó, a la funcion que se hace cargo de modificar el tablero segun corresponda
    sumarUnoPosicion(i,j)
    //como medio para mostrar el resultado, muestro por consola el tablero
    console.table(tableroSudoku)
    //actualizo la interfaz para el usuario
    casillaDondeSeHizoClick.innerHTML = tableroSudoku[i][j]


    // AHORA CONTROLO SI SE TERMINO EL JUEGO

    if(hayRepetidosEnLasFilas(tableroSudoku) == true || hayRepetidosEnLasColumnas(tableroSudoku) == true){

    console.log("Todavia no terminaste")
    elDesboard.innerHTML = "Seguí participando"
    }else{
        console.log("Juego terminado")
        elDesboard.innerHTML = "Juego terminado, ganaste"

        gameState = false
        }

    }
}

function play (){
    for(let i = 0; i < elementoCasillaLista.length; i++){
    elementoCasillaLista[i].addEventListener("click", function(event){
        //obtengo del parametro event(que viene por default), el elemento donde se hizo click
        let casillaDondeSeHizoClick = event.target
        jugada(casillaDondeSeHizoClick)

        
    })
}
}

play()