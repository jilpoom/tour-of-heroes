import {Injectable} from '@angular/core';
import {Message} from "./message.dto";

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Message[] = [];

  add(message: Message) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
