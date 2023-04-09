import AlertCMSP from "../pageobjects/alertCMS"
import { OpenPage } from "../pageobjects/urlPageCMSP";

describe('Login Test CMS-Portal CariParkir', async() => {
    it('should login with valid credentials', async() => {
        await OpenPage.open();

        await OpenPage.login('testing.api@ai.astra.co.id', 'Astra2018');
        expect(AlertCMSP.passAlert).toBeExisting();
        expect(AlertCMSP.passAlert).toHaveTextContaining(
            'Login Successfully.');
    });
});