import { authClient } from "../utils/base-client-auth";

export class ScraperService {
  async initProcessScraper() {
    try {
      const resp = await authClient().get("/scraper");
      return [null, resp.data]
    } catch (error) {
      return [error];
    }
  }
}