import { Locator, Page } from "@playwright/test";

export class CookiesConsentPage {
    private readonly cookiesConsentButton: Locator;

    constructor(page: Page) {
        this.cookiesConsentButton = page.getByRole('button', { name: 'Consent' });
    }

    async accept() {
        await this.cookiesConsentButton.click();
      }
}