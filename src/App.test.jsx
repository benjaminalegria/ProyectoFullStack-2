// @vitest-environment jsdom
import { render, screen, cleanup } from "@testing-library/react";
import { expect, test, vi, afterEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import Nosotros from "./pages/nosotros/nosotros";
import App_alert from "./components/Alert";
import Header from "./pages/header/Header";


afterEach(() => {
    cleanup();
});

test('Mock: Verifica que se llame a fetch para cargar productos.json', () => {
    const fetchMock = vi.spyOn(global, 'fetch').mockResolvedValue({
        json: () => Promise.resolve([{ codigo: "FR001", nombre: "Manzana", precio: 1000 }])
    });
    render(<MemoryRouter><App /></MemoryRouter>);
    expect(fetchMock).toHaveBeenCalledWith('/productos.json');
    fetchMock.mockRestore();
});

test('Mock: Verifica interacción con localStorage al iniciar', () => {
    const getItemMock = vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify([]));
    render(<MemoryRouter><App /></MemoryRouter>);
    expect(getItemMock).toHaveBeenCalledWith('carritoHuerto');
    getItemMock.mockRestore();
});

test('Verifica que el componente Nosotros renderice su título', () => {
    render(<MemoryRouter><Nosotros /></MemoryRouter>);
    const titulos = screen.getAllByText('Sobre HuertoHogar');
    expect(titulos[0]).toBeTruthy();
});

test('Verifica que la Alerta muestre el mensaje dinámico', () => {
    render(<App_alert mostrarAlerta={true} msg="Error de prueba" variant="danger" />);
    const mensajes = screen.getAllByText('Error de prueba');
    expect(mensajes[0]).toBeTruthy();
});

test('Verifica que el Header muestre el botón del carrito con el contador', () => {
    render(<MemoryRouter><Header cartCount={5} /></MemoryRouter>);
    const botonesCarrito = screen.getAllByText('Carrito (5)');
    expect(botonesCarrito[0]).toBeTruthy();
});

test('Verifica que el Header contenga los enlaces de navegación principales', () => {
    render(<MemoryRouter><Header cartCount={0} /></MemoryRouter>);
    expect(screen.getAllByText('Inicio')[0]).toBeTruthy();
    expect(screen.getAllByText('Productos')[0]).toBeTruthy();
});

test('Verifica que el mensaje de bienvenida principal esté en la pantalla', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const bienvenidas = screen.getAllByText(/¡Descubre la frescura del campo/i);
    expect(bienvenidas[0]).toBeTruthy();
});

test('Verifica que el pie de página (footer) se muestre correctamente', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const footers = screen.getAllByText(/2026 HuertoHogar/i);
    expect(footers[0]).toBeTruthy();
});

test('Verifica que el botón de Iniciar sesión exista para abrir el modal', () => {
    render(<MemoryRouter><Header cartCount={0} /></MemoryRouter>);
    const btnLogins = screen.getAllByRole('button', { name: /Iniciar sesión/i });
    expect(btnLogins[0]).toBeTruthy();
});