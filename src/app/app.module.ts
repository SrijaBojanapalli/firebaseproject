import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import {ShareService} from '../app/share.service';

export const appRoutes: Routes = [
  { path: 'create',
    component: CreateComponent
  },
  { path: 'index',
    component: IndexComponent
  }
];



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})


export class AppModule { }
