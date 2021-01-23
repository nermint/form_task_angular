import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './pages/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { SuccessComponent } from './pages/success/success.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

// material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    FormComponent,
    SuccessComponent,
    BannerComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[
    FormComponent,
    SuccessComponent,
    FooterComponent,
    BannerComponent
  ],
  providers: [],
  bootstrap: [FormComponent]
})
export class CoreModule { }
