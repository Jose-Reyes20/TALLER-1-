document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formP4");
    const resultado = document.getElementById("resultadoP4");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const temp = Number(document.getElementById("temp").value);
        const hum = Number(document.getElementById("hum").value);

        let mensaje = "";

        if (temp < 10) {
            mensaje = "Clima frío";
        } else if (temp >= 10 && temp <= 25) {
            mensaje = hum < 60 ? "Clima templado y seco" : "Clima templado y húmedo";
        } else if (temp >= 26 && temp <= 35) {
            mensaje = "Clima cálido";
        } else if (temp > 35) {
            mensaje = "Clima caluroso extremo, mantente hidratado";
        } else {
            mensaje = "Valores fuera de rango, verifica los datos";
        }

        resultado.textContent = mensaje;
    });

});
