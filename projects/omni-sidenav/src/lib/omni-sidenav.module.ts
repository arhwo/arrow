import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatSidenavModule, MatDrawerContainer } from '@angular/material/sidenav';

import { OmniDrawer } from './omni-drawer/omni-drawer.component';
import { OmniDrawerContainer } from './omni-drawer-container/omni-drawer-container.component';



@NgModule({
  declarations: [

    OmniDrawer,
    OmniDrawerContainer
  ],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  providers: [
    MatDrawerContainer
  ],
  exports: [

    OmniDrawer,
    OmniDrawerContainer
  ]
})
export class OmniSidenavModule { }
