
    
function redirigirOcargar() {
    // Función info personal
    function infoPersonal() {
        const nombreApellido = prompt("Ingresa nombre y apellido del empleado:");
        const dni = parseInt(prompt("Ingresa DNI del empleado:"), 10);
        const direccion = prompt("Ingresa la dirección del empleado:");
        const localidad = prompt("Ingresa la localidad del empleado:");
        const email = prompt("Ingresa el email del empleado:");
        const idEmpleado = Math.floor(Math.random() * 10000);

        return {
            nombreApellido,
            dni,
            direccion,
            localidad,
            email,
            idEmpleado,
        };
    }
                //termina func. info personal

    // Declaración de arrays
    const administrativos = [];
    const directivos = [];
    const operadores = [];
    const ventas = [];
    const compras = [];
    let seguirOterminar = true;

    while (seguirOterminar) {
        const respuesta = parseInt(prompt("Digite un número:\n1: Liquidación\n2: Empleados\n3: Salir"));

        switch (respuesta) {
            case 1:
                window.location.href = "liquidacion.html";
                seguirOterminar = false;
                break;

            case 2:
                alert("Redirigiendo a empleados...");
                const cargo = parseInt(
                    prompt(
                        "Cargo del nuevo empleado:\n" +
                        "1. Administrativo\n" +
                        "2. Directivos\n" +
                        "3. Operador\n" +
                        "4. Ventas\n" +
                        "5. Compras"
                    )
                    
                );

                switch (cargo) {
                    case 1:
                        const nuevoAdministrativo = infoPersonal();
                        administrativos.push(nuevoAdministrativo);
                        console.log("Administrativos:", administrativos); 
                        break;

                    case 2:
                        const nuevoDirectivo = infoPersonal();
                        directivos.push(nuevoDirectivo);
                        console.log("Directivos:", directivos); 
                        break;

                    case 3:
                        const nuevoOperador = infoPersonal();
                        operadores.push(nuevoOperador);
                        console.log("Operadores:", operadores); 
                        break;

                    case 4:
                        const nuevoVentas = infoPersonal();
                        ventas.push(nuevoVentas);
                        console.log("Ventas:", ventas); 
                        break;

                    case 5:
                        const nuevoCompras = infoPersonal();
                        compras.push(nuevoCompras);
                        console.log("Compras:", compras); 
                        break;

                    default:
                        alert("Hubo un error. Por favor, selecciona un cargo válido.");
                        break;
                }
                break;

            case 3:
                alert("Saliendo del programa...");
                seguirOterminar = false;
                break;

            default:
                alert("Hubo un error. digite un numero");
                break;
        }
    }
}

redirigirOcargar();

