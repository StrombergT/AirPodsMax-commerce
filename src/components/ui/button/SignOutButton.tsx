import { signOut } from "next-auth/react";
import { Button } from "./button";
import { LogOut } from "lucide-react";

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
        size="icon"
        variant="ghost"
      >
        <LogOut />
      </Button>
    </div>
  );
};

export default SignOutButton;
