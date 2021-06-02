import {assert} from 'chai';
import {Given, Then, When} from 'cucumber';
import {loginPage} from '../pages/login.page';
import {context} from '../data/context';
import {personalinfo} from '../pages/personalinfo.page';
import {signinPage} from '../pages/signin.page';
import {myaccountPage} from '../pages/myaccount.page';
import * as systemMessages from '../constants/messages.constant';


Given(/^I'm on the automationpractice page$/, () => {
    signinPage.open();
});


When(/^I click on signin$/, () => {
    signinPage.signinpage();
    loginPage.checksigninform.waitForExist();
});

Then(/^I am on authentication page$/, () => {
   
    // Make sure that we have landed on Products page
    assert.equal(
        loginPage.checkAuthenticationPage.getText(),
        systemMessages.FEEDBACK_USER_LOGGED,
    );
});

When(/^I enter email with a standard user$/, () => {

    loginPage.checksigninform.waitForExist();

    loginPage.enteremail(context.login.standardUser);
    
});

Then(/^I am on create an account page$/, () => {
    
    personalinfo.checkpernalinfopageheader.waitForExist();

    // Make sure that we have landed on Products page
    assert.equal(
        personalinfo.checkpernalinfopageheader.getText(),
        systemMessages.FEEDBACK_PERSONAL_INFO_PAGE,
    );
});

Then(/^I register with information for required field$/, () => {

    personalinfo.checkpernalinfopageheader.waitForExist();
    personalinfo.login(context.userdata.standardUser);

});

When(/^I am on page my account page$/, () => {
    myaccountPage.checkMyAccoutPage.waitForExist();

    // Make sure that we have landed on Products page
    assert.equal(
        myaccountPage.checkMyAccoutPage.getText(),
        systemMessages.FEEDBACK_MY_ACCOUNT_PAGE,
    );
});
Then(/^I sign out on page$/, () => {
    myaccountPage.signout();
    
});

When(/^I enter email and password$/, () => {

    loginPage.checkAlreadysigninform.waitForExist();

    loginPage.enter_emailandpassword(context.userdata.standardUser);
    
});