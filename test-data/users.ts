import { faker } from '@faker-js/faker';

export const registeredUser1 = {
    name: 'Tester',
    surname: 'Testowy',
    email: faker.internet.email(),
    password: 'test1234567',
    day: '10',
    month: '10',
    year: '1990',
    address: faker.location.streetAddress(),
    country: 'United States',
    state: 'California',
    city: 'Los Angeles',
    zipcode: faker.location.zipCode(),
    mobile: faker.phone.number(),
}