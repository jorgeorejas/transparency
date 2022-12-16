"use client"
import { Text } from "@design-system/atoms"
import { Button } from "@design-system/molecules"
import { TableCell, TableRow } from "@tremor/react"
import { User } from "next-auth"
export type TableHeaderProps = {
  categories: string[]
  data: User[]
}

export default function UsersTableBody({ categories, data }: TableHeaderProps) {
  return (
    <>
      {data.map((user, i) => (
        <TableRow key={i}>
          <>
            {categories.map((category, i) => (
              <TableCell key={i}>
                <Text className="">{user[category]}</Text>
              </TableCell>
            ))}
          </>

          <div className="flex items-center justify-center h-full gap-2 py-2">
            <Button.Link href="/owner/users/editor">
              <Text>Edit</Text>
            </Button.Link>
          </div>
        </TableRow>
      ))}
    </>
  )
}
