// Math.random() Para generar aleatoriedad
// Mayúsculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// Minúsculas: "abcdefghijklmnopqrstuvwxyz"
// Números: "0123456789"
// Símbolos "!@#$%^&*()-_=+"

// Creo un array vacío donde iré metiendo una de cada
// Necesito un addEventListener para el botón
// tener en cuenta LONGITUD del array, minimo 12 caracteres, maximo 50.
// el value del number tiene que ser igual a longitud del array



const btn_contraseña    = document.getElementById('btn_contraseña');
const numero_caracteres = document.getElementById('numero_caracteres');
const areaContraseña    = document.getElementById('resultado_contraseña');

const mays      = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const mins      = "abcdefghijklmnopqrstuvwxyz";
const nums      = "0123456789";
const simbolos  = "!@#$%^&*()-_=+";

let arrContraseña = [];
let opcionUsuario;

function getPassword (opcionUsuario) {
    for (let i = 1; i < opcionUsuario; i++) {
        
        let indiceAleatorioMays = Math.floor(Math.random() * mays.length)
        arrContraseña.push(mays[indiceAleatorioMays])
        if (arrContraseña.length === opcionUsuario) {
                break
            } 
        let indiceAleatorioMins = Math.floor(Math.random() * mins.length)
        arrContraseña.push(mins[indiceAleatorioMins])
        if (arrContraseña.length === opcionUsuario) {
                break
            } 
        let indiceAleatorioNums = Math.floor(Math.random() * nums.length)
        arrContraseña.push(nums[indiceAleatorioNums])
        if (arrContraseña.length === opcionUsuario) {
                break
            } 
        let indiceAleatorioSimbolos = Math.floor(Math.random() * simbolos.length)
        arrContraseña.push(simbolos[indiceAleatorioSimbolos])
        
        if (arrContraseña.length === opcionUsuario) {
                break
            } 
    }
    return arrContraseña
};
   
btn_contraseña.addEventListener('click', () => {
    opcionUsuario = Number(numero_caracteres.value);
    arrContraseña = [];
    getPassword(opcionUsuario)
    const contraseñaDesordenada = arrContraseña.sort(() => Math.random() - 0.5)
    const contraseñaRandom = contraseñaDesordenada.join('')
    areaContraseña.textContent = contraseñaRandom
});

// Función para imágenes de fondo
const arrBackgroundImages = [
    "annie-spratt-FqrMFfB68Zw-unsplash.jpg",
    "eduard-pretsi-TMHcn_Of3sM-unsplash.jpg",
    "garvit-nama-QZEJr62IF_Y-unsplash.jpg",
    "jasper-kijk-in-de-vegte-MKI9Fj52Dao-unsplash.jpg",
    "liana-s---cZAZixQ-Y-unsplash.jpg",
    "mariola-grobelska-gskBnSDkoFY-unsplash.jpg",
    "pawel-czerwinski-VXMCJNvOgKM-unsplash.jpg",
    "pawel-czerwinski-ZtdaEYBAWHs-unsplash.jpg",
    "peter-muscutt-vPG4C-hbACo-unsplash.jpg",
    "red-zeppelin-xHpyGeeNsAs-unsplash.jpg",
    "zoha-gohar-WWlDskG5mY8-unsplash.jpg"
]

const setBackgroundImage = () => {
    let indiceImagen = Math.floor(Math.random() * arrBackgroundImages.length);
    document.body.style.backgroundImage = `url(../assets/backgroundImages/${arrBackgroundImages[indiceImagen]})`;
    
};
setBackgroundImage();

setInterval(() => {
    setBackgroundImage()
}, 15000);