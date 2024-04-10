// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test('organization key should return nonprofit', function() {
    expect(launchcode.organization).toBe('nonprofit');
  });
  test('executiveDirector key should return Jeff', function() {
    expect(launchcode.executiveDirector).toBe('Jeff')
  })
  test('percentageCoolEmployees key should return 100', function() {
    expect(launchcode.percentageCoolEmployees).toBe(100)
  })
  test('programsOffered key should return the array ["Web Development","Data Analysis","Liftoff"]', function() {
    // expect(launchcode.programsOffered).toStrictEqual(["Web Development","Data Analysis","Liftoff"])
    expect((launchcode.programsOffered).length).toBe(3)
    expect(launchcode.programsOffered[0]).toBe('Web Development')
    expect(launchcode.programsOffered[1]).toBe('Data Analysis')
    expect(launchcode.programsOffered[2]).toBe('Liftoff')
  })
  test('launchOutput method should return a string', function() {
    let result = launchcode.launchOutput()
    expect(typeof result).toBe('string')
    result = launchcode.launchOutput(2)
    expect(result).toBe('Launch!')
    result = launchcode.launchOutput(3)
    expect(result).toBe('Code!')
    result = launchcode.launchOutput(5)
    expect(result).toBe('Rocks!')
    result = launchcode.launchOutput(6)
    expect(result).toBe('LaunchCode!')
    result = launchcode.launchOutput(15)
    expect(result).toBe('Code Rocks!')
    result = launchcode.launchOutput(10)
    expect(result).toBe('Launch Rocks!')
    result = launchcode.launchOutput(30)
    expect(result).toBe('LaunchCode Rocks!')
    result = launchcode.launchOutput(31)
    expect(result).toBe('Rutabagas! That doesn\'t work.')
  })
});