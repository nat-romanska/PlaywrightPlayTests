import { Locator, Page } from "@playwright/test";

export class CookiesConsentPage {
    private readonly page: Page;
    private readonly cookiesConsentButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cookiesConsentButton = page.getByRole('button', { name: 'Consent' });
    }

    async accept() {
        // Cookie banners can be absent (already accepted) or have different button text
        // depending on locale / region. Avoid failing the whole test when consent
        // is not present.
        const candidates = [
            this.page.getByRole('button', { name: 'Consent' }),
            this.page.getByRole('button', { name: 'Accept' }),
            this.page.getByRole('button', { name: 'Agree' }),
        ];

        for (const candidate of candidates) {
            const isVisible = await candidate.isVisible({ timeout: 2000 }).catch(() => false);
            if (isVisible) {
                await candidate.click();
                return;
            }
        }
    }
}