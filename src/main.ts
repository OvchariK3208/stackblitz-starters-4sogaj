import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CanvComponent } from './canv/canv.component';
import { InnerPageComponent } from './inner-page/inner-page.component';

@Component({
  selector: 'app-root',
  imports: [InnerPageComponent],
  standalone: true,
  template: `
<app-inner-page>
</app-inner-page>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
