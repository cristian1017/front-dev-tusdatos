import client from "../utils/base-client";

export class AuthService {
  async getAuthLogin(auth) {
    try {
      const resp = await client.post("/login", auth);
      return [null, resp.data]
    } catch (error) {
      return [error];
    }
  }
}