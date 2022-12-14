"use client"
import { Icon, Image } from "@design-system/atoms"
import { Button } from "@design-system/molecules"
import { usePathname } from "next/navigation"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const path = usePathname()

  return (
    <div className="overflow-auto">
      <Button.Link
        href="/"
        className="absolute z-10 top-4 left-4 md:top-8 md:left-8"
      >
        <Icon name="ChevronLeftIcon" className="w-4 h-4 mr-2" />
        Back
      </Button.Link>
      <TopRightButton path={path} />
      <div className="container grid flex-col items-center justify-center w-screen h-screen lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Image
          rounded={false}
          src="https://picsum.photos/seed/hr/1200/1200"
          className="h-full"
          alt="Register page background image"
        />
        {children}
      </div>
    </div>
  )

  function TopRightButton({ path }: { path: string }) {
    switch (path) {
      case "/login":
        return (
          <Button.Link
            href="/register"
            className="absolute z-10 top-4 right-4 md:top-8 md:right-8"
            negative
          >
            Signup
          </Button.Link>
        )
      case "/register":
        return (
          <Button.Link
            href="/login"
            className="absolute z-10 top-4 right-4 md:top-8 md:right-8"
            negative
          >
            Login
          </Button.Link>
        )
    }
  }
}
