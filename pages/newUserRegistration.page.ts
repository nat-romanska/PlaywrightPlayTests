import { Locator, Page } from "@playwright/test";

export class NewUserRegistrationPage {

    readonly signupName: Locator;
    readonly signupEmail: Locator;
    readonly signupButton: Locator;
    readonly genderMr: Locator;
    readonly password: Locator;
    readonly days: Locator;
    readonly months: Locator;
    readonly years: Locator;
    readonly newsletter: Locator;
    readonly optin: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly country: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobileNumber: Locator;
    readonly createAccount: Locator;

    constructor(page: Page) {
        this.signupName = page.locator('[data-qa="signup-name"]');
        this.signupEmail = page.locator('[data-qa="signup-email"]');
        this.signupButton = page.locator('[data-qa="signup-button"]');
        this.genderMr = page.locator('label[for="id_gender1"]');
        this.password = page.locator('[data-qa="password"]');
        this.days = page.locator('[data-qa="days"]');
        this.months = page.locator('[data-qa="months"]');
        this.years = page.locator('[data-qa="years"]');
        this.newsletter = page.locator('input[name="newsletter"]');
        this.optin = page.locator('input[name="optin"]');
        this.firstName = page.locator('[data-qa="first_name"]');
        this.lastName = page.locator('[data-qa="last_name"]');
        this.address = page.locator('[data-qa="address"]');
        this.country = page.locator('[data-qa="country"]');
        this.state = page.locator('[data-qa="state"]');
        this.city = page.locator('[data-qa="city"]');
        this.zipcode = page.locator('[data-qa="zipcode"]');
        this.mobileNumber = page.locator('[data-qa="mobile_number"]');
        this.createAccount = page.locator('[data-qa="create-account"]');
      }
    
      async fillSignupForm(name: string, email: string) {
        await this.signupName.fill(name);
        await this.signupEmail.fill(email);
        await this.signupButton.click();
      }
    
      async fillAccountInfo(userData: any) {
        await this.genderMr.click();
        await this.password.fill(userData.password);
        await this.days.selectOption(userData.day);
        await this.months.selectOption(userData.month);
        await this.years.selectOption(userData.year);
        await this.newsletter.check();
        await this.optin.check();
        await this.firstName.fill(userData.name);
        await this.lastName.fill(userData.surname);
        await this.address.fill(userData.address);
        await this.country.selectOption(userData.country);
        await this.state.fill(userData.state);
        await this.city.fill(userData.city);
        await this.zipcode.fill(userData.zipcode);
        await this.mobileNumber.fill(userData.mobile);
      }
    
      async submitAccount() {
        await this.createAccount.click();
      }


}

