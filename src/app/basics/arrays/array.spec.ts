import { obtenerRobot } from "./array";

describe('Prueba de arreglos', () => {
    
    it('Debe retornar al menos 3 robots', () => {
        const resp = obtenerRobot();
        expect( resp.length ).toBeGreaterThanOrEqual(3);
    });

    it("Debe de existir MegaMan y Robocop", () => {
        const resp = obtenerRobot();
        expect(resp).toContain('MegaMan');
        expect(resp).toContain("Robocop");
    });
});

