import { Component, OnInit } from '@angular/core';
import { DropdownComponent } from '../Components/dropdown/dropdown.component';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedInUser: string = '';
  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loggedin(){
    this.loggedInUser = localStorage.getItem('token') as string;
    return this.loggedInUser;
  }

  onLogout(){
    localStorage.removeItem('token');
    this.alertify.success('You are logged out');
  }

  handleOptionSelected(selectedOption: string) {
    switch (selectedOption) {
      case 'Logout':
        this.onLogout();
        break;
      case 'View Dashboard':
        //this.onViewDashboard();
        break;
      case 'My Profile':
        //this.onMyProfile();
        break;
      case 'Change Password':
        //this.onChangePassword();
        break;
      default:
        // Handle other options or provide a default action
        break;
    }
  }

}
