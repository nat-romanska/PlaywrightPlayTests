import { Locator, Page } from "@playwright/test";

export class CookiesConsentPage {
    readonly cookiesConsentButton: Locator;

    constructor(page: Page) {
        this.cookiesConsentButton = page.getByRole('button', { name: 'Consent' });
    }
}