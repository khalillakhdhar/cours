import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { SendmsgComponent } from './sendmsg/sendmsg.component';
import { ReadmsgComponent } from './readmsg/readmsg.component';
import { ReadtopicComponent } from './readtopic/readtopic.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CreateComponent,
    ReadComponent,
    SendmsgComponent,
    ReadmsgComponent,
    ReadtopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
