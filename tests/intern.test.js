const Intern = require('../lib/intern');

describe('Intern', () => {
  it('should be employee data', () => {
    const int = new Intern('Jason', 1234, 'jason@gmail.com', 'University of Central Florida');
    expect(int.name).toEqual('Jason');
    expect(int.id).toEqual(1234);
    expect(int.email).toEqual('jason@gmail.com');
    expect(int.school).toEqual('University of Central Florida')
  });
});
