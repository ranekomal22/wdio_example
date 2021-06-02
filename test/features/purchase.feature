Feature: Performing an online purchase

    Scenario: Login with a standard user and purchase items
        Given I'm on the automationpractice page
        When I click on signin
        Then I am on authentication page
        When I enter email with a standard user
        Then I am on create an account page
        Then I register with information for required field
        When I am on page my account page
        Then I sign out on page 
        Then I am on authentication page
        When I enter email and password
        When I am on page my account page
        Then I sign out on page 
        
        
        

