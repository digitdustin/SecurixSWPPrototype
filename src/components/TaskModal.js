import React from 'react'
import { Modal } from 'carbon-components-react'
import Task1 from '../assets/img/task1.png'

const tasks = [
    {
        number: 0,
        title: 'Start'
    },
    {
        number: 1,
        title: 'Contact Support',
        description: 'Uh Oh! You tried to submit a form to obtain local administrator rights but it seems your access is restricted. Locate the help desk phone number and call it to complete this task.'
    },
]

function TaskModal() {
    return (
        <Modal
            open
            modalHeading={`Task Number ${tasks[1].number}`}
            modalLabel="Securix SWP Prototype"
            primaryButtonText={`Begin Task ${tasks[1].number}`}
            secondaryButtonText="Quit Simulation"
        >
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <img src={Task1} width={300} height={300}/>
            <p style={{marginBottom: '1rem', fontSize: 18}}>{tasks[1].description}</p>
            </div>
        </Modal>
    )
}

export default TaskModal
