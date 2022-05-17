const API_URL = `http://10.0.0.12:5091/api/habit`;
const HEADERS = {
  "Content-Type": "application/json",
};

const HabitService = {
  async addHabit(newHabitData) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify(newHabitData),
      });

      if (!response.ok) {
        throw new Error(`Code: ${response.code}, ${response.text}`);
      }

      const newHabit = await response.json();
      return newHabit;
    } catch (err) {
      throw new Error(
        `There was an error adding your new habit. ${err.message}`
      );
    }
  },

  async updateHabit(updatedHabit) {
    try {
      const response = await fetch(`${API_URL}/${updatedHabit.id}`, {
        method: "PUT",
        headers: HEADERS,
        body: JSON.stringify(updatedHabit),
      });

      if (!response.ok) {
        throw new Error(`Code: ${response.code}, ${response.text}`);
      }
    } catch (err) {
      throw new Error(
        `There was an error updating the habit (${updatedHabit.id}). ${err.message}`
      );
    }
  },

  async deleteHabit(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: HEADERS,
      });

      if (!response.ok) {
        throw new Error(`Code: ${response.code}, ${response.text}`);
      }
    } catch (err) {
      throw new Error(
        `There was an error deleting the habit (${id}). ${err.message}`
      );
    }
  },
};

export default HabitService;
