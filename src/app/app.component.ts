import { Component, ViewChild } from '@angular/core';

import sampleData from './form.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proj-formIO';
  submittedData: any;

  customForm = sampleData;

  onSubmit(event: any) {
    this.submittedData = event;
  }
}
