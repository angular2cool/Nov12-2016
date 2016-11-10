import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})
export class AppModule { }
