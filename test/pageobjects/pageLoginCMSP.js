import {OpenPage} from "./urlPageCMSP"

class LoginPageObj extends OpenPage{
    get inputUsername () {
        return browser.$("//input[@name='login']");
    }

    get inputPassword () {
        return browser.$("//input[@name='password']");
    }

    get btnSubmit () {
        return browser.$("//button[@type='button']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.OpenPage('#/login');
    }

}

module.exports = {LoginPageObj}