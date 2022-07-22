const Intern = require('../lib/intern');
const newintern = new Intern('Austin', '0819', 'apark0819@gmail.com', 'USF');

test('constructor value test', () => {
    expect(newintern.name).toBe('Austin');
    expect(newintern.id).toBe('0819');
    expect(newintern.email).toBe('apark0819@gmail.com');
    expect(newintern.school).toBe('USF');
});

test('getName method test', () => {
    expect(newintern.getName()).toBe('Austin');
});

test('getId method test', () => {
    expect(newintern.getId()).toBe('0819');
});

test('getEmail method test', () => {
    expect(newintern.getEmail()).toBe('apark0819@gmail.com');
});

test('getSchool method test', () => {
    expect(newintern.getSchool()).toBe('USF');
});

test('getRole method test', () => {
    expect(newintern.getRole()).toBe('Intern');
});