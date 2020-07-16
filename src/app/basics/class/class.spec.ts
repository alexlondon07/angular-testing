import { Jugador } from "./class";
const judador = new Jugador();

beforeAll(function() {
    console.log("beforeAll");
});

beforeEach(function() {
   console.log("beforeEach");
});

afterAll(function() {
   console.log("afterAll");
});

afterEach(function() {
   console.log("afterEach");
});






describe('Pruebas de clase', () => {

  it('Debe de retornar 80 de hp si recibe 20 de daño', () => {
    const resp = judador.recibeDano(20);
    expect( resp ).toBe(80);
  });

  it('Debe de retornar 50 de hp si recibe 50 de daño', () => {
    const resp = judador.recibeDano(50);
    expect( resp ).toBe(50);
  });
});