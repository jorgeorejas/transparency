import Link from "next/link"

import { Icon, Logo } from "@design-system/atoms"
import { UserAuthForm } from "@components/dashboard/Form"

export default function LoginPage() {
  return (
    <div className="container flex flex-col items-center justify-center w-screen h-screen">
      <Link
        href="/"
        className="absolute inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center bg-transparent border border-transparent rounded-lg top-4 left-4 text-slate-900 hover:border-slate-200 hover:bg-slate-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-slate-200 md:top-8 md:left-8"
      >
        <>
          <Icon name="ChevronLeftIcon" className="w-4 h-4 mr-2" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Logo.Isotype flow="column" size="lg" />
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-sm text-slate-600">
            Enter your email to sign in to your account
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-sm text-center text-slate-600">
          <Link href="/register" className="underline hover:text-brand">
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}
