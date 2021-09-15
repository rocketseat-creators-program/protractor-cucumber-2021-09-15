Feature: Login
    As an user
    I should be able to login to Rocketseat app
    In order to access all my classes

    Background: Login page must be open
        Given login page is open
    
    Scenario: Login with wrong credentials
        When I provide wrong credentials
        Then I should get the wrong credentials message