import { UseQueryResult } from "@tanstack/react-query/src/types";

export const useQueriesIsLoading = (queries: UseQueryResult[]) => {
  for (const query of queries) {
    if (query.isLoading) return true;
  }

  return false;
};
