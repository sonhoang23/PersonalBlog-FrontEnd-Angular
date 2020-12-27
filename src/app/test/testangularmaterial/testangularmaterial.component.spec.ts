import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestangularmaterialComponent } from './testangularmaterial.component';

describe('TestangularmaterialComponent', () => {
  let component: TestangularmaterialComponent;
  let fixture: ComponentFixture<TestangularmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestangularmaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestangularmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
