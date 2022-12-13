"use client"

import { Text, Logo } from "@design-system/atoms"
import { Button } from "@design-system/molecules"
import cn from "classnames"
import { signIn, signOut } from "next-auth/react"
import Link from "next/link"
export type HeaderProps = {
  className?: string
  sticky?: boolean
  user: any
  children?: React.ReactNode
}

// promise react element

const Header = ({ className, user, children, sticky = false }: HeaderProps) => {
  const style = cn(
    "bg-white  max-w-[90vw] h-16 mx-auto",
    "top-0 z-50 py-2 px-2",
    "flex justify-between items-center ",
    {
      sticky: sticky,
    },
    className
  )

  return (
    <div className={style}>
      <div className="flex items-center justify-center gap-4">
        <Logo.Isotype size="sm" flow="row" />
        {children}
      </div>
      <div className="flex items-center justify-center gap-4 shrink-0">
        {user ? (
          <>
            <Text>{user.name}</Text>
            <Button onClick={() => signOut()}>Logout</Button>
          </>
        ) : (
          <Button onClick={() => signIn()}>Login</Button>
        )}
      </div>
    </div>
  )
}
export default Header
