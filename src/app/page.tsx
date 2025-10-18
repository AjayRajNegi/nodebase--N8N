"use client";

import { LogoutButton } from "./Logout";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Page() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        toast.success("Job queued.");
      },
    })
  );

  return (
    <>
      <div>
        {JSON.stringify(data)} <LogoutButton />
      </div>
      <Button onClick={() => create.mutate()} disabled={create.isPending}>
        Create WOrkflow
      </Button>
    </>
  );
}
