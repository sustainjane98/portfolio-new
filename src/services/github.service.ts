import axios from "axios";
import { GithubUser } from "../types/githubUser";

export default class GithubService {
  private BASE_URL = "https://api.github.com";
  private instance = axios.create({ baseURL: this.BASE_URL });

  public async getUser(username: string) {
    return (await this.instance.get<GithubUser>(`/users/${username}`)).data;
  }
}
