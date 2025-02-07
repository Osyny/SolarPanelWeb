import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { AppComponentBase } from '../../../shared/app-component-base';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { NgForm } from '@angular/forms';
import { SolarPanelService } from '../../../services/solar-panel/solar-panel.service';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrl: './configurator.component.scss',
})
export class ConfiguratorComponent
  extends AppComponentBase
  implements OnInit, OnDestroy
{
  title: string = 'Configurator';
  widthRoof?: number;
  lengthRoof?: number;
  result?: string | undefined;

  private $unsubscribe = new Subject<void>();

  constructor(
    public bsModalRef: BsModalRef,
    injector: Injector,
    private solarPanelService: SolarPanelService
  ) {
    super(injector);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }

  configurator(ngForm: NgForm) {
    if (ngForm.invalid) {
      ngForm.form.markAllAsTouched();
      return;
    }
    if (this.widthRoof && this.lengthRoof)
      this.solarPanelService
        .configurator(this.widthRoof, this.lengthRoof)
        .subscribe((res) => {});
  }

  cancel() {
    this.bsModalRef.hide();
  }
}
