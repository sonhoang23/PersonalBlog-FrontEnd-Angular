import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAngularAllComponent } from './test-angular-all.component';

describe('TestAngularAllComponent', () => {
  let component: TestAngularAllComponent;
  let fixture: ComponentFixture<TestAngularAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAngularAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAngularAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
