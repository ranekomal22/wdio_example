import {assert} from 'chai';

class SigninPage {
    // Selectors - arranged alphabetically

    get buttonLogin() {
        return $('a[class="login"]');
		
    }

    // BDD Functions
    open() {
        browser.url('/');
    }

    signinpage() {
        assert.isTrue(this.buttonLogin.isExisting(), 'Signin field is missing');
        this.buttonLogin.click();
    }
}

export const signinPage = new SigninPage();