import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderNavbarComponent} from './header-navbar/header-navbar.component';
import {AppRoutingModule} from './/app-routing.module';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {HomeComponent} from './home/home.component';
import {AdListsComponent} from './ad-lists/ad-lists.component';
import {environment} from "../environments/environment";
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

@NgModule({
    declarations: [
        AppComponent,
        HeaderNavbarComponent,
        SignInComponent,
        SignUpComponent,
        HomeComponent,
        AdListsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
