import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AscNameComponent } from './asc-name.component';

describe('AscNameComponent', () => {
  let component: AscNameComponent;
  let fixture: ComponentFixture<AscNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AscNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AscNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
