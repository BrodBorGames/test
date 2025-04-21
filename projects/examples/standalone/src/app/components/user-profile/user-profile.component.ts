import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserASP } from '../../data/services/interfaces/user.interface';
import Keycloak from 'keycloak-js';
import { ProfileCardComponent } from "../profile-card/profile-card.component";
import { UserService } from '../../data/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: [`user-profile.component.css`],
  imports: [ProfileCardComponent]
})
export class UserProfileComponent implements OnInit {
  userService: UserService = inject(UserService)
  user: User | undefined;
  users: UserASP[] =[];

  constructor(private readonly keycloak: Keycloak) {
    this.userService.getUsers()
    .subscribe(val =>
      this.users = val
    )
  }

  async ngOnInit() {
    if (this.keycloak?.authenticated) {
      const profile = await this.keycloak.loadUserProfile();

      this.user = {
        name: `${profile?.firstName} ${profile.lastName}`,
        email: profile?.email,
        username: profile?.username
      };
    }
  }
}
