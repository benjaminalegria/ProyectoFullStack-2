import { request } from "./client";

export function obtenerUsuarios() {
  return request("/usuario", "GET");
}

export function obtenerUsuarioPorId(id) {
  return request(`/usuario/${id}`, "GET");
}

export function crearUsuario(usuario) {
  return request("/usuario", "POST", usuario);
}

export function actualizarUsuario(id, usuario) {
  return request(`/usuario/${id}`, "PUT", usuario);
}

export function eliminarUsuario(id) {
  return request(`/usuario/${id}`, "DELETE");
}