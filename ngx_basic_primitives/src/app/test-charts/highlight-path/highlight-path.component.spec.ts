import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightPathComponent } from './highlight-path.component';

describe('HighlightPathComponent', () => {
  let component: HighlightPathComponent;
  let fixture: ComponentFixture<HighlightPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightPathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
