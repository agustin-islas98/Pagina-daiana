let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("html");
        habilidades[1].classList.add("css");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("photoshop");
        habilidades[5].classList.add("word");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

// Función para abrir la ventana modal con la imagen correspondiente
function abrirModal(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modalImg.src = src;
    modal.style.display = 'block';

    // Agregar la clase "modal-open" al cuerpo de la página
    document.body.classList.add('modal-open');
}

// Función para cerrar la ventana modal
function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';

    // Eliminar la clase "modal-open" del cuerpo de la página
    document.body.classList.remove('modal-open');
}

// Obtener todos los elementos con clase "proyecto"
const proyectos = document.querySelectorAll('.proyecto');

// Agregar un evento click a cada elemento "proyecto"
proyectos.forEach(proyecto => {
    proyecto.addEventListener('click', () => {
        const imgSrc = proyecto.querySelector('img').getAttribute('src');
        abrirModal(imgSrc);
    });
});

// Agregar un evento click al elemento con clase "close" para cerrar la ventana modal
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', cerrarModal);

// Agregar un evento click al fondo oscuro de la ventana modal para cerrarla también
const modal = document.getElementById('modal');
modal.addEventListener('click', cerrarModal);
