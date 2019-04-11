# Arbol Binario

En esta prueba se desarrollo una Web Api usando Node.js para crear un arbol binario básico utilizando :

 1) Para crear servidor 

    1.1 ) Express : Framework de node que nos permite escribir código del servidor de una manera bastante sencilla.
    1.2 ) modulo Morgan : Nos permite ver por consola las peticiones que van llegando

2) Es una aplicación muy sencilla donde cree un archivo "index.js" en la raiz donde ejecuto el framework express , donde ejecuto mi aplicación y allí configuro mi servidor
donde escucha en el puerto 4000.

3) Utilizo un modulo que reinicia el servidor llamado "nodemon"

4) La idea es desde postman llamar con el verbo POST la url roteada localhost:4000/api/arbolBinario con un content-type tipo Json con los siguiente estructura:

   {
	"valor": "Raiz",
	"izquierdo" : "X",
	"derecho" : "Y"
   }

   Esto consumira la Api en la cual ira  auna función javaScript llamada "returnArbolBinario" donde por medio de un constructor creo un arból binario de un nivel y lo gaurdo en un Json temportal para ejecutar de igual forma un método GET y traer el dato guardado en memoria temp.

   POST : http://localhost:4000/api/arbolBinario 
   Header : [{"key":"Content-Type","value":"application/json","description":"","type":"text","enabled":true}]
   Body :    {
                "valor": "Raiz",
                "izquierdo" : "X",
                "derecho" : "Y"
            }

   GET: http://localhost:4000/api/arbolBinario

   




