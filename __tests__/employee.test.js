const Employee = require('../lib/employee');
const newemployee = new Employee('Austin', '0819', 'apark0819@gmail.com');

test('constructor value test', () => {
    expect(newemployee.name).toBe('Austin');
    expect(newemployee.id).toBe('0819');
    expect(newemployee.email).toBe('apark0819@gmail.com');
});

test('getName method test', () => {
    expect(newemployee.getName()).toBe('Austin');
});

test('getId method test', () => {
    expect(newemployee.getId()).toBe('0819');
});

test('getEmail method test', () => {
    expect(newemployee.getEmail()).toBe('apark0819@gmail.com');
});

test('getRole method test', () => {
    expect(newemployee.getRole()).toBe('Employee');
});