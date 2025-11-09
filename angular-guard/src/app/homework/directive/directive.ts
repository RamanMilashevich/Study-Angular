import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[appDelayRendering]'
})

export class DelayRenderingDerective  {
  private delayTime = 0;

  constructor(
    private template: TemplateRef<any>, // provides access to the template’s content.
    private container: ViewContainerRef // is a container where the template will be inserted or removed.
  ) {}

  @Input() set appDelayRendering(time: number) {
    this.delayTime = time
  }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.template, this.container)
      this.container.createEmbeddedView(this.template);
    }, this.delayTime);
  }
}
