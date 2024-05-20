import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

/**
 * Instead of using window.location.origin, try to use an env variable instead. There might be times where you want to use a different host name.
 */

const SignOutButton = () => {
  return (
    <div className="flex gap-2">
      <Button
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/sign-in`,
          })
        }
        variant={"destructive"}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default SignOutButton;
