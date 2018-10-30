import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { NumbersCardsService } from '../numbers-cards.service';

@Component({
  selector: 'app-cardmenu',
  templateUrl: './cardmenu.component.html',
  styleUrls: ['./cardmenu.component.scss']
})

export class CardmenuComponent implements OnInit {

  @Input() collapsible: AppComponent;

  users: [''];
  num: number;
  cardsShow: Boolean;
  constructor(private usersService: NumbersCardsService) {
    this.cardsShow = false;
  }

  ngOnInit() {
  }

  generate(): void {
    this.cardsShow = true;
    this.usersService.getNumber().subscribe( (data) => {
      console.log(data);
      this.num = data.num;

    this.usersService.getUsers(this.num).subscribe( (resp) => {
      console.log('Users:', resp);
      this.users = resp.users;
    }, (err) => {
      console.log(err);
    });

    }, (err) => {
      console.log(err);
    });
  }

}
