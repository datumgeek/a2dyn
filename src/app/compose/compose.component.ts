import { Component, OnInit, Input, ViewContainerRef, ComponentRef, ViewChild, ModuleWithComponentFactories, Compiler, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  @Input() modulePath: string;
  @Input() className: string;
  @ViewChild("placeholder", { read: ViewContainerRef }) placeholderRef: ViewContainerRef;
  comp: any;
  private isViewInitialized: boolean = false;


  constructor(
    private compiler: Compiler,
    private componentFactorResolver: ComponentFactoryResolver) { }

  loadSubcomponent() {
    if (!this.isViewInitialized) {
      return;
    }
    if (this.comp) {
      this.comp.destroy();
    }

    (<any>window).require([this.modulePath], (module) => {
      let type = module["default"];
      this.compiler.compileModuleAndAllComponentsAsync(type)
      .then((moduleWithFactories: ModuleWithComponentFactories<any>) => {
        const factory = moduleWithFactories
          .componentFactories
          .find(x => x.componentType.name === this.className);
        this.comp = this.placeholderRef.createComponent(factory, 0);
      });
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.loadSubcomponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.loadSubcomponent();
  }

  ngOnDestroy() {
    if (this.comp) {
      this.comp.destroy();
    }
  }


}
