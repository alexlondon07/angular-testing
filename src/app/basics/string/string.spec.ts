import { message } from './string';

describe ('Testing to String', ()=>{
  it('Should return a string "Saludos Alexander" ', ()=> {
    const resp = message('Alexander');
    expect(resp).toEqual("Saludos Alexander");
  })
});