import { ReactNode, useState } from "react";
import { Button } from "./button";
import { signIn } from "next-auth/react";

/**
 * Properties for the GoogleButton component.
 */
type GoogleButtonProps = {
  /**Content of the button */
  children: ReactNode;
};

/**
 * button used for login with Google
 * @param props the properties for google button
 * @returns Google button component
 */

export default function GoogleButton({ children }: GoogleButtonProps) {
  /**
   * usestate for loading wether the button is loading or not
   */
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * Function that performs Login
   * @returns a promise that shows that login is completed
   */

  const loginGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn("google", { callbackUrl: "http://localhost:3000" });
    } catch (err) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button disabled={isLoading} onClick={loginGoogle} className="w-full ">
      {isLoading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h4 w-4 mr-2 animate-spin"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      )}
      {children}
    </Button>
  );
}
