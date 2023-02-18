# Proyecto - NFT Marketplace

## Descripción 
NFT Marketplace es un tienda virtual de NFT dirigida a la comunidad de LATAM. Es un proyecto
creado durante el curso de React en Coderhouse.

### Construido con
-React
-Tailwind Css
-React Router Dom
-Firebase
-Sweetalert2

#### Prerrequisitos e instalación
-Tener instalado y actualizar la última versión de NPM
-Instalar React con el comando: npx create-react-app
-Instalar Tailwind : npm install -D tailwindcss postcss autoprefixer
-Posteriormente escribimos en la terminal: npx tailwindcss init -p
-Luego, abrimos el archivo en el editor de código preferido,  nos dirigimos a tailwind.config y escribimos :
  content: [
  "./src/**/*.{js,jsx,ts,tsx}"
  ]

-En seguida, nos movemos a la carpeta src, luego a la subcarpeta index.css e introducimos la siguiente información:
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  Con esto quedará configurado Tailwind
  
-Posteriormente instalamos React Router-dom: npm install react-router-dom

-Para utilizar Firebase, escribimos el siguiente comando : npm install Firebase

-Finalmente agregamos Sweetalert2: npm install sweetalert2 


##### Status del Proyecto

El proyecto es una single page application, construida mediante el intercambio de componentes, utilizando Router-dom. 

--Home
-El navbar permite desplazarse entre diferentes categorías de NFT (arte, coleccionables, otros mundos).
-La "Hero section" le dice al usuario cuál es el enfoque de la página y lo invita a explorar todos los NFT al presionar el botón de "Explorar".
-En la sección "Subasta", el usuario puede conocer los detalles de la siguiente subasta. Una cuenta regresiva le
avisa la fecha exacta del inicio de esta.
-En la sección de "Categorías", el usuario puede elegir una categoría y explorarla con tan solo dar un click en el 
recuadro.
-En la sección "Creadores destacados" se presenta una breve información y estadísticas de los creadores con mayor
número de NFT creados y de ventas.
-En la sección "Qué nos hace diferentes" se mencionan las principales características de la marca.
-En el "Footer", el usuario pueda acceder también a las diferentes características. Al presionar en el logo
 de Github, el usuario es redireccionado al repositorio del proyecto. 


--Todos los NFT
-Se muestran todos los artículos disponibles e información relevante (nombre, colección, precio, disponibilidad
 en stock).

--Categorías
-Se muestran los artículos disponibles en la tienda, pero filtrados por categorías.

--Detalle del NFT
-En esta página se muestra con más detalle la información del producto (título, autor, colección, disponibilidad, stock). Al presionar sobre la imagen del NFT, esta se despliega en un recuadro para que se aprecien mejor sus detalles. En la parte central, el contador sirve para elegir la cantidad de un NFT que el usuario desea comprar (en
el caso de que ya no se encuentren más productos en el stock, se mostrará un texto de AGOTADO y se deshabilitará la
opción de compra). Al presionar sobre el botón de "Añadir al carrito", una alerta le avisa al usario de que el item ha sido añadido al carrito. Entonces el componente se desmonta y, en su lugar, aparece un botón para terminar la compra; al mismo tiempo, en la navbar, el icono del carrito se actualiza.

--Cart
-Si el usario no tiene nada agregado en el carrito, la página lo invita a explorar nuestro catálogo y lo manda a la página de "Home" al presionar el botón "Visitar la tienda". Por el contrario, si el usuario tiene uno o varios productos en el carrito, en la parte izquierda se muestra un desglose de la compra; mientras que,en la parte derecha, se puede conocer la suma total de los productos. Al presionar el botón de "Comprar", una alerta se despliega en pantalla y le confirma al usuario que la operación fue exitosa y le muestra su número
de pedido. Además esta información se envía a la base de datos en Firestore y se almacena en la categoría de "Órdenes". 



   
