import axios from 'axios';
import Reminder from '../models/Reminder';

class ReminderService {
  http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });

  async getReminder() {
    const { data } = await this.http.get<Reminder[]>('todos');
    return data;
  }

  async addReminder(title: string) {
    const { data } = await this.http.post<Reminder>('todos', { title });
    return data;
  }

  async removeReminder(id: number) {
    const { data } = await this.http.delete(`todos/${id}`);
    return data;
  }
}

export default new ReminderService();
