import { sum } from '../services/testingFunctions';
describe('teste de functionalitate', ()=>{
test('2 plus 3 egal cu 5', ()=>{
    const result =sum(2,3);
    expect(result).toEqual(5);
});

test('sum between nr and string', () =>{
    expect(() => sum(2,test)).toThrow();
})
});