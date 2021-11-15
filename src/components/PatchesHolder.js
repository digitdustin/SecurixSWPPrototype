import React, { useEffect, useState } from 'react'
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
import { patches } from './PatchesData';
import { useContext } from "react";
import {RoleContext, roles} from '../contexts/role-context'

const headers = [
    {
        key: 'name',
        header: 'Name'
    },
    {
        key: 'company',
        header: 'Company'
    },
    {
        key: 'patch',
        header: 'Patch'
    },
    {
        key: 'version',
        header: 'Version'
    },
    {
        key: 'download',
        header: 'Download'
    },
]

function PatchesHolder(props) {
    const [currentPatches, setCurrentPatches] = useState(props.rows.slice(0, 8))
    const {role, toggleRole} = useContext(RoleContext);

    useEffect(() => {
        setCurrentPatches(props.rows.slice(0,8))
    }, [props.rows])

    return (
        <div style={{width: '100%'}}>
        <DataTable rows={currentPatches} headers={headers}>
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
                    onClick={() => console.log(selectedRows)}>
                    View
                    </TableBatchAction>
                    <TableBatchAction
                    tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                    renderIcon={Bookmark20}
                    onClick={() => console.log(selectedRows)}>
                    Bookmark
                    </TableBatchAction>
                    <TableBatchAction
                    tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                    renderIcon={Download20}
                    onClick={() => console.log(selectedRows)}>
                    Download
                    </TableBatchAction>
                </TableBatchActions>
                  <TableToolbarContent>
                    {/* pass in `onInputChange` change here to make filtering work */}
                    <TableToolbarSearch onChange={onInputChange} />
                    <TableToolbarMenu>
                      <TableToolbarAction>
                        Action 1
                      </TableToolbarAction>
                      <TableToolbarAction>
                        Action 2
                      </TableToolbarAction>
                      <TableToolbarAction>
                        Action 3
                      </TableToolbarAction>
                    </TableToolbarMenu>
                    {role === roles.admin && <Button onClick={console.log('Button click')}>Add New Patch</Button>}
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
        <Pagination 
            pageSizes={[8, 16, 24]} 
            pageSizeInputDisabled 
            totalItems={props.rows.length}
            pageInputDisabled
            onChange={(e) => {setCurrentPatches(props.rows.slice((e.page - 1) * 8, e.page * 8))}}
        />
        </div>
    )
}

export default PatchesHolder
