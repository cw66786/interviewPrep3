import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/interface/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  item!: Card;
  @Input()
  selected!: string;

  constructor() {}

  ngOnInit(): void {}
}
