// Capturar areas de inputs y botón

const input_nombre_area = document.getElementById('input_nombre');
const input_link_area   = document.getElementById('input_link');
const lista_enlaces     = document.getElementById('lista_enlaces');
const btn_links         = document.getElementById('btn_links');


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
        <button class="btn-borrar" data-index="${i}">X</button>
        </li>
        `
    }
    const botonesBorrar = document.querySelectorAll('.btn-borrar');
    botonesBorrar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            borrarLinks(index);
        });
    });
};



// Evento para el boton

btn_links.addEventListener('click', () => {
    
    const nombre = input_nombre_area.value;
    const url = input_link_area.value;
    const links = obtenerDeLocalStorage();
    
    links.push({nombre, url})
    guardarLocalStorage(links)
    renderLinks()

    input_nombre_area.value = '';
    input_link_area.value = '';
})

renderLinks();

// Función para eliminarlos 

const borrarLinks = (indiceBorrar) => {
    const todosLinks = obtenerDeLocalStorage()
    todosLinks.splice(indiceBorrar, 1)
    guardarLocalStorage(todosLinks);
    renderLinks();
};

// window.borrarLinks = borrarLinks;

// Función para imágenes de fondo

import { arrBackgroundImages, setBackgroundImage } from "../js/script.js";

setBackgroundImage();

setInterval(() => {
    setBackgroundImage()
}, 15000);