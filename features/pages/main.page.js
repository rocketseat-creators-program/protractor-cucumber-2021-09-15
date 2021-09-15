const { element, browser } = require('protractor');

const MainPage = function () {
  const helper = require('protractor-helper');
  const globalTimeout = 30000;

  this.get = () => {
    return browser.get(browser.baseUrl);
  }

  this.fillWrongData = () => {
    let elEmail = element(by.id('email'));
    helper.fillFieldWithText(elEmail, 'teste@testedaautomacaoe2e.com');

    let elSenha = element(by.id('password'));
    return helper.fillFieldWithTextAndPressEnter(elSenha, 'senhaerrada');
  }

  this.assertMessage = () => {
    let elAlert = element(by.xpath('//div[contains(text(), "User not found")]'))
    return helper.waitForElementPresence(elAlert);
  }

};

module.exports = new MainPage();
