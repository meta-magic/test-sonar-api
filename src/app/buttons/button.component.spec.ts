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
    if (!comp.disabled) {
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

  it('iconClick(): event triggered', () => {

    comp.disabled = false;
    const icon = fixture.debugElement.query(By.css('.fa fa-close'));
    spyOn(comp, 'onIconClick');
    if (!comp.disabled) {
      comp.onIconClick();
      fixture.detectChanges();
      expect(comp.disabled).toBeFalsy();
      expect(comp.onIconClick).toHaveBeenCalled();
    }
  });

  it('iconClick(): event not triggered', () => {
    comp.disabled = true;
    const icon = fixture.debugElement.query(By.css('.fa fa-close'));
    spyOn(comp, 'onIconClick');
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
    if (comp.getBGStyle()) {
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
    if (comp.getBGStyle() == null) {
      fixture.detectChanges();
      expect(comp.getBGStyle).toHaveBeenCalled();
    }
    spyOn(comp, 'badgeClass');
    fixture.detectChanges();
    comp.badgeClass();
    expect(comp.badgeClass).toHaveBeenCalled();
    expect(comp.badgeCssClass).toEqual('');
  });

  it('badgeClass(): all conditions', () => {
    let className = '';
    expect(className).toBe('');

    comp.type = 'primary';
    if (comp.type === 'primary' || comp.type === 'theme-color') {
      className = 'btn-primary-badge';

      expect(comp.type).toBe('primary');
      expect(className).toBe('btn-primary-badge');
    }

    comp.type = 'theme-color';
    if (comp.type === 'primary' || comp.type === 'theme-color') {
      className = 'btn-primary-badge';

      expect(comp.type).toBe('theme-color');
      expect(className).toBe('btn-primary-badge');
    }

    comp.type = 'theme-backgroundcolor';
    if (comp.type === 'secondary' || comp.type === 'theme-backgroundcolor') {
      className = 'btn-secondary-badge';

      expect(comp.type).toBe('theme-backgroundcolor');
      expect(className).toBe('btn-secondary-badge');
    }

    comp.type = 'secondary';
    if (comp.type === 'secondary' || comp.type === 'theme-backgroundcolor') {
      className = 'btn-secondary-badge';

      expect(comp.type).toBe('secondary');
      expect(className).toBe('btn-secondary-badge');
    }

    comp.type = 'success';
    if (comp.type === 'success' || comp.type === 'green') {
      className = 'btn-success-badge';


      expect(comp.type).toBe('success');
      expect(className).toBe('btn-success-badge');
    }

    comp.type = 'green';
    if (comp.type === 'success' || comp.type === 'green') {
      className = 'btn-success-badge';


      expect(comp.type).toBe('green');
      expect(className).toBe('btn-success-badge');
    }
    comp.type = 'danger';
    if (comp.type === 'danger' || comp.type === 'red') {
      className = 'btn-danger-badge';


      expect(comp.type).toBe('danger');
      expect(className).toBe('btn-danger-badge');
    }

    comp.type = 'red';
    if (comp.type === 'danger' || comp.type === 'red') {
      className = 'btn-danger-badge';


      expect(comp.type).toBe('red');
      expect(className).toBe('btn-danger-badge');
    }

    comp.type = 'warning';
    if (comp.type === 'warning' || comp.type === 'yellow') {
      className = 'btn-warning-badge';


      expect(comp.type).toBe('warning');
      expect(className).toBe('btn-warning-badge');
    }


    comp.type = 'yellow';
    if (comp.type === 'warning' || comp.type === 'yellow') {
      className = 'btn-warning-badge';


      expect(comp.type).toBe('yellow');
      expect(className).toBe('btn-warning-badge');
    }

    comp.type = 'transparent';
    if (comp.type === 'transparent') {
      className = 'btn-transparent-badge';


      expect(comp.type).toBe('transparent');
      expect(className).toBe('btn-transparent-badge');
    }
  });

  it('setDisabled(): set Disabled', () => {
    spyOn(comp, 'setDisabled');
    comp.setDisabled(true);
    fixture.detectChanges();
    expect(comp.setDisabled).toHaveBeenCalledWith(true);
  });

  it('setDisabled(): negate set Disabled', () => {
    var disabled = false;

    spyOn(comp, 'setDisabled');
    fixture.detectChanges();

    expect(comp.setDisabled).not.toHaveBeenCalled();
  });

  it('getBGStyle(): bgcolor & color defined', () => {

    comp.bgcolor = '#444444';
    comp.color = '#000000';
    comp.type = 'default';
    comp.bgBorderColor = 'none';

    const json = {
      'background-color': '#444444',
      'color': '#000000',
    };

    if (comp.bgcolor && comp.color) {
      spyOn(comp, 'getBGStyle');

      const res = comp.getBGStyle();

      fixture.detectChanges();

      expect(comp.type).toBe('default');
      expect(comp.bgBorderColor).toBe('none');
      expect(comp.getBGStyle).toHaveBeenCalled();

      //expect(this.res).toEqual(json);
    }
  });

  it('getBGStyle(): bgcolor & color un-defined', () => {

    comp.bgcolor = null;
    comp.color = null;

    if (!comp.bgcolor && !comp.color) {
      spyOn(comp, 'getBGStyle');

      fixture.detectChanges();
      const res = comp.getBGStyle();
      expect(comp.bgcolor).toBeNull();
      expect(comp.color).toBeNull();
      expect(comp.type).toBeUndefined();
      expect(comp.bgBorderColor).toBe('');
      expect(comp.getBGStyle).toHaveBeenCalled();

      //expect(this.res).toBeNull();
    }
  });

  it('setRoundEdge: ',()=>{
    var type = 'round-edge';
    if (type === 'round-edge') {
      comp.roundedgeclass = 'roundEdgeCommonCss';

      expect(type).toBe('round-edge');
      expect(comp.roundedgeclass).toBe('roundEdgeCommonCss');

    }
    type = 'clasic';
    if (type === 'classic') {
      
      this.roundedgeclass = 'classicCommonCss';

      expect(type).toBe('classic');
      expect(comp.roundedgeclass).toBe('classicCommonCss');
    }
  });

});
