import { request } from "./client";

export function login(email, password) {
  return request("/auth/login", "POST", { email, password });
}