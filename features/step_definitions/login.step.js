const globalTimeout = 90000;

const mainPage = require('../pages/main.page');

const { Given, When, Then, Before, After } = require('cucumber');

Given('login page is open', { timeout: globalTimeout }, function () {
    return mainPage.get();
});


When('I provide wrong credentials', { timeout: globalTimeout }, function () {
    return mainPage.fillWrongData();
});


Then('I should get the wrong credentials message', { timeout: globalTimeout }, function () {
    return mainPage.assertMessage();
});
