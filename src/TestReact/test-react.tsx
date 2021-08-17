import React from 'react';
import ReactDOM from 'react-dom';
import { noView, bindable, inject } from 'aurelia-framework';
import { HelloWorld } from '../ReactComponents';

@noView()
@inject(Element)
export class TestReact {
  private element: Element;

  @bindable date;
  @bindable format = 'dddd, MMMM D, YYYY';

  constructor(element: Element) {
    this.element = element;
    setTimeout(() => this.render(), 300)
  }

  public dateChanged(): void {
    this.render();
  }

  public formatChanged(): void {
    this.render();
  }

  public render(): void {
    ReactDOM.render(
      <HelloWorld message="Hello from Aurelia" />,
      this.element
    );
  }
}
