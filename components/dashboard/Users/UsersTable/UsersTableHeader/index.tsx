"use client"
import { Text } from "@design-system/atoms"
import { TableHead, TableHeaderCell } from "@tremor/react"

export type TableHeaderProps = {
  categories: string[]
}

export default function UsersTableHeader({ categories }: TableHeaderProps) {
  return (
    <TableHead>
      <>
        {categories.map((category, i) => (
          <TableHeaderCell key={i} textAlignment="text-center">
            <Text className="capitalize">{category}</Text>
          </TableHeaderCell>
        ))}
      </>
      <TableHeaderCell>
        <Text>Actions</Text>
      </TableHeaderCell>
    </TableHead>
  )
}
