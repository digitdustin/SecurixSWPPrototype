import React, { useState, useEffect } from 'react'
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
    TableBatchActions,
} from 'carbon-components-react'
import { 
    Download20,
    Bookmark20,
    View20
} from '@carbon/icons-react';

const formHeaders = [
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

const formRows = [
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
        status: 'Active',
    },
    {
        id: 4,
        name: 'IT LAN Admin Rights Request',
        filesize: '10 KB',
        submittedby: 'ADMIN',
        status: 'Active'
    },
    {
        id: 5,
        name: 'Holiday Secret Santa',
        filesize: '4 MB',
        submittedby: 'ADMIN',
        status: 'Inactive'
    },
    {
        id: 6,
        name: 'SWIS User Rights Agreement',
        filesize: '220 KB',
        submittedby: 'ADMIN',
        status: 'Active'
    },
    {
        id: 7,
        name: 'Privacy Policy Reservation',
        filesize: '415 KB',
        submittedby: 'ADMIN',
        status: 'Inctive'
    },
    {
        id: 8,
        name: 'New Form Request (Admin Only)',
        filesize: '3 MB',
        submittedby: 'ADMIN',
        status: 'Inctive'
    },
    {
        id: 9,
        name: 'Test Add Application',
        filesize: '2 MB',
        submittedby: 'Anthony Bower',
        status: 'Active'
    },
    {
        id: 10,
        name: 'Department Change Request Form',
        filesize: '109 KB',
        submittedby: 'Allison Denham',
        status: 'Active'
    },
    {
        id: 11,
        name: 'Open Security Acknoledgement (1)',
        filesize: '120 KB',
        submittedby: 'Dustin Karp',
        status: 'Active'
    },
    {
        id: 12,
        name: 'Open Security Acknoledgement (2)',
        filesize: '10 KB',
        submittedby: 'ADMIN',
        status: 'Active'
    },
    {
        id: 13,
        name: 'UPDATED Rights Reserved',
        filesize: '4 MB',
        submittedby: 'ADMIN',
        status: 'Inactive'
    },
    {
        id: 14,
        name: 'Internal Invention Acknowledgement',
        filesize: '290 KB',
        submittedby: 'ADMIN',
        status: 'Active'
    },
    {
        id: 15,
        name: 'Privacy Policy Reservation (2)',
        filesize: '415 KB',
        submittedby: 'ADMIN',
        status: 'Inctive'
    },
    {
        id: 16,
        name: 'Job Referral Application',
        filesize: '98 KB',
        submittedby: 'ADMIN',
        status: 'Inctive'
    },
    {
        id: 17,
        name: 'Internship Task Request Form',
        filesize: '30 KB',
        submittedby: 'ADMIN',
        status: 'Inctive'
    },
    {
        id: 18,
        name: 'Test Add Application',
        filesize: '202 KB',
        submittedby: 'Anthony Bower',
        status: 'Active'
    },
    {
        id: 19,
        name: 'Department Change Request Form',
        filesize: '11 MB',
        submittedby: 'Allison Denham',
        status: 'Active'
    },
    {
        id: 20,
        name: '1067 WRU Form',
        filesize: '120 KB',
        submittedby: 'Dustin Karp',
        status: 'Active'
    },
    {
        id: 21,
        name: 'Direct Deposit',
        filesize: '10 KB',
        submittedby: 'ADMIN',
        status: 'Active'
    },
    {
        id: 22,
        name: '10.2.3.32 Documentation Change Request',
        filesize: '4 MB',
        submittedby: 'ADMIN',
        status: 'Inactive'
    },
    {
        id: 23,
        name: 'Returns Approval Form',
        filesize: '290 KB',
        submittedby: 'ADMIN',
        status: 'Active'
    },
    {
        id: 24,
        name: 'Dummy Form :)',
        filesize: '415 KB',
        submittedby: 'ADMIN',
        status: 'Inctive'
    },
    {
        id: 16,
        name: 'Job Referral Application',
        filesize: '3 MB',
        submittedby: 'ADMIN',
        status: 'Inctive'
    },
]

function FormHolder(props) {
    const [currentForms, setCurrentForms] = useState(props.rows.slice(0, 8))

    useEffect(() => {
        setCurrentForms(props.rows.slice(0, 8))
    }, [props.rows])

    return (
        <div style={{width: '100%'}}>
        <DataTable rows={currentForms} headers={props.headers}>
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
                    row.id == 3 ? 
                    <TableRow {...getRowProps({ row })} style={{cursor: 'pointer'}} onClick={() => {console.log('test')}}>
                        <TableSelectRow {...getSelectionProps({ row })} />
                        {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                    </TableRow>
                    :
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
        <Pagination 
            pageSizes={[8, 16, 24]} 
            pageSizeInputDisabled 
            totalItems={props.rows.length}
            pageInputDisabled
            onChange={(e) => {setCurrentForms(props.rows.slice((e.page - 1) * 8, e.page * 8))}}
        />
        </div>
    )
}

FormHolder.defaultProps = {
    headers: formHeaders,
    rows: formRows
}

export default FormHolder
