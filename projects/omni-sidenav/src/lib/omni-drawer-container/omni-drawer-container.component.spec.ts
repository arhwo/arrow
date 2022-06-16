import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniDrawerContainer } from './omni-drawer-container.component';

describe('OmniDrawerContainer', () => {
  let component: OmniDrawerContainer;
  let fixture: ComponentFixture<OmniDrawerContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmniDrawerContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniDrawerContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
