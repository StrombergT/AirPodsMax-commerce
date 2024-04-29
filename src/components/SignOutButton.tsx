import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

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
