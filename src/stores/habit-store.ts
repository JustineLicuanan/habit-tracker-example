import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { Habit } from 'src/components/models';

interface HabitState {
  habits: Habit[];
}

export const useHabitStore = defineStore('habit', {
  state: (): HabitState => ({
    habits: [],
  }),

  actions: {
    async fetch() {
      const res = await api.get('/habits');
      this.habits = res.data;
    },
    async create(habit) {
      const res = await api.post('/habits', habit);
      this.habits.push(res.data);
    },
    async remove(id) {
      await api.delete(`/habits/${id}`);
      this.habits = this.habits.filter((habit) => habit.id !== id);
    },
  },
});
