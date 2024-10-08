function formatearNumero(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Agr. puntos cada mil
}

function desformatearNumero(num) {
    return parseFloat(num.replace(/\./g, '').replace(',', '.')); // Quita los puntos y convierte a número
}

function calcularInteres() {
    // Limpiar tabla
    const tabla = document.getElementById("resultados").getElementsByTagName('tbody')[0];
    tabla.innerHTML = ""; // Limpiar las filas anteriores

    try {
        let capitalInput = document.getElementById('cinvertir').value;
        let dias = parseInt(document.getElementById('pdias').value);

        let capital = desformatearNumero(capitalInput); // Desformatear el número para poder calc.

        if (capital < 1500) {
            // Aquí puedes agregar una fila en la tabla para mostrar el error
            let nuevaFila = tabla.insertRow();
            let celdaError = nuevaFila.insertCell(0);
            celdaError.colSpan = 4; // Hacer que esta celda ocupe todas las columnas
            celdaError.innerHTML = "El capital mínimo es de $1.500";
            return;
        }

        if (dias < 30 || dias > 365) {
            // Aquí puedes agregar una fila en la tabla para mostrar el error
            let nuevaFila = tabla.insertRow();
            let celdaError = nuevaFila.insertCell(0);
            celdaError.colSpan = 4; // Hacer que esta celda ocupe todas las columnas
            celdaError.innerHTML = "El plazo debe ser entre 30 y 365 días";
            return;
        }

        const tna = 37.00;
        const interes = capital * (tna / 100) * (dias / 365.0);
        const montoTotal = capital + interes;

        // Format el interés y el monto total
        const interesFormateado = formatearNumero(interes.toFixed(2));
        const montoTotalFormateado = formatearNumero(montoTotal.toFixed(2));
        const capitalFormateado = formatearNumero(capital.toFixed(2));

        // Insert los resultados en la tabla
        let nuevaFila = tabla.insertRow();

        // Create cel.nueva fila
        let celdaCapital = nuevaFila.insertCell(0);
        let celdaDias = nuevaFila.insertCell(1);
        let celdaInteres = nuevaFila.insertCell(2);
        let celdaMontoTotal = nuevaFila.insertCell(3);

        // asignar los valores a las celdas
        celdaCapital.innerHTML = `$${capitalFormateado}`;
        celdaDias.innerHTML = dias;
        celdaInteres.innerHTML = `$${interesFormateado}`;
        celdaMontoTotal.innerHTML = `$${montoTotalFormateado}`;

    } catch (e) {
        // m error
        let nuevaFila = tabla.insertRow();
        let celdaError = nuevaFila.insertCell(0);
        celdaError.colSpan = 4; // Hacer que esta celda ocupe todas las columnas
        celdaError.innerHTML = "Por favor ingrese valores válidos";
    }
}

// evento para formateaar el capital mientras se escribe
document.getElementById('cinvertir').addEventListener('input', function () {
    let valorInput = this.value;
    this.value = formatearNumero(valorInput.replace(/\./g, '').replace(',', '.'));
});
