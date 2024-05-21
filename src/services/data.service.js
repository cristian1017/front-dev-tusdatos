import { authClient } from "../utils/base-client-auth";

export class DataService {
  async get_data() {
    try {
      const resp = await authClient().get("/data");
      return [null, resp.data]
    } catch (error) {
      return [error]
    }
  }
  async get_data_id(id) {
    try {
      const resp = await authClient().get(`/data/${id}`);
      return [null, resp.data]
    } catch (error) {
      return [error]
    }
  }
}