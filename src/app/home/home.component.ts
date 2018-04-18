import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    _user: any;
    _users: any;
    _groups: any;
    _onlineUsers: any = [];
    draftMessage: any;
    currentThread: any;
    receiverId: any;
    searchUsers: any;
    searchDraft = new FormControl();
    textareaDraft = new FormControl();
    isSearchDraft: boolean = false;
    isLoadingUser: boolean = false;
    isTyping: boolean = false;
    colorSet: any = ['#ba6236', '#ae7313', '#a5980d', '#7d9726', '#5b9d48', '#36a166', '#9d6c7c', '#0e5a94', '#9d6c7c', '#5e6e5e'];
    homeImage: any = "https://hitesh-batcave.herokuapp.com/home_image.png";

}
