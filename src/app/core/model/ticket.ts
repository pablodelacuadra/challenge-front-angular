import { TicketStatusEnum } from './ticket-status.enum';

export class Ticket {
  id: number;
  title: string;
  description: string;
  status: TicketStatusEnum;
  created_at: string;
}
