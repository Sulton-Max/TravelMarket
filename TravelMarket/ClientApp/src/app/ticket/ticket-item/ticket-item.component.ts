import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.css']
})

export class TicketItemComponent implements OnInit {

  public tickets: Array<Ticket>;

  constructor() {

    this.tickets = [
      new Ticket('Grand Miramar', 'Grand Miramar All Luxury Suites & Residences', 'https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/grandmiramarallluxurysuitesandresidences.jpg'),
      new Ticket('Hotel Mousai Puerto Vallarta', 'Amazing Hotel', 'https://exp.cdn-hotels.com/hotels/8000000/7280000/7277400/7277386/2b17f542_z.jpg?impolicy=fcrop&w=1000&h=666&q=medium'),
      new Ticket('explora Patagonia - All Inclusive', 'All inclusive', 'https://exp.cdn-hotels.com/hotels/5000000/4260000/4258000/4257984/f4e4646c_z.jpg?impolicy=fcrop&w=1000&h=666&q=medium')
    ];
  }

  ngOnInit() {
  }
}
