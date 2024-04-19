import { FC, ReactNode } from "react";
import { Button } from "./ui/button";

interface GoogleButtonProps {
  children: ReactNode;
}

const GoogleButton: FC<GoogleButtonProps> = ({ children }) => {
  const loginGoogle = () => console.log("log in with google");

  return (
    <Button onClick={loginGoogle} className="w-full ">
      {children}
    </Button>
  );
};

export default GoogleButton;
