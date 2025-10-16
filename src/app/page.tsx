"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function Page() {
  const { data } = authClient.useSession();

  return (
    <div>
      {JSON.stringify(data)}
      {data && <Button onClick={() => authClient.signOut()}>Logout</Button>}
    </div>
  );
}
