import { Routes } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component'; // Importa el componente

export const routes: Routes = [
  { path: 'productos', component: ProductoListaComponent },
  { path: 'agregar-producto', component: AgregarProductoComponent },
  { path: 'editar-producto/:id', component: EditarProductoComponent }, // ¡Esta es la ruta que faltaba!
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  // Elimina el duplicado de 'productos' que tienes al final
];
