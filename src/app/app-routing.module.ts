import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component'; // Asegúrate de importar el componente

const routes: Routes = [
  { path: 'productos', component: ProductoListaComponent },
  { path: 'agregar-producto', component: AgregarProductoComponent }, // Nueva ruta
  { path: '', redirectTo: 'productos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
