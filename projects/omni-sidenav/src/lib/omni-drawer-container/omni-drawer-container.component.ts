import { Component, forwardRef } from '@angular/core';

import { MatDrawerContainer } from '@angular/material/sidenav';

@Component({
  selector: 'aro-omni-drawer-container',
  templateUrl: './omni-drawer-container.component.html',
  styleUrls: ['./omni-drawer-container.component.less'],
  providers: [{ provide: MatDrawerContainer, useExisting: forwardRef(() => OmniDrawerContainer) }]
})
export class OmniDrawerContainer extends MatDrawerContainer {



}
