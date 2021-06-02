import {assert} from 'chai';

class PersonalinfoPage {

    get checkpernalinfopageheader() {
        return $('h1=Create an account');
        browser.debug()
    }

    get title() {
        return $('input[id="id_gender2"]');
    }

    get firstname() {
        return $('input[id="customer_firstname"]');
    }

    get lastname() {
        return $('input[id="customer_lastname"]');
    }

    get email() {
        return $('input[data-validate="isEmail"]')
        ;
    }

    get password() {
        return $('input[data-validate="isPasswd"]');
    }

    get dobdays() {
        return $('select[class="form-control"][ id="days"]');
    }

    get dobmonth() {
        return $('select[class="form-control"][ id="months"]');
    }

    get dobyear() {
        return $('select[class="form-control"][ id="years"]');
    }

    get addressfirstname() {
        return $('input[id="firstname"]');
    }

    get addresslastname() {
        return $('input[id="lastname"]');
    }

    get addresscompany() {
        return $('input[id="company"]');
    }

    get addressofcompany() {
        return $('input[id="address1"]');
    }

    get addresscity() {
        return $('input[id="city"]');
    }

    get addressState() {
        return $('select[id="id_state"]');
        ;
    }

    get addresszip() {
        return $('input[id="postcode"]');
        ;
    }

    get addresscountry() {
        return $('select[id="id_country"]');
        ;
    }

    get addressMobilephone() {
        return $('input[id="phone_mobile"]');
        ;
    }
    get addressofalias() {
        return $('input[id="alias"]');
        ;
    }

    get register() {
        return $('button[id="submitAccount"]');
        ;
    }



    login(user) {
        
        this.title.click();
        this.firstname.setValue(user.firstname);
        this.lastname.setValue(user.lastname);
        this.email.setValue(user.emailaddress);
        this.password.setValue(user.password);
        this.dobdays.selectByAttribute("value",user.valueday);
        this.dobmonth.selectByAttribute("value",user.valuemonth);
        this.dobyear.selectByAttribute("value",user.valueyear);

        this.addressfirstname.setValue(user.firstname);
        this.addresslastname.setValue(user.lastname);
        this.addresscompany.setValue(user.addresscompany);
        this.addressofcompany.setValue(user.addressofcompany);
        this.addresscity.setValue(user.addresscity);
        this.addressState.selectByAttribute("value",user.addressState);
        this.addresszip.setValue(user.addresszip);
        this.addresscountry.selectByAttribute("value",user.addresscountry);
        this.addressMobilephone.setValue(user.addressMobilephone);
        this.addressofalias.setValue(user.addressofalias);
        this.register.click();
     
    }


}

export const personalinfo = new PersonalinfoPage();