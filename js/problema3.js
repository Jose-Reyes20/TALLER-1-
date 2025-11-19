document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formP3");
    const resultado = document.getElementById("resultadoP3");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const x1 = Number(document.getElementById("x1").value);
        const y1 = Number(document.getElementById("y1").value);
        const x2 = Number(document.getElementById("x2").value);
        const y2 = Number(document.getElementById("y2").value);

        if (x1 === x2) {
            resultado.textContent = "La pendiente es indefinida (división entre 0).";
            return;
        }

        const pendiente = (y2 - y1) / (x2 - x1);

        resultado.textContent = `La pendiente de la recta es: ${pendiente}`;
    });

});
