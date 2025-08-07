import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Register User', async ({ page }) => {

    const userData = {
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

    //when
    await page.goto('/')
    await page.getByRole('button', { name: 'Consent' }).click()

    //then
    await expect(page).toHaveTitle('Automation Exercise')

    //when
    await page.click('a[href="/login"]')

    //thenn
    await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible()

    //when
    await page.locator('[data-qa="signup-name"]').fill(userData.name + ' ' + userData.surname)
    await page.locator('[data-qa="signup-email"]').fill(userData.email)
    await page.locator('[data-qa="signup-button"]').click()

    //then
    await expect(page.getByRole('heading', { name: 'Enter Account Information' })).toBeVisible()

    //when
    await page.locator('label[for="id_gender1"]').click();

    //then
    await expect (page.locator('[data-qa="name"]')).toHaveValue('Tester Testowy')
    await expect (page.locator('[data-qa="email"]')).toHaveValue(userData.email)

    //when
    await page.locator('[data-qa="password"]').fill(userData.password)

    await page.locator('[data-qa="days"]').selectOption(userData.day)
    await page.locator('[data-qa="months"]').selectOption(userData.month)
    await page.locator('[data-qa="years"]').selectOption(userData.year)

    await page.locator('input[name="newsletter"]').check()
    await page.locator('input[name="optin"]').check()

    await page.locator('[data-qa="first_name"]').fill(userData.name)
    await page.locator('[data-qa="last_name"]').fill(userData.surname)
    await page.locator('[data-qa="address"]').fill(userData.address)
    await page.locator('[data-qa="country"]').selectOption(userData.country)
    await page.locator('[data-qa="state"]').fill(userData.state)
    await page.locator('[data-qa="city"]').fill(userData.city)
    await page.locator('[data-qa="zipcode"]').fill(userData.zipcode)
    await page.locator('[data-qa="mobile_number"]').fill(userData.mobile)

    await page.locator('[data-qa="create-account"]').click()

    //then
    await expect (page.locator('[data-qa="account-created"]')).toHaveText('Account Created!')

    //when
    await page.locator('[data-qa="continue-button"]').click()

    //then
    await expect (page.getByText('Logged in as ' + userData.name + ' ' + userData.surname)).toBeVisible()

    //when
    await page.locator('a[href="/delete_account"]').click()

    //then
    await expect (page.locator('[data-qa="account-deleted"]')).toHaveText('Account Deleted!')
})