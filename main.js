function liquidacion(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombreingresado').value;
    const sueldoBruto = parseFloat(document.getElementById('sueldoBrutoIngresado').value);
    const horasExtras = parseFloat(document.getElementById('horasExtras').value);
    const antiguedad = parseFloat(document.getElementById('antiguedad').value);
    const presentismo = parseFloat(document.getElementById('presentismo').value);

    if (isNaN(sueldoBruto) || isNaN(horasExtras) || isNaN(antiguedad) || isNaN(presentismo)) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    const valorHoraExtra = (sueldoBruto / 180) * 1.5; 
    const pagoHorasExtras = horasExtras * valorHoraExtra;
    const bonificacionAntiguedad = sueldoBruto * (antiguedad * 0.01); 
    const bonificacionPresentismo = sueldoBruto * (presentismo / 100);
    const deducciones = sueldoBruto * 0.11; 
    const sueldoNeto = sueldoBruto + pagoHorasExtras + bonificacionAntiguedad + bonificacionPresentismo - deducciones;

    console.log(`Hola ${nombre}, tu liquidación es la siguiente:
    Sueldo Bruto: $${sueldoBruto.toFixed(2)}
    Pago por Horas Extras: $${pagoHorasExtras.toFixed(2)}
    Bonificación por Antigüedad: $${bonificacionAntiguedad.toFixed(2)}
    Bonificación por Presentismo: $${bonificacionPresentismo.toFixed(2)}
    Deducciones: $${deducciones.toFixed(2)}
    Sueldo Neto: $${sueldoNeto.toFixed(2)}`);
}

document.getElementById('formliq').addEventListener('submit', liquidacion);