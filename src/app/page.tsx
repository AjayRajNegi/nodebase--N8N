import { getQueryClient, trpc } from "@/trpc/server";
import { Client } from "./Client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Page() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Client />
      </HydrationBoundary>
    </div>
  );
}
