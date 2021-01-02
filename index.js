class vehiculo {
    constructor(Marca, Modelo, Puertas, Cilindrada, Precio) {
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Puertas = Puertas;
        this.Cilindrada = Cilindrada;
        this.Precio = Precio;
    }
    get mostrarVehic() {
        return this.mostrar();
    }
    mostrar() {
        if (this.Puertas > 0 && this.Cilindrada <= 0) {
            return (
                "Marca: " +
                this.Marca +
                " // " +
                "Modelo: " +
                this.Modelo +
                " // " +
                "Puertas: " +
                this.Puertas +
                " // " +
                "Precio: " +
                "$" +
                this.Precio
            );
        } else {
            return (
                "Marca: " +
                this.Marca +
                " // " +
                "Modelo: " +
                this.Modelo +
                " // " +
                "Cilindrada: " +
                this.Cilindrada +
                " // " +
                "Precio: " +
                "$" +
                this.Precio
            );
        }
    }
}
// asignacion de valores a la class
(vehic1 = new vehiculo("Peugeot", "206", 4, 0, "200.000,00")),
(vehic2 = new vehiculo("Honda", "Titan", 0, "125cc", "60.000,00")),
(vehic3 = new vehiculo("Peugeot", "208", 5, 0, "250.000,00")),
(vehic4 = new vehiculo("Yamaha", "YBR", 0, "160cc", "80.500,50")),
console.log(vehic1.mostrarVehic);
console.log(vehic2.mostrarVehic);
console.log(vehic3.mostrarVehic);
console.log(vehic4.mostrarVehic);
console.log("=====================");

// Array que va a contener los datos de todos los vehiculos
let arrayVehiculos = [];

arrayVehiculos.push(vehic1, vehic2, vehic3, vehic4);

// array que va a tener solo los datos de Precio,Marca y Modelo
let datos = [];

// funcion que pushea los datos que necesito al array datos
function obtenerPrecio() {
    arrayVehiculos.map((element) => {
        datos.push({
            Precio: element.Precio,
            Marca: element.Marca,
            Modelo: element.Modelo,
        });
    });
    menorYmayor(datos);
    comparar(datos);
}

//  esta funcion me va a devolver el vehiculo mas caro y el vehiculo mas barato
function menorYmayor(datos) {
    let mayorYmenor = [];
    datos.forEach((element) => {
        mayorYmenor.push(parseInt(element.Precio));
    });

    let menor = Math.min.apply(null, mayorYmenor);
    let mayor = Math.max.apply(null, mayorYmenor);
    datos.forEach((element) => {
        let marca = element.Marca;
        let precio = parseInt(element.Precio);
        let precioString = element.Precio;
        let modelo = element.Modelo;
        let marcaNormalizada = marca.toUpperCase();
        if (mayor == precio) {
            console.log("Vehículo más caro: " + marca + " " + modelo);
        }
        if (menor == precio) {
            console.log("Vehículo más barato: " + marca + " " + modelo);
        }
        if (marcaNormalizada.includes("Y")) {
            console.log(
                "Vehículo que contiene en el modelo la letra 'Y': " +
                marca +
                " " +
                modelo +
                "  " +
                "$" +
                precioString
            );
        }
    });
}

// funcion que compara cada uno de los precios con el precio de los vehiculos y los acomoda de mayor a menor
function comparar(datos) {
    let arrayPrecios = [];
    datos.forEach((element) => {
        arrayPrecios.push(parseInt(element.Precio));
        arrayPrecios.sort((a, b) => {
            return b - a;
        });
    });
    console.log("=====================");
    console.log("Vehículos ordenados por precio de mayor a menor:");
    arrayPrecios.forEach((element) => {
        let precioVehiculo = element;
        datos.forEach((element2) => {
            let marca = element2.Marca;
            let precio = parseInt(element2.Precio);
            let modelo = element2.Modelo;
            if (precioVehiculo == precio) {
                console.log(marca + " " + modelo);
            }
        });
    });
}

obtenerPrecio();