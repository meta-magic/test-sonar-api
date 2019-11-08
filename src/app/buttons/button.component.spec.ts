import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IconLoaderService } from '../services/icon.service';
import { CommonIconComponent } from '../base/components/common.icon.component';
import { AmexioButtonComponent } from './button.component';

describe('amexio-button', () => {
  let comp: AmexioButtonComponent;
  let fixture: ComponentFixture<AmexioButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AmexioButtonComponent, CommonIconComponent],
      providers: [IconLoaderService],
    });
    fixture = TestBed.createComponent(AmexioButtonComponent);
    comp = fixture.componentInstance;
    event = jasmine.createSpyObj('event', ['preventDefault', 'stopPropagation']);
  });

  it('buttonClick(): ', () => {
    spyOn(comp, 'buttonClick');
    const button = fixture.debugElement.query(By.css('button'));
    comp.ispressed = true;
    comp.disabled = false;
    fixture.detectChanges();
    expect(comp.ispressed).toEqual(true);
    if(!comp.disabled)
    {
      //expect(comp.ispressed).toEqual(false);
      button.triggerEventHandler('click', {});
      fixture.detectChanges();
      expect(comp.buttonClick).toHaveBeenCalled();
      expect(comp.disabled).toEqual(false);
    }
  });


  it('buttonClick()', () => {
    const button = fixture.debugElement.query(By.css('button'));
    spyOn(comp, 'buttonClick');
    comp.ispressed = false;
    comp.disabled = true;
    fixture.detectChanges();
    expect(comp.ispressed).toEqual(false);
    expect(comp.disabled).toEqual(true);
    expect(comp.buttonClick).not.toHaveBeenCalled();
  });

  it('iconClick()',()=>{
  
    comp.disabled = false;
    const icon = fixture.debugElement.query(By.css('.fa fa-close'));
    spyOn(comp,'onIconClick');
    if(!comp.disabled)
    {
      comp.onIconClick();
      fixture.detectChanges();
      expect(comp.disabled).toBeFalsy();
      expect(comp.onIconClick).toHaveBeenCalled();
    }
  });
});
