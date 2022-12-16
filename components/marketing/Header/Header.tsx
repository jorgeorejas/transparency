"use client"

import { Icon, Logo, Text } from "@design-system/atoms"
import { Button, Card } from "@design-system/molecules"
import { Menu, Transition } from "@headlessui/react"
import cn from "classnames"
import { signIn, signOut } from "next-auth/react"
import React from "react"
export type HeaderProps = {
  className?: string
  sticky?: boolean
  user: any
  children?: React.ReactNode
}

// promise react element

const Header = ({ className, user, children, sticky = false }: HeaderProps) => {
  const style = cn(
    "bg-brand-white max-w-[90vw] h-16 mx-auto",
    "top-0 z-50 py-2 px-2",
    "flex justify-between gap-4 items-center ",
    {
      sticky: sticky,
    },
    className
  )
  return (
    <div className="relative bg-brand-white">
      <div className={style}>
        <div className="flex items-center justify-center gap-4">
          <Logo.Isotype isLink size="sm" flow="row" />
        </div>
        <div className="items-center justify-center hidden gap-4 mr-auto md:flex">
          {children}
        </div>
        <div className="flex items-center justify-center gap-4 shrink-0">
          {user ? (
            <Menu as="div" className="relative">
              <Menu.Button as={Button} negative>
                <Text>{user.name}</Text>
                <Icon
                  name="ChevronDownIcon"
                  className="w-4 h-4 ml-2 transform ui-active:rotate-180"
                />
              </Menu.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items
                  className="absolute right-0 flex flex-col w-64 gap-2 p-2 mr-auto rounded-lg shadow top-4"
                  as={Card}
                >
                  <Button.Link
                    href={user.userType === "OWNER" ? "/owner" : "/dashboard"}
                    className="justify-center"
                    negative
                  >
                    <Icon name="ChartBarIcon" className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button.Link>
                  <hr />
                  <Button onClick={() => signOut()} className="justify-center">
                    <Icon
                      name="ArrowLeftOnRectangleIcon"
                      className="w-4 h-4 mr-2"
                    />
                    Logout
                  </Button>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <Button onClick={() => signIn()}>Login</Button>
          )}
        </div>
      </div>
    </div>
  )
}
export default Header
