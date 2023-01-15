# ¿Cuál es la diferencia entre definir un servicio usando el decorador @Injectable o @NgModule?

* Si declaramos un servicio mediante @injectable estamos diciendo a que módulos daremos covertura de datos en modo singleton y si estos módulos no se cargan no se activará el servicio.

~~~~
import { Injectable } from '@angular/core';
import { UserModule } from './user.module';

@Injectable({
  providedIn: UserModule,
})
export class UserService {
}
~~~~
* En cambio, si declaro dentro de un módulo o componente, el servicio de entrada se activará y luego dentro de ese módulo o componente se creará un nuevo hilo para ese servicio y lo heredarán todos los hijos relacionados.

~~~~
import { NgModule } from '@angular/core';

import { UserService } from './user.service';

@NgModule({
  providers: [UserService],
})
export class UserModule {
}
~~~~


# ¿Qué otras opciones admiten el decorador @Injectable para la propiedad ProvidedIn? ¿Para qué sirven las otras configuraciones?

## root
Esta es la opción por defecto, modo **raiz** significa que el servicio estrá disponible para toda la aplicación, en modo singleton (única instancia).
~~~~
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
}
~~~~

## any

El servicio estará disponible para todos los módulos pero, lo módulos con carga diferida, o sea, que no se cargan de entrada, el servicio estará disponible pero como una nueva instancia.

~~~~
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any',
})
export class UserService {
}
~~~~

## platform

 El servicio está disponible en un inyector de plataforma único especial que comparten todas las aplicaciones de la página.

 ~~~~
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform',
})
export class UserService {
}
~~~~