document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('search').value;
    fetch(`/buscar?q=${query}`)
        .then(response => response.json())
        .then(data => {
            const results = document.getElementById('results');
            results.innerHTML = '';
            data.forEach(producto => {
                const div = document.createElement('div');
                div.className = 'producto';
                div.innerHTML = `
                    <h2>${producto.nombre}</h2>
                    <p>${producto.descripcion}</p>
                    <p>Precio: $${producto.precio}</p>
                    <p>Tienda: ${producto.tienda}</p>
                    <a href="${producto.enlace}" target="_blank">Ver producto</a>
                `;
                results.appendChild(div);
            });
        });
});