// angular import
import { Component, inject, input, OnInit, output } from '@angular/core';
import { RouterModule } from '@angular/router';

// project import

// icon
import { IconDirective, IconService } from '@ant-design/icons-angular';
import {
  BellOutline,
  SettingOutline,
  GiftOutline,
  MessageOutline,
  PhoneOutline,
  CheckCircleOutline,
  LogoutOutline,
  EditOutline,
  UserOutline,
  ProfileOutline,
  WalletOutline,
  QuestionCircleOutline,
  LockOutline,
  CommentOutline,
  UnorderedListOutline,
  ArrowRightOutline,
  GithubOutline,
  TransactionOutline,
  ShoppingCartOutline,
  ProductOutline,
  
} from '@ant-design/icons-angular/icons';

import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { INotificationItem } from './modal/notifications.interface';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/core/services/user.service';
import { DataServiceInterface } from 'src/app/core/modal/data.interface';
import { DATA_SERVICE_TOKEN } from 'src/main';

@Component({
  selector: 'app-nav-right',
  imports: [RouterModule, NgScrollbarModule, NgbNavModule, NgbDropdownModule,CommonModule,IconDirective ],
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})
export class NavRightComponent implements OnInit{
  private iconService = inject(IconService);
  isLoggedIn: boolean
  notifications!: INotificationItem[]
  length !:number
  styleSelectorToggle = input<boolean>();
  Customize = output();
  windowWidth: number;
  screenFull: boolean = true;
  userName!:string
  private dataService = inject<DataServiceInterface>(DATA_SERVICE_TOKEN);
  constructor(private userService: UserService) {
    this.windowWidth = window.innerWidth;
    this.iconService.addIcon(
      ...[
        CheckCircleOutline,
        GiftOutline,
        MessageOutline,
        SettingOutline,
        PhoneOutline,
        LogoutOutline,
        UserOutline,
        EditOutline,
        ProfileOutline,
        QuestionCircleOutline,
        LockOutline,
        CommentOutline,
        UnorderedListOutline,
        ArrowRightOutline,
        BellOutline,
        GithubOutline,
        WalletOutline,
        TransactionOutline,
        ShoppingCartOutline,
        ProductOutline
      ]
    );
  }
  ngOnInit(): void {
    this.userService.isLoggedIn$.subscribe(isLogged => this.isLoggedIn = isLogged)
    this.userService.userName$.subscribe(name => {
      this.userName = name;
    });    
    this.dataService.fetchData<INotificationItem>("notifications").subscribe(notifiactions =>{
      this.notifications = notifiactions
      this.length = notifiactions.length
    })
  }

  profile = [
    {
      icon: 'edit',
      title: 'Edit Profile'
    },
    {
      icon: 'user',
      title: 'View Profile'
    },
    {
      icon: 'profile',
      title: 'Social Profile'
    },
    {
      icon: 'wallet',
      title: 'Billing'
    }
  ];

  setting = [
    {
      icon: 'question-circle',
      title: 'Support'
    },
    {
      icon: 'user',
      title: 'Account Settings'
    },
    {
      icon: 'lock',
      title: 'Privacy Center'
    },
    {
      icon: 'comment',
      title: 'Feedback'
    },
    {
      icon: 'unordered-list',
      title: 'History'
    }
  ];
  logout(): void {
    // this.isLoggedIn = false
    this.userService.clearUserName();
  }
  login():void{
    // this.isLoggedIn = true
    this.userService.login()
  }
}
