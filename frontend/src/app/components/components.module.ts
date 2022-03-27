import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsComponent } from './forms/forms.component';
import { DemoFlexyModule } from '../demo-flexy-module';
import { GridListComponent } from './grid-list/grid-list.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ProgressComponent } from './progress/progress.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TooltipsComponent } from './tooltips/tooltips.component'
import { CustomerComponent } from './customer/customer.component';
import { CustomerDialogComponent } from './customer/customer-dialog/customer-dialog.component';
import { LoginComponent } from './login/login.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HeaderComponent } from '../layouts/header/header.component';
import { CompareComponent } from './compare/compare.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AlertsComponent,
    FormsComponent,
    GridListComponent,
    MenuComponent,
    TabsComponent,
    ExpansionComponent,
    ChipsComponent,
    ProgressComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    ButtonsComponent,
    TooltipsComponent,
    CustomerComponent,
    CustomerDialogComponent,
    LoginComponent,
    VehiculeComponent,
    HomeComponent,
    CompareComponent
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    FormsModule,
    FilePickerModule,
    ReactiveFormsModule,
    NgbModule,
    MatIconModule,
    NgxPaginationModule,
    AutocompleteLibModule,
    NgxSliderModule,
    NgApexchartsModule,
    AppRoutingModule,
  ],
  exports: [
    AlertsComponent,
    FormsComponent,
    GridListComponent,
    MenuComponent,
    TabsComponent,
    ExpansionComponent,
    ChipsComponent,
    ProgressComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    ButtonsComponent,
    CustomerDialogComponent,
    LoginComponent
  ]
})
export class ComponentsModule { }
