import { usuarioIngresado } from "./booleans"

describe('Pruebas de Booleanos', () => {
  it('Debe retorna un true', () => {
    const resp = usuarioIngresado();
    expect( resp ).toBeTruthy();
  });
})
