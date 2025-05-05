"use client"
import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import Image from 'next/image'
import Link from 'next/link'
import { toast } from "sonner";
import FormField from './FormField'
import { useRouter } from 'next/navigation'


const authFormSchema = (type: FormType) => {
    return z.object({
      name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
      email: z.string().email(),
      password: z.string().min(3),
    });
  };


  const AuthForm = ({ type }: { type: FormType }) => {
    const router = useRouter();
    const formSchema = authFormSchema(type);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

  const isSignIn = type === "sign-in";

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            if (type === "sign-up") {
                toast.success("Account created successfully. Please sign in to continue.");
                router.push("/sign-in");
            } else {
                toast.success("Signed in successfully. Redirecting to home page...");
                router.push("/");
            }
        } catch (error) {
            console.error(error);
            toast.error("There was an error: ${error}");
        }
    }


  return (
    <div className='card-border large-w-[566px]'>
        <div className='flex flex-col gap-6 card py-14 px-10'>
            <div className='flex flex-row gap-2 justify-center'>
                <Image src="/logo.svg" alt="logo" width={38} height={32} />
                <h2 className='text-primary-100'>PrepWise</h2>
            </div>
            <h3>Pratice job interview with AI</h3>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                    {!isSignIn && (
                        <FormField
                            control={form.control}
                            name="name"
                            label="Name"
                            placeholder="Your Name"
                            type="text"
                        />
                    )}
                    <FormField
                        control={form.control}
                        name="email"
                        label="Email"
                        placeholder="Your email address"
                        type="email"
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                    />
                    <Button className="btn" type="submit">{isSignIn ? 'Name' : 'Create an Account'}</Button>
                </form>
            </Form>
            <p className='text-center'>{isSignIn ? "No account yet?" : "Have an account already?"}
                <Link href={isSignIn ? '/sign-up' : '/sign-in'} className="font-bold text-user-primary ml-1">
                    {!isSignIn ? "Sign In" : "Sign Up"}
                </Link>
            </p>
        </div>
    </div>
  )
}

export default AuthForm;