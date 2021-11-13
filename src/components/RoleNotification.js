import React, { useContext, useRef } from 'react'
import {RoleContext, roles} from '../contexts/role-context'
import { MisuseOutline24 } from '@carbon/icons-react';

function RoleNotification() {
    const {role, toggleRole} = useContext(RoleContext);
    const _notif = useRef(null)

    return (
        <div style={{
            position: 'fixed',
            width: '95vw',
            position: 'absolute',
            bottom: '1vw',
            left: '2.5vw',
            height: 50,
            backgroundColor: '#0D61FE',
            display: 'flex',
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 9999,
        }} ref={_notif}>
            <p style={{color: 'white'}}>Currently in User View. | <a style={{color: 'white', cursor: 'pointer'}} onClick={toggleRole}><u><b>Switch Back to Admin View</b></u></a></p>
            <MisuseOutline24 style={{cursor: 'pointer'}} color='white' onClick={() => {_notif.current.style.display = 'none'}}/>
        </div>
    )
}

export default RoleNotification
