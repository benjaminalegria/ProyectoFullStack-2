// @vitest-environment jsdom
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Contacto from "./contacto";
import { MemoryRouter } from "react-router-dom";

test('Probar el formulario de contacto, verifica ingreso de nombre', () => {
    render(
        <MemoryRouter>
            <Contacto />
        </MemoryRouter>
    );
    
    const inputNombre = screen.getByLabelText('Nombre completo');
    fireEvent.change(inputNombre, { target: { value: 'Juanito' } });
    expect(inputNombre.value).toBe('Juanito');
});