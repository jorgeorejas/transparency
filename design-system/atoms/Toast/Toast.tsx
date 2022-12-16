"use client"

import * as React from "react"
import hotToast, { Toaster as HotToaster } from "react-hot-toast"

import cn from "classnames"
import { Icon } from "@design-system/atoms"
import { IconProps } from "@design-system/atoms/Icon/Icon"

export const Toaster = HotToaster

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean
}

export function Toast({ visible, className, ...props }: ToastProps) {
  return (
    <div
      className={cn(
        "min-h-16 mb-2 flex w-[350px] flex-col items-start gap-1 rounded-md bg-brand-white px-6 py-4 shadow-lg",
        visible && "animate-in slide-in-from-bottom-5",
        className
      )}
      {...props}
    />
  )
}

Toast.Icon = function ToastIcon({ name, className, ...props }: IconProps) {
  return (
    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-slate-100">
      <Icon name={name} className={cn("w-10 h-10", className)} {...props} />
    </div>
  )
}

interface ToastTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

Toast.Title = function ToastTitle({ className, ...props }: ToastTitleProps) {
  return <p className={cn("text-sm font-medium", className)} {...props} />
}

interface ToastDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

Toast.Description = function ToastDescription({
  className,
  ...props
}: ToastDescriptionProps) {
  return <p className={cn("text-sm opacity-80", className)} {...props} />
}

interface ToastOpts {
  title?: string
  message: string
  type?: "success" | "error" | "default"
  duration?: number
}

export function ToastMessage(opts: ToastOpts) {
  const { title, message, type = "default", duration = 3000 } = opts

  return hotToast.custom(
    ({ visible }) => (
      <Toast
        visible={visible}
        className={cn({
          "text-white bg-red-600": type === "error",
          "bg-black text-white": type === "success",
        })}
      >
        <Toast.Title>{title}</Toast.Title>
        {message && <Toast.Description>{message}</Toast.Description>}
      </Toast>
    ),
    { duration }
  )
}
