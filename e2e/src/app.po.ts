import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getValueARenderer() {
    return element.all(by.css('app-root .container app-value-renderer')).get(0);
  }

  getValueA() {
    return this.getValueARenderer().getText() as Promise<string>;
  }

  getValueBRenderer() {
    return element.all(by.css('app-root .container app-value-renderer')).get(1);
  }

  getValueB() {
    return this.getValueBRenderer().getText() as Promise<string>;
  }

  getStartButton() {
    return element(by.css('app-root .container app-counter-slot .btn-start'));
  }

  getStopButton() {
    return element(by.css('app-root .container app-counter-slot .btn-stop'));
  }

  getPauseButton() {
    return element(by.css('app-root .container app-counter-slot .btn-pause'));
  }

  hasClass(ele, cls) {
    return ele.getAttribute('class').then((classes) => {
      return classes.split(' ').indexOf(cls) !== -1;
    });
  }
}
