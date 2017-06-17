import {Component, Input, OnInit} from '@angular/core';
import {LimsRestService} from "../../service/lims-rest.service";
import {User} from "../../class/user";

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.css']
})
export class UserInfoCardComponent implements OnInit {
  @Input('userID') userID: number;
  user: User;
  errorMsg: string;
  constructor(private restService: LimsRestService) {
  }

  ngOnInit() {
    this.getUser(this.userID)
  }
  getUser(id: number) {
    this.restService.getUser(id)
      .subscribe(
        data => this.user = data,
        error => this.errorMsg = error
      )

  }

}
