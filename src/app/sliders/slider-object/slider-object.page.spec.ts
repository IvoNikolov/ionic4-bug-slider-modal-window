import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SliderObjectPage } from './slider-object.page';

describe('SliderObjectPage', () => {
  let component: SliderObjectPage;
  let fixture: ComponentFixture<SliderObjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderObjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SliderObjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
