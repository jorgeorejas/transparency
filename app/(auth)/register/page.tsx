import Link from "next/link"

import { Image, Logo } from "@design-system/atoms"
import { UserAuthForm } from "@components/dashboard/Form"

export default function RegisterPage() {
  return (
    <div className="container grid flex-col items-center justify-center w-screen h-screen lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/login"
        className="absolute inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center bg-transparent border border-transparent rounded-lg top-4 right-4 text-slate-900 hover:border-slate-200 hover:bg-slate-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-slate-200 md:top-8 md:right-8"
      >
        Login
      </Link>

      <Image
        src="https://picsum.photos/seed/hr/1200/1200"
        className="h-full rounded-none"
        alt="Register page background image"
      />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Logo.Isotype flow="column" size="lg" />
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-sm text-slate-600">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-sm text-center text-slate-600">
            By clicking continue, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-brand">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-brand">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
