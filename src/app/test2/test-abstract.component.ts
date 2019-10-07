import { Input } from '@angular/core';

export abstract class TestAbstractComponent {

  _something: string;

  @Input()
  get something(): string {
    return this._something;
  }
  set something(something: string) {
    this._something = something;
  }
}
