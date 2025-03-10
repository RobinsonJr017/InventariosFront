import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // Importa AppComponent
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // Solo componentes no standalone van aquí
    ProductoListaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppComponent // Importa AppComponent si es standalone
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent] // AppComponent sigue siendo el componente raíz
})
export class AppModule { }
