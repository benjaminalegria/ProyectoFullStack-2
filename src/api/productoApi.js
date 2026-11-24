import { request } from "./client";

export function obtenerProductos() {
  return request("/producto", "GET");
}

export function obtenerProductoPorId(id) {
  return request(`/producto/${id}`, "GET");
}

export function crearProducto(producto) {
  return request("/producto", "POST", producto);
}

export function actualizarProducto(id, producto) {
  return request(`/producto/${id}`, "PUT", producto);
}

export function eliminarProducto(id) {
  return request(`/producto/${id}`, "DELETE");
}