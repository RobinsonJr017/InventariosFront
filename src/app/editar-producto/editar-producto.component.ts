import { Component, inject, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-producto.component.html',
})

export class EditarProductoComponent {
  producto: Producto = new Producto();
  id!: string;

  private productoServicio = inject(ProductoService);
  private ruta = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.id = this.ruta.snapshot.params['id'];
    this.productoServicio.obtenerProductoPorId(this.id).subscribe({
      next: (datos) => this.producto = datos,
      error: (errores: any) => console.log(errores)
    });
  }

  onSubmit(){
    this.guardarProducto();
  }

  guardarProducto(){
    this.productoServicio.editarProducto(this.id, this.producto).subscribe({
      next: (datos) => this.irProductoLista(),
      error: (errores: any) => console.log(errores)
    });
  }

  irProductoLista(){
    this.router.navigate(['/productos'])
  }

  regresar(): void {
    this.router.navigate(['/productos']); // Redirigir a la lista de productos
  }
  
}
