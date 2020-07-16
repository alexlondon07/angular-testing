import { incrementar } from "./number";

describe('pruebas de números', () => {
  
  it('Debe de retornar 100, si el nùmero ingresado es mayor a 100', () => {
    const resp = incrementar(300);
    expect( resp ).toEqual(100);
  });

  it('Deebe retornar el número ingresado (50) + 1, sino es mayor a 100 ', () => {
    const resp = incrementar(50);
    expect( resp ).toBe(51);    
  });
});
