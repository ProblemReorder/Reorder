import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';

import { RejComponent } from './components/rej/rej.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DialogComponent } from './components/buttons/dialog/dialog.component';
//import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    RejComponent,
    DialogComponent,
    //DialogComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    BrowserAnimationsModule,
    DialogsModule,
    MatButtonModule,
    DragDropModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
