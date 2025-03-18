import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { provideHttpClient } from '@angular/common/http'; // Si usas HttpClient

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Configura el enrutamiento
    provideHttpClient() // Si usas HttpClient
  ]
});
