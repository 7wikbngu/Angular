import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmenuComponent } from './cardmenu.component';

describe('CardmenuComponent', () => {
  let component: CardmenuComponent;
  let fixture: ComponentFixture<CardmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
