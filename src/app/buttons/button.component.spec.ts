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
    const button = fixture.debugElement.query(By.css('button'));
    comp.ispressed = true;
    comp.disabled = true;
    fixture.detectChanges();
    expect(comp.ispressed).toEqual(true);
    if(!comp.disabled)
    {
      fixture.detectChanges();
      expect(comp.disabled).toEqual(true);
      button.triggerEventHandler('click', {});
      fixture.detectChanges();
      expect(comp.ispressed).toEqual(false);
    }
  //   expect(
  //   fixture.debugElement.query(By.css('h1')).nativeElement.innerText
  // ).toEqual('😜');
  });


  it('buttonClick()', () => {
    const button = fixture.debugElement.query(By.css('button'));
    comp.ispressed = false;
    comp.disabled = false;
    fixture.detectChanges();
    expect(comp.ispressed).toEqual(false);
    expect(comp.disabled).toEqual(false);
  });

  it('iconClick()',()=>{

    comp.disabled = true;
    expect(comp.disabled).toBeTruthy();
    fixture.debugElement.query(By.css('amexio-c-icon'))
//          .triggerEventHandler('click',null);
    fixture.detectChanges();

  });
});
