import { Component, OnInit } from '@angular/core';
import { Ticket } from '../core/model/ticket';
import { TicketService } from '../core/service/ticket-service';
import { TicketStatusEnum } from '../core/model/ticket-status.enum';
import { Router } from '@angular/router';
import { AuthService } from '../core/service/auth.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets: Ticket[];

  public TicketStatusEnum = TicketStatusEnum;

  constructor(
    private router: Router,
    private ticketService: TicketService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return;
    }

    this.ticketService
      .getAll()
      .subscribe((data: Ticket[]) => {
        this.tickets = data;
      });
  }

  add(): void {
    this.router.navigate(['ticket-add']);
  };
}