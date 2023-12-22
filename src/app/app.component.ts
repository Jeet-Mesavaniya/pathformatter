import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pathformatter';
  varipstring: string="";
  varopstring: string="";
  someLogic(){
    var ipstring =  (document.getElementById("inputtxtbox") as HTMLInputElement).value;
    this.varopstring = ipstring.replaceAll('//',"/");
  }
}
