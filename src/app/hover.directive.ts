import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hiaHover]'
})
export class HoverDirective implements OnInit {
  @Input() hiaHover: string = "red"

  startingColor: string = "white";
  color: string =  this.hiaHover;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.startingColor = this.element.nativeElement.style.backgroundColor;

    this.color = this.hiaHover;
  }

  @HostListener("mouseenter")
  onMouseEnter(): void {
    this.renderer.setStyle(this.element.nativeElement, "backgroundColor", this.color);
  }

  @HostListener("mouseleave")
  onMouseLeave(): void {
    this.renderer.setStyle(this.element.nativeElement, "backgroundColor", this.startingColor);
  }
}
