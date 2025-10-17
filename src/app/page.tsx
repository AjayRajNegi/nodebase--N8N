import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { LogoutButton } from "./Logout";

export default async function Page() {
  await requireAuth();
  const data = await caller.getUsers();
  return (
    <div>
      {JSON.stringify(data)} <LogoutButton />
    </div>
  );
}
