"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import GoogleButton from "../GoogleButton";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

const FormSchema = z.object({
  email: z.string().min(1, "Email required").email("Invalid Email"),
  password: z
    .string()
    .min(1, "Password required")
    .min(8, "Password must have  at least 8 characters"),
});

const SignInForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (signInData?.error) {
      toast({
        title: "Error signing in.",
        description: "Something went wrong",
        variant: "destructive",
      });
    } else {
      router.refresh();
      router.push("/");
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2 text-[#EEEE]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="test@example.com"
                    {...field}
                    className="bg-[#0d1117] border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                    className="bg-[#0d1117] border-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button
          className="w-full mt-6 bg-[#3db555] hover:bg-[#3da852]"
          type="submit"
        >
          Sign In
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400 text-white">
        or
      </div>
      <GoogleButton>Sign in with Google</GoogleButton>
      <div className="flex items-center mt-5">
        <p className="text-center text-sm text-gray-500 ">
          No account? Sign up here!
        </p>
        <Link
          className="text-blue-500 hover:underline text-sm ml-1"
          href="/sign-up"
        >
          Sign up
        </Link>
      </div>
    </Form>
  );
};

export default SignInForm;
