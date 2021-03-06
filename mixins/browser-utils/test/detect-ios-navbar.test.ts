import { expect } from '@bundled-es-modules/chai';
import sinon from 'sinon';
import { observeIosNavbar } from '../browser-utils';

describe('iOS navbar', () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(window, 'innerWidth').value(300);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should set --vaadin-viewport-bottom when landscape and clientHeight > innerHeight', () => {
    sandbox.stub(document.documentElement, 'clientHeight').value(250);
    sandbox.stub(window, 'innerHeight').value(200);
    observeIosNavbar(true);
    expect(getComputedStyle(document.documentElement).getPropertyValue('--vaadin-viewport-offset-bottom')).to.equal(
      '50px'
    );
  });

  it('should set --vaadin-viewport-bottom when resize event is dispatched', () => {
    sandbox.stub(document.documentElement, 'clientHeight').value(275);
    sandbox.stub(window, 'innerHeight').value(200);
    window.dispatchEvent(new CustomEvent('resize'));
    expect(getComputedStyle(document.documentElement).getPropertyValue('--vaadin-viewport-offset-bottom')).to.equal(
      '75px'
    );
    sandbox.restore();
  });

  it('should not set --vaadin-viewport-bottom when clientHeight = innerHeight', () => {
    sandbox.stub(document.documentElement, 'clientHeight').value(200);
    sandbox.stub(window, 'innerHeight').value(200);
    window.dispatchEvent(new CustomEvent('resize'));
    expect(getComputedStyle(document.documentElement).getPropertyValue('--vaadin-viewport-offset-bottom')).to.equal('');
  });

  it('should not register another resize event listener when called twice', () => {
    const spy = sinon.spy(window, 'addEventListener');
    observeIosNavbar(true);
    expect(spy.called).to.be.false;
  });
});
