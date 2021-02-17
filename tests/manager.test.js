const Manager = require('../lib/manager');

describe('Manager', () => {
  it('should be employee data', () => {
    const eng = new Manager('Jason', 1234, 'jason@gmail.com', 77886);
    expect(eng.name).toEqual('Jason');
    expect(eng.id).toEqual(1234);
    expect(eng.email).toEqual('jason@gmail.com');
    expect(eng.officeNum).toEqual(77886);
  });
});
