import React, { useContext, useState } from 'react'
import { ComposedModal, ModalBody, ModalFooter, ModalHeader } from 'carbon-components-react'
import Task1 from '../assets/img/task1.png'
import { TaskContext } from '../contexts/task-context';

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
    const {task, changeTask} = useContext(TaskContext);

    return (
        <ComposedModal
            open={task % 2 === 1}
            preventCloseOnClickOutside
        >
            <ModalHeader label="Securix SWP Prototype">
                <h1>{`Task Number ${task}`}</h1>
            </ModalHeader>

            <ModalBody>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                <img src={Task1} width={300} height={300}/>
                <p style={{marginBottom: '1rem', fontSize: 18}}>{tasks[Math.ceil(task/2)].description}</p>
                </div>
            </ModalBody>

            <ModalFooter 
                primaryButtonText={`Start Task ${task}`}
                onRequestSubmit={ () => changeTask() }
            />
        </ComposedModal>
    )
}

export default TaskModal
