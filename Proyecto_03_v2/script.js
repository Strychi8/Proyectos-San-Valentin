const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const text = document.getElementById('text');
const gif = document.getElementById('gif');
const vid = document.querySelector('video');

/* Definir los pasos con sus respectivos GIFs, textos y estilos para los botones */
const steps = [
    {
        gif: "recursos/rusure.gif",
        text: "¿Quisiste decir que SI, verdad, reina? 😏",
        yesStyle: { height: "65%", width: "60%" },
        noStyle: { width: "30%" }
    },
    {
        gif: "recursos/shocked-cat.gif",
        text: "Se te resbaló el dedo, ¿no? 😧",
        yesStyle: { height: "70%", width: "70%" },
        noStyle: { width: "20%" }
    },
    {
        gif: "recursos/sad-cat.gif",
        text: "No me hagas esto 😭",
        yesStyle: { height: "80%", width: "80%" },
        noStyle: { width: "10%", fontSize: "4vh" } 
    },
    {
        gif: "recursos/puss-in-boots.gif",
        text: "Por favor 😿💔",
        yesStyle: { height: "90%", width: "96%" },
        noStyle: { display: "none" } 
    }
];

let stepIndex = 0;

const allGifs = steps.map(step => step.gif).concat("recursos/in-love-cat.gif");

/* Precargar las imágenes para evitar retrasos al cambiar de paso */
allGifs.forEach(src => {
    const img = new Image();
    img.src = src;
});


noBtn.addEventListener('click', () => {
    if (stepIndex < steps.length) {
        const currentStep = steps[stepIndex];
        gif.src = currentStep.gif;  /* Cambiar el GIF al del paso actual */
        text.innerHTML = currentStep.text; /* Cambiar el texto al del paso actual */

        Object.assign(yesBtn.style, currentStep.yesStyle); /* Aplicar estilos al botón "Sí" */
        Object.assign(noBtn.style, currentStep.noStyle); /* Aplicar estilos al botón "No" */
        stepIndex++;
    }
});

yesBtn.addEventListener('click', () => {
    gif.src = "recursos/in-love-cat.gif";
    text.innerHTML = "¡Sabía que dirías que sí! 🥰❤️‍🔥";

    noBtn.style.display = "none"; /* Ocultar el botón "No" */
    yesBtn.style.height = "90%";
    yesBtn.style.width = "96%";

    yesBtn.innerHTML = '<a href="https://www.instagram.com/strychi_rp/" class="boton-final">Escribime</a>';

    if (vid) {
        vid.style.display = "block"; /* Mostrar el video */
        vid.play().catch(e => console.error("Error al reproducir el video:", e)); /* Reproducir el video */
        setTimeout(() => {
            vid.style.display = "none"; /* Ocultar el video después de 9 segundos */
        }, 9000); 
    }
});