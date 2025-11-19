document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formP1");
    const resultado = document.getElementById("resultadoP1");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const edad = Number(document.getElementById("edad").value);

        if (edad <= 1) {
            resultado.textContent = "No aplica para el cálculo. Debe tener más de 1 año.";
            return;
        }

        let precio;

        if (edad > 1 && edad < 4) precio = 0;
        else if (edad >= 4 && edad <= 8) precio = 2;
        else if (edad >= 9 && edad <= 16) precio = 5;
        else if (edad >= 17 && edad <= 35) precio = 7;
        else precio = 10;

        resultado.textContent = `El costo de la entrada es: $${precio}`;
    });

});
