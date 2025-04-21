import { Component, Input } from '@angular/core';
import { UserASP } from '../../data/services/interfaces/user.interface';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-profile-card',
  imports: [JsonPipe],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  @Input() user!: UserASP;
}
