import {assert} from 'chai';

class MyaccountPage {
    // Selectors - arranged alphabetically

    get checkMyAccoutPage() {

        return $('h1=My account');
    }

    get logout() {

        return $('a[class="logout"]');
    }

    signout(){
        this.logout.click();

    }

}

export const myaccountPage = new MyaccountPage();