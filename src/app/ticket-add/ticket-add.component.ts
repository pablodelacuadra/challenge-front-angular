import { Component, OnInit } from '@angular/core';
import { TicketStatusEnum } from '../core/model/ticket-status.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../core/service/ticket-service';
import { AuthService } from '../core/service/auth.service';

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit {

  public TicketStatusEnum: any = TicketStatusEnum;

  addForm: FormGroup;
  showNav :boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ticketService: TicketService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.showNav = false;
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return;
    }

    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      created_at: []
    });

  }

  onSubmit() {
    this.ticketService.create(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['ticket-list']);
      });
  }

}