import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHeroComponent } from './update-hero.component';

describe('UpdateHeroComponent', () => {
  let component: UpdateHeroComponent;
  let fixture: ComponentFixture<UpdateHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateHeroComponent]
    });
    fixture = TestBed.createComponent(UpdateHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
