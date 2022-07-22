const Manager = require('../lib/manager');
const newmanager = new Manager('Austin', '0819', 'apark0819@gmail.com', '1111');

test('constructor value test', () => {
    expect(newmanager.name).toBe('Austin');
    expect(newmanager.id).toBe('0819');
    expect(newmanager.email).toBe('apark0819@gmail.com');
    expect(newmanager.officeNumber).toBe('1111');
});

test('getName method test', () => {
    expect(newmanager.getName()).toBe('Austin');
});

test('getId method test', () => {
    expect(newmanager.getId()).toBe('0819');
});

test('getEmail method test', () => {
    expect(newmanager.getEmail()).toBe('apark0819@gmail.com');
});

test('getOfficeNumber method test', () => {
    expect(newmanager.getOfficeNumber()).toBe('1111');
});

test('getRole method test', () => {
    expect(newmanager.getRole()).toBe('Manager');
});