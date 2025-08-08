import { CookiesConsentPage } from '../pages/cookiesConsent.page';
import { NewUserRegistrationPage } from '../pages/newUserRegistration.page';
import { registeredUser1 } from '../test-data/users';
import { test, expect } from '@playwright/test';

test('Register User', async ({ page }) => {
    const cookiesConsentPage = new CookiesConsentPage(page)
    const newUserRegistrationPage = new NewUserRegistrationPage(page)

    //when
    await page.goto('/')
    await cookiesConsentPage.cookiesConsentButton.click()

    await page.click('a[href="/login"]')

    //then
    await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible()

    //when
    await newUserRegistrationPage.fillSignupForm(registeredUser1.name + ' ' + registeredUser1.surname, registeredUser1.email)

    //then
    await expect(page.getByRole('heading', { name: 'Enter Account Information' })).toBeVisible()

    //when
    await newUserRegistrationPage.fillAccountInfo(registeredUser1)
    await newUserRegistrationPage.submitAccount()

    //then
    await expect(page.locator('[data-qa="account-created"]')).toHaveText('Account Created!')

    //when
    await page.locator('[data-qa="continue-button"]').click()

    //then
    await expect(page.getByText('Logged in as ' + registeredUser1.name + ' ' + registeredUser1.surname)).toBeVisible()

    //when
    await page.locator('a[href="/delete_account"]').click()

    //then
    await expect (page.locator('[data-qa="account-deleted"]')).toHaveText('Account Deleted!')
})