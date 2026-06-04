
import {useReactTable, getCoreRowModel, flexRender} from '@tanstack/react-table'
import { useMemo }  from 'react'
import { useUsers } from '../Services/UsersService';

const UsersList = () => {

    const { data, isLoading, isError, error } = useUsers();

    // Memoize data to prevent unnecessary re-renders
    const users = useMemo(() => data ?? [], [data]);
       
        
        //2. Define table columns
    const columns = useMemo(
        () => [
        { header: 'ID',    accessorKey: 'id' },
        { header: 'Name',  accessorKey: 'name' },
        { header: 'Email', accessorKey: 'email' },
        { header: 'Role',  accessorKey: 'role' },
        ],
        []
    );

    
    // Create table instance
    const table = useReactTable({
        data: users,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    
    
    if (isLoading) {
        return <div className="p-4">Loading users...</div>;
    }
    if (isError) {
        return <div className="p-4 text-red-500">Error: {error.message}</div>;
    }



    return (
        <div className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th
                      key={header.id}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    )
}

export default UsersList;