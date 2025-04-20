// Angular import
import { AfterViewInit, Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// project import
import { NavigationItem, NavigationItems } from '../navigation';
import { environment } from 'src/environments/environment';

import { NavGroupComponent } from './nav-group/nav-group.component';

// icon
import { IconService } from '@ant-design/icons-angular';
import {
  DashboardOutline,
  CreditCardOutline,
  LoginOutline,
  QuestionOutline,
  ChromeOutline,
  FontSizeOutline,
  ProfileOutline,
  BgColorsOutline,
  AntDesignOutline
} from '@ant-design/icons-angular/icons';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-nav-content',
  imports: [CommonModule, RouterModule, NavGroupComponent, NgScrollbarModule],
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent implements AfterViewInit {
  private iconService = inject(IconService);

  // public props
  NavCollapsedMob = output();

  navigations: NavigationItem[];

  // version
  title = 'Demo application for version numbering';
  currentApplicationVersion = environment.appVersion;

  navigation = NavigationItems;
  windowWidth: number = window.innerWidth;

  // Constructor
  constructor() {
    this.iconService.addIcon(
      ...[
        DashboardOutline,
        CreditCardOutline,
        FontSizeOutline,
        LoginOutline,
        ProfileOutline,
        BgColorsOutline,
        AntDesignOutline,
        ChromeOutline,
        QuestionOutline
      ]
    );
    this.navigations = NavigationItems;
  }

  ngAfterViewInit() {
    if (this.windowWidth < 1025) {
      const navbar = document.querySelector('.coded-navbar') as HTMLDivElement;
      if (navbar) {
        navbar.classList.add('menupos-static');
      }
    }
  }
  fireOutClick() {
    const sidebar = document.querySelector('.coded-inner-navbar');
    sidebar?.classList.remove('active');
  }

  navMob() {
    const navElement = document.querySelector('app-navigation.coded-navbar') as HTMLElement | null;
  
    if (this.windowWidth < 1025 && navElement && navElement.classList.contains('mob-open')) {
      this.NavCollapsedMob.emit();
    }
  }
  
}
