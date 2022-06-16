import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniDrawer } from './omni-drawer.component';

describe('OmniDrawer', () => {
  let component: OmniDrawer;
  let fixture: ComponentFixture<OmniDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OmniDrawer]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniDrawer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
