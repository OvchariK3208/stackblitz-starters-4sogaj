import { Component } from '@angular/core';
import { CanvComponent } from '../canv/canv.component';
import { BuilderCanvasComponent } from '../builder-canvas/builder-canvas.component';

@Component({
  selector: 'app-inner-page',
  standalone: true,
  imports: [CanvComponent, BuilderCanvasComponent],
  templateUrl: './inner-page.component.html',
  styleUrl: './inner-page.component.scss'
})
export class InnerPageComponent {

}
