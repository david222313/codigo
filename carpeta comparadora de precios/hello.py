import requests
from bs4 import BeautifulSoup

url = 'https://www.amazon.com/s?k=graphics+card'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

productos = soup.find_all('div', {'data-component-type': 's-search-result'})
for producto in productos:
    nombre = producto.find('span', {'class': 'a-text-normal'}).text
    precio = producto.find('span', {'class': 'a-offscreen'})
    if precio:
        precio = precio.text
    else:
        precio = 'No disponible'
    print(f'Producto: {nombre}, Precio: {precio}')