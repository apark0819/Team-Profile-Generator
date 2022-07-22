const Engineer = require('../lib/Engineer');
const newengineer = new Engineer('Austin', '0819', 'apark0819@gmail.com', 'apark0819');

test('constructor value test', () => {
    expect(newengineer.name).toBe('Austin');
    expect(newengineer.id).toBe('0819');
    expect(newengineer.email).toBe('apark0819@gmail.com');
    expect(newengineer.githubUsername).toBe('apark0819');
});

test('getName method test', () => {
    expect(newengineer.getName()).toBe('Austin');
});

test('getId method test', () => {
    expect(newengineer.getId()).toBe('0819');
});

test('getEmail method test', () => {
    expect(newengineer.getEmail()).toBe('apark0819@gmail.com');
});

test('getGithub method test', () => {
    expect(newengineer.getGithub()).toBe('apark0819');
});

test('getRole method test', () => {
    expect(newengineer.getRole()).toBe('Engineer');
});