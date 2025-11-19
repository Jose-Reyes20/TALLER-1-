document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formP2");
    const resultado = document.getElementById("resultadoP2");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const codigo = document.getElementById("codigo").value;

        if (codigo.length !== 3 || isNaN(codigo)) {
            resultado.textContent = "Ingresa un código válido de 3 dígitos.";
            return;
        }

        let pares = 0;

        for (let i = 0; i < codigo.length; i++) {
            const digito = Number(codigo[i]);
            if (digito % 2 === 0) pares++;
        }

        let categoria = "";

        if (pares === 3) categoria = "Director General";
        else if (pares === 2) categoria = "Directivo";
        else if (pares === 1) categoria = "Staff";
        else categoria = "Seguridad";

        resultado.textContent = `Categoría asignada: ${categoria}`;
    });

});
