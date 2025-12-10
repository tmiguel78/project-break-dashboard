// Capturar areas de inputs y botón

const input_nombre_area = document.getElementById('input_nombre');
const input_link_area   = document.getElementById('input_link');
const lista_enlaces     = document.getElementById('lista_enlaces');
const btn_links         = document.getElementById('btn_links');
const btn_cerrar        = document.querySelectorAll('.boton_cerrar');


// Función para guardar en el localStorage

const guardarLocalStorage = (lista) => {
    localStorage.setItem('links', JSON.stringify(lista))
}

// Función para obtener del localStorage

const obtenerDeLocalStorage = () => {
    return JSON.parse(localStorage.getItem('links')) || [] 
}

// Funcion renderizar links

const renderLinks = () => {
    const links = obtenerDeLocalStorage();
    lista_enlaces.innerHTML = '';
    for (let i = 0; i < links.length; i++) {
        lista_enlaces.innerHTML += `
        <li class="links">
            <a href="${links[i].url}" target="_blank">${links[i].nombre}</a>
            <button onclick="borrarLinks(${i})">X</button>
        </li>
        `
    }
};
// Función para eliminarlos 

const borrarLinks = (indiceChisteBorrar) => {
    const todosLinks = obtenerDeLocalStorage()
    todosLinks.splice(indiceChisteBorrar, 1)
    guardarLocalStorage(todosLinks);
    renderLinks();
};

// Evento para el boton

btn_links.addEventListener('click', () => {

    const nombre = input_nombre_area.value;
    const url = input_link_area.value;
    const links = obtenerDeLocalStorage();
    
    links.push({nombre, url})
    guardarLocalStorage(links)
    renderLinks()
})

renderLinks();


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
    document.body.style.backgroundImage = `url(./assets/backgroundImages/${arrBackgroundImages[indiceImagen]})`;
    
};
setBackgroundImage();

setInterval(() => {
    setBackgroundImage()
}, 15000);