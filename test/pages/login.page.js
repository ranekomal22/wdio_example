import {assert} from 'chai';

class LoginPage {
    // Selectors - arranged alphabetically
    get emailaddress() {
        return $('input[id="email_create"]');
    }

    get checksigninform() {
        return $('form[id="create-account_form"]');
    }

    get checkAlreadysigninform() {
        return $('form[id="login_form"]');
    }

    get checkAuthenticationPage() {
        return $('h1.page-heading');
    }
    
    get buttonLogin() {
        return $('button[id="SubmitCreate"]');
    }

    get areadyemailaddress() {
        return $('input[id="email"]');
    }

    get alreadypassword() {
        return $('input[id="passwd"]');
    }

    get buttonSignin() {
        return $('button[id="SubmitLogin"]');
    }

    enteremail(user) {
        assert.isTrue(this.emailaddress.isExisting(), 'email address field is missing');
        
        this.emailaddress.setValue(user.emailaddress);
        
        this.buttonLogin.click();
    }

    enter_emailandpassword(user){

        this.areadyemailaddress.setValue(user.emailaddress);
        this.alreadypassword.setValue(user.password);
        this.buttonSignin.click(); 

    }
}

export const loginPage = new LoginPage();