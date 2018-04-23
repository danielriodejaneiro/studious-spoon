import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
/* CUSTOM COMPONENTS */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
/* SERVICE */
import { TodosService } from './todos.service';

@NgModule( {
  declarations: [
    AppComponent,
    TodoComponent,
    TodoAddComponent,
    TodoEditComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ TodosService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
