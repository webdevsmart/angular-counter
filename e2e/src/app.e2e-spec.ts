import { AppPage } from './app.po';
import { browser, by, logging } from 'protractor';
import { wait } from '../../src/app/core/common.util';



describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display initial values', () => {
    page.navigateTo();
    expect(page.getValueA()).toEqual('-5');
    expect(page.getValueB()).toEqual('10');
    expect(page.hasClass(page.getValueARenderer().element(by.css('.number-box')), 'border-danger')).toBe(true);
    expect(page.hasClass(page.getValueBRenderer().element(by.css('.number-box')), 'border-primary')).toBe(true);
    expect(page.hasClass(page.getValueARenderer().element(by.css('.number-box h3')), 'text-danger')).toBe(true);
    expect(page.hasClass(page.getValueBRenderer().element(by.css('.number-box h3')), 'text-primary')).toBe(true);
  });

  it('should start counter when user click start button', async () => {
    page.navigateTo();
    browser.ignoreSynchronization = true;
    await page.getStartButton().click();
    await wait(3000);
    expect(page.getValueA()).toEqual('-1');
    expect(page.getValueB()).toEqual('2');
    expect(page.hasClass(page.getValueARenderer().element(by.css('.number-box')), 'border-danger')).toBe(true);
    expect(page.hasClass(page.getValueBRenderer().element(by.css('.number-box')), 'border-primary')).toBe(true);
    expect(page.hasClass(page.getValueARenderer().element(by.css('.number-box h3')), 'text-danger')).toBe(true);
    expect(page.hasClass(page.getValueBRenderer().element(by.css('.number-box h3')), 'text-primary')).toBe(true);
  });

  it('should pause counter when user click pause button', async () => {
    page.navigateTo();
    browser.ignoreSynchronization = true;
    await page.getStartButton().click();
    await wait(3000);
    expect(page.getValueA()).toEqual('-1');
    expect(page.getValueB()).toEqual('2');
    expect(page.hasClass(page.getValueARenderer().element(by.css('.number-box')), 'border-danger')).toBe(true);
    expect(page.hasClass(page.getValueBRenderer().element(by.css('.number-box')), 'border-primary')).toBe(true);
    expect(page.hasClass(page.getValueARenderer().element(by.css('.number-box h3')), 'text-danger')).toBe(true);
    expect(page.hasClass(page.getValueBRenderer().element(by.css('.number-box h3')), 'text-primary')).toBe(true);
    await page.getPauseButton().click();
    await wait(3000);
    expect(page.getValueA()).toEqual('-1');
    expect(page.getValueB()).toEqual('2');
    expect(page.hasClass(page.getValueARenderer().element(by.css('.number-box')), 'border-danger')).toBe(true);
    expect(page.hasClass(page.getValueBRenderer().element(by.css('.number-box')), 'border-primary')).toBe(true);
    expect(page.hasClass(page.getValueARenderer().element(by.css('.number-box h3')), 'text-danger')).toBe(true);
    expect(page.hasClass(page.getValueBRenderer().element(by.css('.number-box h3')), 'text-primary')).toBe(true);
  });

  it('should stop counter when user click stop button', async () => {
    page.navigateTo();
    browser.ignoreSynchronization = true;
    await page.getStartButton().click();
    await wait(3000);
    expect(page.getValueA()).toEqual('-1');
    expect(page.getValueB()).toEqual('2');
    expect(page.hasClass(page.getValueARenderer().element(by.css('.number-box')), 'border-danger')).toBe(true);
    expect(page.hasClass(page.getValueBRenderer().element(by.css('.number-box')), 'border-primary')).toBe(true);
    expect(page.hasClass(page.getValueARenderer().element(by.css('.number-box h3')), 'text-danger')).toBe(true);
    expect(page.hasClass(page.getValueBRenderer().element(by.css('.number-box h3')), 'text-primary')).toBe(true);
    await page.getStopButton().click();
    expect(page.getValueA()).toEqual('-5');
    expect(page.getValueB()).toEqual('10');
    expect(page.hasClass(page.getValueARenderer().element(by.css('.number-box')), 'border-danger')).toBe(true);
    expect(page.hasClass(page.getValueBRenderer().element(by.css('.number-box')), 'border-primary')).toBe(true);
    expect(page.hasClass(page.getValueARenderer().element(by.css('.number-box h3')), 'text-danger')).toBe(true);
    expect(page.hasClass(page.getValueBRenderer().element(by.css('.number-box h3')), 'text-primary')).toBe(true);
  });

  it('should stop counter when user click stop button', async () => {
    page.navigateTo();
    browser.ignoreSynchronization = true;
    await page.getStartButton().click();
    await wait(3000);
    expect(page.getValueA()).toEqual('-1');
    expect(page.getValueB()).toEqual('2');
    expect(page.hasClass(page.getValueARenderer().element(by.css('.number-box')), 'border-danger')).toBe(true);
    expect(page.hasClass(page.getValueBRenderer().element(by.css('.number-box')), 'border-primary')).toBe(true);
    expect(page.hasClass(page.getValueARenderer().element(by.css('.number-box h3')), 'text-danger')).toBe(true);
    expect(page.hasClass(page.getValueBRenderer().element(by.css('.number-box h3')), 'text-primary')).toBe(true);
    await page.getStopButton().click();
    expect(page.getValueA()).toEqual('-5');
    expect(page.getValueB()).toEqual('10');
    expect(page.hasClass(page.getValueARenderer().element(by.css('.number-box')), 'border-danger')).toBe(true);
    expect(page.hasClass(page.getValueBRenderer().element(by.css('.number-box')), 'border-primary')).toBe(true);
    expect(page.hasClass(page.getValueARenderer().element(by.css('.number-box h3')), 'text-danger')).toBe(true);
    expect(page.hasClass(page.getValueBRenderer().element(by.css('.number-box h3')), 'text-primary')).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
