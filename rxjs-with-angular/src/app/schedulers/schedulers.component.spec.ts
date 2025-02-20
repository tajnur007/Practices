import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulersComponent } from './schedulers.component';

describe('SchedulersComponent', () => {
  let component: SchedulersComponent;
  let fixture: ComponentFixture<SchedulersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
