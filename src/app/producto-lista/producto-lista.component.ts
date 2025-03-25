import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  standalone: true,  // O standalone: true si es un componente independiente
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './producto-lista.component.html'
})
export class ProductoListaComponent implements OnInit {
  productos: Producto[] = [];

  // Inyección de dependencias con inject
  private productoServicio = inject(ProductoService);
  private enrutador = inject(Router);

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

  editarProducto(id: string): void {
    console.log('Intentando editar producto con ID:', id); // Verifica que se recibe el ID
    this.enrutador.navigate(['editar-producto', id])
      .then(success => {
        if (!success) console.error('Error en navegación');
      })
      .catch(err => console.error('Error al navegar:', err));
  }

  eliminarProducto(id: string): void {
    this.productoServicio.eliminarProducto(id).subscribe({
      next: (datos) => this.obtenerProductos(),
      error: (errores) => console.log(errores)
    });
  }
  
}