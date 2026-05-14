import Swal from 'sweetalert2';

// Configuraciones base para no repetir código
const swalCustom = Swal.mixin({
    background: '#fdf6e3', // Color pergamino
    color: '#4a3b2a',      // Color chocolate/tinta
    confirmButtonColor: '#4a3b2a',
    customClass: {
        popup: 'border-dorado' // Puedes añadir una clase CSS si quieres
    }
});

export const alertaExito = (titulo, mensaje) => {
    return swalCustom.fire({
        title: `✨ ${titulo}`,
        text: mensaje,
        icon: 'success',
        confirmButtonText: 'Continuar 🏰'
    });
};

export const alertaError = (titulo, mensaje) => {
    return swalCustom.fire({
        title: `❌ ${titulo}`,
        text: mensaje,
        icon: 'error',
        confirmButtonText: 'Reintentar 🪄'
    });
};

export const comprarObjeto = async (nombreObjeto) => {
    const result = await Swal.fire({
        title: '¿Confirmar?',
        text: `¿Quieres el objeto ${nombreObjeto}?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#d4af37',
        cancelButtonColor: '#2c1e0f',
    });

    // ¡ESTA LÍNEA ES CLAVE! Sin el return, el await del IF no recibe nada.
    return result.isConfirmed; 
};