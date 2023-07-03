import { fireEvent, render, screen } from "@testing-library/react"
import { InputForm } from "../../src/componentes/InputForm"

describe('Pruebas en <InputForm/>', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    render(<InputForm placeholder="Escribe algo" onInputSubmit={() => { }} />)
    
    const input = screen.getByRole('textbox');
    const value = 'Hola Mundo';

    fireEvent.change(input, { target: { value } });

    expect(input.value).toBe(value);
  })

  test('debe de llamar onInputSubmit', () => { 
    const handleSubmit = jest.fn();
    
    const value = 'Hola Mundo';
    render(<InputForm placeholder="Escribe algo" onInputSubmit={handleSubmit} />)
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value } });
    fireEvent.submit(screen.getByRole('form'));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(value);
   })
})