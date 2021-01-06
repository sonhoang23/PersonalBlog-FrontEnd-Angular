import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAntComponent } from './test-ant.component';

describe('TestAntComponent', () => {
  let component: TestAntComponent;
  let fixture: ComponentFixture<TestAntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
