import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerinfoComponent } from './lawyerinfo.component';

describe('LawyerinfoComponent', () => {
  let component: LawyerinfoComponent;
  let fixture: ComponentFixture<LawyerinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LawyerinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LawyerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
