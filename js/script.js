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
    document.body.style.backgroundImage = `url(https://github.com/tmiguel78/project-break-dashboard/blob/main/assets/backgroundImages/${arrBackgroundImages[indiceImagen]})`;
    
};
setBackgroundImage();

setInterval(() => {
    setBackgroundImage()
}, 15000);