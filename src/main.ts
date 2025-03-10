import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Importa AppComponent
import { provideRouter } from '@angular/router'; // Para configurar el enrutamiento
import { routes } from './app/app-routing.module'; // Importa las rutas

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Configura el enrutamiento
  ]
});