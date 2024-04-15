////////////////////////////////////////////////// --- Conectar DB

function conectarDB() {

    const abrirConexion = window.indexedDB.open('crm', 1);

    abrirConexion.onerror = () => {
        console.log('Error en conexion de DB');
    }

    abrirConexion.onsuccess = () => {
        console.log('Conexion de DB exitosa')
        DB = abrirConexion.result;
    }
}

/////////////////////////////////////////////////// ---- Imprimir alerta

function imprimirAlerta(mensaje, tipo) {

    const alerta = document.querySelector('.alerta123');
    
        if (!alerta) {

        const divAlerta = document.createElement('div');

        divAlerta.className = 'px-4 py-3 rounded max-w-lg mx-auto mt-6 text-center border alerta123';

        if (tipo === 'error') {
            divAlerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        } else {
            divAlerta.classList.add('bg-green-100', 'border-green-400', 'text-gren-700');
        };

        divAlerta.textContent = mensaje;
        formulario.appendChild(divAlerta);

        setTimeout(() => {
            divAlerta.remove();
        }, 3000)

        }
    }



   