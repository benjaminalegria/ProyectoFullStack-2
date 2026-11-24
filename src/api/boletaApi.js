import { request } from "./client";

export function obtenerBoletas() {
  return request("/boleta", "GET");
}

export function obtenerBoletaPorId(id) {
  return request(`/boleta/${id}`, "GET");
}

export function crearBoleta(boleta) {
  return request("/boleta", "POST", boleta);
}

export function actualizarBoleta(id, boleta) {
  return request(`/boleta/${id}`, "PUT", boleta);
}

export function eliminarBoleta(id) {
  return request(`/boleta/${id}`, "DELETE");
}