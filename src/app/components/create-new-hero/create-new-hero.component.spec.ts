import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewHeroComponent } from './create-new-hero.component';

describe('CreateNewHeroComponent', () => {
  let component: CreateNewHeroComponent;
  let fixture: ComponentFixture<CreateNewHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewHeroComponent]
    });
    fixture = TestBed.createComponent(CreateNewHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
