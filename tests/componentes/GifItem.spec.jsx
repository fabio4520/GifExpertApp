import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/componentes/GifItem";

describe('Pruebas en el componente <GifItem />', () => {
  const url = 'https://localhost/algo.jpg';
  const title = 'Un titulo';

  test('debe de mostrar la url enviado por props', () => {
    const { container } = render(<GifItem url={ url } title={ title } />);
    expect(container).toMatchSnapshot();
  });

  test('debe mostrar la imagen con el url y alt indicado', () => {
    render(<GifItem url={url} title={title} />);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  })

  test('debe de mostrar el título en el componente', () => {
    render(<GifItem url={url} title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  })

});
