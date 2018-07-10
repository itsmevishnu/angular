import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';

import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { Http } from '@angular/http/src/http';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { IndicatorPipe } from './indicator.pipe';
import { NotificationPipe } from './notification.pipe';
import { FormComponent } from './form/form.component';
import { NumbersComponent } from './numbers/numbers.component';
import { MyDataService } from './my-data.service';



@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    UsersListComponent,
    ProductComponent,
    MembersComponent,
    HomeComponentComponent,
    CalculatorComponent,
    IndicatorPipe,
    NotificationPipe,
    FormComponent,
    NumbersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:"",
        component: HomeComponentComponent
      },
      {
        path: 'user',
        component: UsersListComponent
      },
      {
        path:'member',
        component: MembersComponent
      },
      {
        path:'product',
        component: ProductComponent
      },
      {
        path:'calculator',
        component: CalculatorComponent
      },
      {
        path:'form',
        component: FormComponent
      }, 
      {
        path: 'numbers',
        component: NumbersComponent
      }
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
