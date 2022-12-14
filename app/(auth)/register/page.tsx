import Link from "next/link"

import { UserAuthForm } from "@components/dashboard/Form"
import { Logo } from "@design-system/atoms"

export default function RegisterPage() {
  return (
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
  )
}
