# 2021-02-btc-agile-sw-online-proyecto

<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/githubagilesoftware.jpg" >	
</p>

## Workflow
```
Clona el proyecto en local y cambia a la rama franguerrero. 
Sigue las instrucciones de instalación y linea de comando debajo expecificadas.
Para lanzamiento bajo demanda de de los tests usando Github Actions ve a Actions y:
- lanza el workflow correspondiente.
Para el lanzamiento automática del workflow y los tests correspondiente haz algún cambio de código en el repositorio remoto.
```

## Información
```
Nombre del proyecto : Pruebas Unitarias y de Sistema - Curso Geekshub
Descripción: Pruebas Unitarias con Jest ejecutadas sobre funciones básicas escritas en Javascript, usando DDT en algunos de los casos. 
Pruebas de Sistema con Cypress sobre una aplicación en Producción usando Page Objecto Model en algunos de los casos.
Alumno: Francisco Antonio Guerrero Sánchez
```

## Instalación
| Alias | URL |
| :-------: | :------: |
| Node|   https://www.node.org/es| 


## Línea de comandos
```
Prerequisites
Cloning repository     git clone https://github.com/franguerrerosanchez/2021-02-btc-agile-sw-online-proyecto.git
Checkout to branch     git checkout franguerrero
Installing Jest        npm install jest --save-dev
Installing Cypress     npm install cypress --save-dev 


Running tests	    
Running Unit Tests	       npm test
Running System Tests	   npx cypress run
```
## Principios SOLID
| Principio | Fichero 
| :-------: | :------: |
| Principio de Responsabilidad Única (SRP) | login.js, main.js, etc  |
El uso de Page Object Model consiste en crear una única clase por página a testear que incluya los elementos con los que interactuaremos y las funciones (acciones) que realizaremos sobre ellos.
| Principio de Segregación de la Interface (ISP) | login.js, main.js, etc  |
Cuando empleamos el SRP también empleamos el ISP como efecto colateral. Cada Page Object contendrá SÓLO las funciones necesarias para las pruebas, ampliándolas cuando sea necesario.

## Patrones
| Patrón | Fichero
| Page Object Model | login.js, main.js, etc |

## Refactors
| Refactor | Fichero 
| :-------: | :------: |
| Separate Domain From Presentation | login.js, main.js, etc  |
Los tests de sistemas se pueden hacer sin usar Page Object Model, pero si refactorizamos y hacemos uso de ellos podemos reutilizar acciones repetidas en nuestros tests haciendo el código más matenible.
| Making Method Calls Simpler | login.js, main.js, etc  |
Los nombre de las funciones declaradas en el Page Object hace referencia a la acción del usuario lo cual facilitar su lectura y la programación de las pruebas. Por ejemplo "ClickLoginButton".
| Organizing Data | ...  |... |

## Notas
```
Ponga aquí cualquier tipo de mensaje necesario.
```
