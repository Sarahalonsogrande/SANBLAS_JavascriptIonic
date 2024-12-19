setTimeout(() => {
    console.log("Cambiando");
    document.querySelector("#btn1").classList.remove("activado");
    document.querySelector("#btn1").classList.add("desactivado");
}, 10_000)