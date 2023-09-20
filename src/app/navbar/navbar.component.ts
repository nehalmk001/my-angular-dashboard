import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  @Output() onMenubtnclick=new EventEmitter

  menubtnClicked(){
    this.onMenubtnclick.emit()
  }

}
