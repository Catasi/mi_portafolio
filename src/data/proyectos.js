export const ruta = "../src/img/herramientas/";
export const proyectos = [
    {
        img: "../src/img/galaxia.jpeg",
        nombre: "AppMedik",
        objetivo: "Desarrollar una aplicación móvil pediátrica para la gestión de citas médicas y la dosificación de medicamentos.",
        herramientas: [
            { nombre: "IDE", herramienta: "Android Studio 2023.1.13", img: ruta + "mongodb.png"},
            { nombre: "Framework", herramienta: "Node.js v.18.16.0", img: ruta + "mongodb.png" },
            { nombre: "Base de Datos", herramienta: "MongoDB Atlas v.4.4.6", img: ruta + "mongodb.png" },
            { nombre: "Servidor", herramienta: "AWS EC2 v.2.0.1", img: ruta + "mongodb.png" }
        ],
        resultados: "Aplicación Beta"
    },
    {
        img: "../src/img/galaxia.jpeg",
        nombre: "API CRUD para Restaurante “El Zarape”",
        objetivo: "Crear servicios RESTful para operaciones CRUD en el sistema de punto de venta del restaurante.",
        herramientas: [
            { nombre: "Base de Datos", herramienta: "MySQL 8.0.38", img: ruta + "mysql.png" },
            { nombre: "IDE", herramienta: "Apache NetBeans IDE 24", img: ruta + "netbeans.png" },
            { nombre: "Servidor", herramienta: "Apache TomCat 10.1.13", img: ruta + "tomcat.png" },
            { nombre: "Cliente API", herramienta: "Postman v.11.31.4", img: ruta + "tomcat.png" },
            { nombre: "IDE Alternativa", herramienta: "IntelliJIDEA 2024.2.5", img: ruta + "intellij_idea.png" }
        ],
        resultados: "API REST para gestionar datos en una base de datos."
    },
    {
        img: "../src/img/galaxia.jpeg",
        nombre: "Sistema DAQ para Monitoreo de Sensores",
        objetivo: "Implementar un sistema que interactúe con sensores de temperatura y humedad, almacenando datos en una base de datos mediante una interfaz gráfica.",
        herramientas: [
            { nombre: "Microcontrolador", herramienta: "Arduino Uno", img: ruta + "intellij_idea.png" },
            { nombre: "IDE", herramienta: "Arduino IDE 2.3.4", img: ruta + "intellij_idea.png" },
            { nombre: "IDE", herramienta: "Apache NetBeans IDE 24", img: ruta + "netbeans.png" },
            { nombre: "Servicio IoT", herramienta: "Dweet.io", img: ruta + "netbeans.png"}
        ],
        resultados: "Monitoreo en tiempo real con recolección de datos."
    },
    {
        img: "../src/img/galaxia.jpeg",
        nombre: "Formulario de Usuarios en Android (CRUD)",
        objetivo: "Implementar un sistema CRUD para gestionar usuarios en dispositivos móviles.",
        herramientas: [
            { nombre: "IDE", herramienta: "Android Studio 2023.1.13", img: ruta + "netbeans.png"},
            { nombre: "Base de Datos", herramienta: "SQLite 2.4.0", img: ruta + "mysql.png" }
        ],
        resultados: "Aplicación móvil funcional con base de datos integrada."
    }
];
