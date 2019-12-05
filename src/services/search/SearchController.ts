
import { getCommits } from "./api/Data";

export const getCommitByUser = async (q: string) => {
  if (q.length < 3) {
    return {
      type: "FeatureCollection",
      features: []
    };
  }

  return await getCommits(q);
};