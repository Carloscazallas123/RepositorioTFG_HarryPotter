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

//Alerta Para cuando se cumple
export const alertaExito = (mensaje) => {
    return swalCustom.fire({
        title: `✨ ¡Alohomora!`,
        text: mensaje,
        icon: 'success',
        confirmButtonText: 'Continuar 🏰'
    });
};
//Alerta Para Advertir
export const alertaWarning = (mensaje) => {
    return swalCustom.fire({
        title: `✨ ¡Alohomora!`,
        text: mensaje,
        icon: 'warning',
        confirmButtonText: 'Ok 🪄'
    });
};
//Alerta para cuando se falla
export const alertaError = (mensaje) => {
    return swalCustom.fire({
        title: `❌ ¡Alohomora!`,
        text: mensaje,
        icon: 'error',
        confirmButtonText: 'Reintentar 🪄'
    });
};
//Alerta al momento de comprar un producto
export const comprarObjeto = async (nombreObjeto) => {
    const result = await Swal.fire({
        title: '¿Confirmar?',
        text: `¿Quieres el objeto ${nombreObjeto}?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#d4af37',
        cancelButtonColor: '#2c1e0f',
    });
    return result.isConfirmed; 
};