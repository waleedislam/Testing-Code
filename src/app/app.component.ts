import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { CheckService } from './Services/checkService.service';
import { CommonModule } from '@angular/common';
import { UserService } from './Services/user.service';
import { LoggerService } from './Services/logger.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminComponent, MainComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
      providers:[UserService,LoggerService],
})
export class AppComponent {
  title = 'implementation';
  val!:boolean;
  receiveFromMain(value:boolean){
   this.val=value;
  }
}
