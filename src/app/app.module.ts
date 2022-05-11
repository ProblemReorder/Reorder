//Imports de Angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

//Componentes
import { AppComponent } from './app.component';
import { RejComponent } from './components/rej/rej.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DialogComponent } from './components/buttons/dialog/dialog.component';

//Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

//Kendo
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';



@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    RejComponent,
    DialogComponent,
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
