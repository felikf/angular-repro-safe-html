import { Component } from '@angular/core';
import { TestAbstractComponent } from './test-abstract.component';

@Component({
  selector: 'dbs-test2',
  template: `
    <div>
        {{ something }}
    </div>
  `
})
export class Test2Component extends TestAbstractComponent {
}
