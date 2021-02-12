const Engineer = require('../lib/engineer');

describe('Engineer', () => {
  it('should be employee data', () => {
    const eng = new Engineer('Jason', 1234, 'jason@gmail.com', 'jlw429');
    expect(eng.name).toEqual('Jason');
    expect(eng.id).toEqual(1234);
    expect(eng.email).toEqual('jason@gmail.com');
    expect(eng.github).toEqual('jlw429')

  });
});
