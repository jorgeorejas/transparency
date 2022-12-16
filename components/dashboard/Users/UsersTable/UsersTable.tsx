"use client"
import { Skeleton } from "@design-system/atoms"
import { User } from "@prisma/client"
import { Table, TableBody, TableCell, TableRow } from "@tremor/react"
import UsersTableBody from "./UsersTableBody"
import UsersTableHeader from "./UsersTableHeader"
export type TableProps = {
  categories: (keyof User)[]
  data: User[]
}

export default function UsersTable({ categories, data }: TableProps) {
  return (
    <Table>
      <UsersTableHeader categories={categories} />
      <TableBody>
        {data.length > 0 ? (
          <UsersTableBody categories={categories} data={data} />
        ) : (
          <>
            <TableRow>
              <TableCell>
                <Skeleton />
              </TableCell>
              <TableCell>
                <Skeleton />
              </TableCell>
              <TableCell>
                <Skeleton />
              </TableCell>
              <TableCell>
                <Skeleton />
              </TableCell>
              <TableCell>
                <Skeleton />
              </TableCell>
            </TableRow>
          </>
        )}
      </TableBody>
    </Table>
  )
}
