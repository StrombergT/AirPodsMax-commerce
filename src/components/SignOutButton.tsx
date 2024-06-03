import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const SignOutButton = () => {
  return (
    <div className="flex gap-2">
      <Button
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: process.env.NEXT_PUBLIC_API_BASE_URL + "/",
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
