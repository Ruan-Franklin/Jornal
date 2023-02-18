import axios from 'axios';

export default class ArtigoSerializer {
  static async create(data) {
    try {
      const response = await axios.post('http://localhost:8000/artigos/', data);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
