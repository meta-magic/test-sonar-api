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

  it('buttonClick(): event triggered', () => {
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


  it('buttonClick(): event not triggered', () => {
    const button = fixture.debugElement.query(By.css('button'));
    spyOn(comp, 'buttonClick');
    comp.ispressed = false;
    comp.disabled = true;
    fixture.detectChanges();
    expect(comp.ispressed).toEqual(false);
    expect(comp.disabled).toEqual(true);
    expect(comp.buttonClick).not.toHaveBeenCalled();
  });

  it('iconClick(): event triggered',()=>{
  
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

  it('iconClick(): event not triggered',()=>{
      comp.disabled = true;
      const icon = fixture.debugElement.query(By.css('.fa fa-close'));
      spyOn(comp,'onIconClick');
      fixture.detectChanges();
      expect(comp.disabled).toBe(true);
      expect(comp.onIconClick).not.toHaveBeenCalled();
  });

  it('ngOnInit(): getBGStyle is not null', () => {
    comp.bgcolor = '#444444';
    comp.color = '#000000';
    //comp.type = 'default';
    const json = {
      'background-color': '#444444',
      'color': '#000000',
    };
    spyOn(comp, 'getBGStyle');
    if(comp.getBGStyle()){
      fixture.detectChanges();
      expect(comp.getBGStyle).toHaveBeenCalled();
      expect(comp.bgColorClass).toEqual(this.json);
    }
    spyOn(comp, 'badgeClass');
    fixture.detectChanges();
    comp.badgeClass();
    expect(comp.badgeClass).toHaveBeenCalled();
    expect(comp.badgeCssClass).toBeUndefined();
  });

  it('ngOnInit(): getBGStyle is null', () => {
    comp.bgcolor = null;
    comp.color = null;

    spyOn(comp, 'getBGStyle');
    if(comp.getBGStyle()==null) {
      fixture.detectChanges();
      expect(comp.getBGStyle).toHaveBeenCalled();
    }
    spyOn(comp, 'badgeClass');
    fixture.detectChanges();
    comp.badgeClass();
    expect(comp.badgeClass).toHaveBeenCalled();
    expect(comp.badgeCssClass).toEqual('');
  });

});
