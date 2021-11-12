import React from 'react'
import { 
    Pagination, 
    DataTable,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
    TableSelectAll,
    TableSelectRow,
    TableToolbar,
    TableToolbarAction,
    TableToolbarSearch,
    TableToolbarMenu,
    TableToolbarContent,
    TableContainer,
    Button,
    TableBatchAction,
    TableBatchActions
} from 'carbon-components-react'
import { 
    Download20,
    Bookmark20,
    View20
} from '@carbon/icons-react';

const headers = [
    {
        key: 'name',
        header: 'Name'
    },
    {
        key: 'filesize',
        header: 'File Size'
    },
    {
        key: 'submittedby',
        header: 'Submitted By'
    },
    {
        key: 'status',
        header: 'Status'
    },
]

const rows = [
    {
        id: 1,
        name: 'Export Control Form',
        filesize: '24 MB',
        submittedby: 'Anthony Bower',
        status: 'Active'
    },
    {
        id: 2,
        name: 'Non Disclosure Agreement',
        filesize: '12 MB',
        submittedby: 'Allison Denham',
        status: 'Active'
    },
    {
        id: 3,
        name: 'Help Request Form',
        filesize: '20 KB',
        submittedby: 'Dustin Karp',
        status: 'Active'
    },
]

function FormHolder() {
    return (
        <div style={{width: '100%'}}>
        <DataTable rows={rows} headers={headers} isSortable>
            {({ 
                rows, 
                headers, 
                getTableProps, 
                getHeaderProps, 
                getRowProps, 
                getSelectionProps, 
                onInputChange, 
                getBatchActionProps, 
                selectedRows,
            }) => (
                <TableContainer>
                <TableToolbar>
                <TableBatchActions {...getBatchActionProps()}>
                    <TableBatchAction
                    tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                    renderIcon={View20}
                    onClick={console.log(selectedRows)}>
                    View
                    </TableBatchAction>
                    <TableBatchAction
                    tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                    renderIcon={Bookmark20}
                    onClick={console.log(selectedRows)}>
                    Bookmark
                    </TableBatchAction>
                    <TableBatchAction
                    tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                    renderIcon={Download20}
                    onClick={console.log(selectedRows)}>
                    Download
                    </TableBatchAction>
                </TableBatchActions>
                  <TableToolbarContent>
                    {/* pass in `onInputChange` change here to make filtering work */}
                    <TableToolbarSearch onChange={onInputChange} />
                    <TableToolbarMenu>
                      <TableToolbarAction onClick={console.log('Action 1 Click')}>
                        Action 1
                      </TableToolbarAction>
                      <TableToolbarAction onClick={console.log('Action 2 Click')}>
                        Action 2
                      </TableToolbarAction>
                      <TableToolbarAction onClick={console.log('Action 3 Click')}>
                        Action 3
                      </TableToolbarAction>
                    </TableToolbarMenu>
                    <Button onClick={console.log('Button click')}>New Form Request</Button>
                  </TableToolbarContent>
                </TableToolbar>
                <Table {...getTableProps()}>
                <TableHead>
                    <TableRow>
                    <TableSelectAll {...getSelectionProps()} />
                    {headers.map((header) => (
                        <TableHeader {...getHeaderProps({ header })}>
                        {header.header}
                        </TableHeader>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow {...getRowProps({ row })}>
                        <TableSelectRow {...getSelectionProps({ row })} />
                        {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
                </TableContainer>
            )}
        </DataTable>
        </div>
    )
}

export default FormHolder
