import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlBase = "http://localhost:8080/producto";
  
  constructor(private clienteHttp: HttpClient) { }

  obtenerProductosLista(): Observable<Producto[]> {
    return this.clienteHttp.get<Producto[]>(`${this.urlBase}/getall`);
  }

  // Agregar un nuevo producto
  agregarProducto(producto: Producto): Observable<Producto> {
    return this.clienteHttp.post<Producto>(`${this.urlBase}/insert`, producto);
  }

  // Obtener un producto por su ID
  obtenerProductoPorId(id: string): Observable<Producto> {
    return this.clienteHttp.get<Producto>(`${this.urlBase}/getById/${id}`);
  }

  editarProducto(id: string, producto: Producto): Observable<Producto> {
    return this.clienteHttp.put<Producto>(`${this.urlBase}/editar/${id}`, producto);
  }

}
