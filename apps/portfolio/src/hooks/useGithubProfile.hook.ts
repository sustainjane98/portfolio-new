import { useQuery } from "@tanstack/react-query";
import GithubService from "../services/github.service";

export const useGithubProfile = (username: string) =>
  useQuery(["github-profile", username], async () => {
    const gps = new GithubService();

    return await gps.getUser(username);
  });
