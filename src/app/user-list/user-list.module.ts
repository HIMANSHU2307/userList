import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListRoutingModule } from './user-list-routing.module';



@NgModule({
  declarations: [UserDetailComponent, UserCardComponent],
  imports: [
    CommonModule,
    UserListRoutingModule
  ]
})
export class UserListModule { }
