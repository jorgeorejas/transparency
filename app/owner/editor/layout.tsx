interface EditorProps {
  children?: React.ReactNode
}

export default function EditorLayout({ children }: EditorProps) {
  return (
    <div className="container grid items-start gap-10 py-8 mx-auto">
      {children}
    </div>
  )
}
