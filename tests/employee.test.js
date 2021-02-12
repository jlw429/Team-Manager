const Employee = require('../lib/employee');

describe("Employee", () => {
    it("should be employee data", () => {
      const emp = new Employee("Jason", 1234, 'jason@gmail.com');
      expect(emp.name).toEqual("Jason");
      expect(emp.id).toEqual(1234);
      expect(emp.email).toEqual('jason@gmail.com')
    });
});
