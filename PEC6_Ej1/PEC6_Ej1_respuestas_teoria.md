# ¿Cuál es la función de los componentes y servicios? (i.e. cuándo se debe utilizar cada uno de ellos)
* Los componentes son partes de nuestra aplicación, donde existe la parte visual (html, CSS) y la parte lógica (TS)
* Los servicios se encargan de dar la información necesaria que necesitan los componentes, por ejemplo la información de un producto, de un listado, etc.
# ¿Qué es la <<inyección de dependencias>>? ¿Para qué sirve el decorador @Injectable?
* La inyección de dependencias sirve para que cualquier clase o función pueda ser utilizada en cualquier parte, dígase componente y que se le inyecten las dependencias necesarias desde el componente, de esta manera la funcion o clase no se ha de modificar para cada caso, por ejemplo los servicios, los podemos utilizar desde cualquier componente y el servicio no lo tendremos que modificar nunca.
* @injectable es un decorador que nos indica que la clase que decora será del tipo "inyección de dependencias", esto significa que puede necesitar dependencias que puedan ser entregadas por inyección de dependencias.
# Explica los siguientes conceptos de la programación reactiva que se usan en RxJS:

## Observable.
* Observable nos permite crear un objeto asíncrono con ciertos valores.
## Subscription
* Nos permite obtener la información que hay en ese momento en un observable
## Operators
* Los operadores son métodos que podemos aplicar a los observables
## Subject
* El sujeto a observar
## Schedulers

# ¿Cuál es la diferencia entre promesas y observables?
* Las promesas sólo pueden crear un hilo asíncrono con una única respuesta, mientras que los observables podemos tener varios hilos asíncronos.
# ¿Cuál es la función de la tubería (pipe) async?
* la función pipe nos permite interactuar con los diferentes valores de una observable.