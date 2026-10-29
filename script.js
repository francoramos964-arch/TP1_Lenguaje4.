document.getElementById('btnAbrir').addEventListener('click', function() {
    const lat = document.getElementById('latitud').value.trim();
    const lng = document.getElementById('longitud').value.trim();
    
    if (!lat || !lng) {
        alert('Por favor, ingresa la latitud y la longitud.');
        return;
    }

    // Reemplaza comas por puntos por si el usuario ingresó decimales con coma
    const latClean = lat.replace(',', '.');
    const lngClean = lng.replace(',', '.');

    // Abre Google Maps en una nueva pestaña con las coordenadas indicadas
    const url = `https://www.google.com/maps/search/?api=1&query=${latClean},${lngClean}`;
    window.open(url, '_blank');
});