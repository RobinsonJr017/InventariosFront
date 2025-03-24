import { Routes } from '@angular/router';
import { ProductoListaComponent } from './app/producto-lista/producto-lista.component';
import { AgregarProductoComponent } from './app/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './app/editar-producto/editar-producto.component';


export const routes: Routes = [
  { path: 'productos', component: ProductoListaComponent },  // Ruta principal
  { path: '', redirectTo: 'productos', pathMatch: 'full' },  // Ruta para la lista de productos
  { path: 'agregar-producto', component: AgregarProductoComponent },
  { path: 'editar-producto/:id', component: EditarProductoComponent}
];