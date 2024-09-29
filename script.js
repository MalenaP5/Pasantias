// Ejemplo básico de interacción
document.querySelector('button').addEventListener('click', function() {
    const searchValue = document.getElementById('searchInput').value;
    alert('Buscando recetas para: ' + searchValue);
});
