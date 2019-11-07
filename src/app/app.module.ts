
import { AmexioEmailInputComponent } from './emailinput/emailinput.component';
import { AmexioButtonComponent } from './buttons/button.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AmexioWidgetModule,
  AmexioChartsModule,
  AmexioDashBoardModule,
  AmexioEnterpriseModule,
  AmexioMapModule,
  AmexioFormsModule } from 'amexio-ng-extensions'; // Import Amexio library
import { AmexioInputHelperComponent } from './base/input.helper.component';
import { CommonIconComponent } from './base/components/common.icon.component';
import { CommonDataService } from './services/common.data.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AmexioButtonComponent,
    AmexioEmailInputComponent,
    AmexioInputHelperComponent,
    CommonIconComponent
  ],
  imports: [
    BrowserModule,
    AmexioWidgetModule,
    FormsModule,
    AmexioChartsModule,
    AmexioDashBoardModule,
    AmexioEnterpriseModule,
    AmexioMapModule,
    AmexioFormsModule
  ],
  providers: [CommonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
