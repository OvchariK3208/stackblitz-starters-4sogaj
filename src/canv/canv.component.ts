import { Component, ContentChild } from '@angular/core';

@Component({
  selector: 'app-canv',
  standalone: true,
  imports: [],
  templateUrl: './canv.component.html',
  styleUrl: './canv.component.scss',
})
export class CanvComponent {
  _scale: number = 1;
  _positionX: number = 0;
  _positionY: number = 0;
  minZoom = 10;
  draggableElement!: HTMLElement;

  @ContentChild('projected', { static: false }) projectedContent;

  public set scale(value: number) {
    this._scale = value;
    this.transformElement();
  }

  public get scale() {
    return this._scale;
  }

  public set positionX(value: number) {
    this._positionX = value;
    this.transformElement();
  }

  public set positionY(value: number) {
    this._positionY = value;
    this.transformElement();
  }

  public get positionX() {
    return this._positionX;
  }

  public get positionY() {
    return this._positionY;
  }

  onWheel(event: WheelEvent) {
    event.preventDefault();
    const isMouseWheel = event.deltaY === 100 || event.deltaY === -100;
    const isPinch = event['wheelDelta'] === 120 || event['wheelDelta'] === -120;
    // control pinch and vertical move actions
    if (this._isDecimal(event.deltaY) || isMouseWheel) {
      const deltaY = isMouseWheel ? event.deltaY / 10 : event.deltaY;
      this.scale += deltaY * -0.01;
      this.scale = Math.min(Math.max(this.minZoom / 100, this.scale), 2.5);
    } else {
      this.positionY += event.deltaY * -0.9;
      this.positionY = Math.min(Math.max(-10000, this.positionY), 10000);
    }

    this.positionX += event.deltaX * -0.9;
    this.positionX = Math.min(Math.max(-10000, this.positionX), 10000);
  }

  private _isDecimal(num): boolean {
    return !Number.isInteger(num);
  }

  ngAfterViewInit() {
    this.draggableElement = document.getElementById('draggable');
  }

  transformElement() {
    if (this.draggableElement) {
      this.draggableElement.style.transform = `scale(${this.scale}) translate(${this.positionX}px, ${this.positionY}px)`;
    }
  }
}
