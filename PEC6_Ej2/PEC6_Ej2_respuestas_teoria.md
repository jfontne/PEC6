# ¿Cuál es la diferencia entre definir un servicio usando el decorador @Injectable o @NgModule?
* si definimos un servicio desde @injectable este servicio será un singleton, o sea será el mismo hilo para todos los componentes y si varia un dato se variará en todos los componentes que utilicen ese servicio.
* Si definimos un servicio en @NgModule dentro de un componente creará un hilo único para ese componente y sus hijos independiente de otros componentes no relacionados directamente.
# ¿Qué otras opciones admiten el decorador @Injectable para la propiedad ProvidedIn? ¿Para qué sirven las otras configuraciones?

