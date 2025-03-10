import { Component, OnInit, inject } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-lista',
  standalone: false,  // O standalone: true si es un componente independiente
  templateUrl: './producto-lista.component.html'
})
export class ProductoListaComponent implements OnInit {
  productos: Producto[] = [];

  // Inyección de dependencias con inject
  private productoServicio = inject(ProductoService);

  ngOnInit(): void {
    this.obtenerProductos();
  }

  private obtenerProductos(): void {
    this.productoServicio.obtenerProductosLista().subscribe(
      (datos) => {
        this.productos = datos;
      },
      (error) => {
        console.error('Error al obtener los productos', error);
      }
    );
  }

  // Función para trackBy (opcional)
  trackByProductoId(index: number, producto: Producto): string {
    return producto.idProducto;
  }
}