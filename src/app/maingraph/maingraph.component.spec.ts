import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaingraphComponent } from './maingraph.component';

describe('MaingraphComponent', () => {
  let component: MaingraphComponent;
  let fixture: ComponentFixture<MaingraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaingraphComponent]
    });
    fixture = TestBed.createComponent(MaingraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
