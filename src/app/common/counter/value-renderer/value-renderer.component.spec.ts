import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueRendererComponent } from './value-renderer.component';

describe('ValueRendererComponent', () => {
  let component: ValueRendererComponent;
  let fixture: ComponentFixture<ValueRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ValueRendererComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
