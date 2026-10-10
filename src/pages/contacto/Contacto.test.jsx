// @vitest-environment jsdom
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Contacto from "./contacto";
import { MemoryRouter } from "react-router-dom";
import RegistroModal from './components/RegistroModal';
import AdminModal from './components/AdminModal';

test('Probar el formulario de contacto, verifica ingreso de nombre', () => {
    render(
        <MemoryRouter>
            <Contacto />
        </MemoryRouter>
    );
    
    // Busca el input por la etiqueta exacta que le pusimos en contacto.jsx
    const inputNombre = screen.getByLabelText('Nombre completo');
    
    // Simula que el usuario escribe "Juanito" en esa caja de texto
    fireEvent.change(inputNombre, { target: { value: 'Juanito' } });
    
    // Verifica que React haya guardado "Juanito" correctamente en el estado
    expect(inputNombre.value).toBe('Juanito');
});