import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
})
export class TitleComponent implements OnChanges {
  title = input.required<string>();
  title2 = input.required<string>();
  title3 = input.required<string>();
  title4 = input.required<string>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');

    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }
}
