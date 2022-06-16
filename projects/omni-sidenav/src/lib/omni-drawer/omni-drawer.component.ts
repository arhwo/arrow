import { Component, forwardRef } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav'

@Component({
  selector: 'aro-omni-drawer',
  templateUrl: './omni-drawer.component.html',
  styleUrls: ['./omni-drawer.component.less'],
  host: { 'class': 'aro-omni-drawer' },
  providers: [{ provide: MatDrawer, useExisting: forwardRef(() => OmniDrawer) }]

})
export class OmniDrawer extends MatDrawer {


}
