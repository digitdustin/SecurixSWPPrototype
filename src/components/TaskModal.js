import React, { useContext } from 'react'
import { ComposedModal, ModalBody, ModalFooter, ModalHeader } from 'carbon-components-react'
import Task1 from '../assets/img/task1.png'
import { TaskContext } from '../contexts/task-context';

const tasks = [
    {
        number: 1,
        title: 'Contact Support',
        description: 'Uh Oh! You tried to submit a form to obtain local administrator rights but it seems your access is restricted. Locate the help desk phone number and call it to complete this task.'
    },
    {
        number: 2,
        title: 'Submit Help Request',
        description: ''
    },
    {
        number: 3,
        title:'View Help Request Forms',
        description: ''
    },
    {
        number: 4,
        title:'Find and Download a Patch for Adobe Acrobat',
        description: ''
    },
    {
        number: 5,
        title:'Upload a new Patch',
        description: ''
    },
    {
        number: 6,
        title:'Find a How-To Describing Adding a New User',
        description: ''
    }
]

const images = [
    Task1,
    Task1,
    Task1,
    Task1,
    Task1,
    Task1
]

function TaskModal() {
    const {task, changeTask} = useContext(TaskContext);

    const currTask = Math.ceil(task/2);

    return (
        <ComposedModal
            open={task % 2 === 1}
            preventCloseOnClickOutside
        >
            <ModalHeader label="Securix SWP Prototype">
                <h1>{`Task Number ${currTask}`}</h1>
            </ModalHeader>

            <ModalBody>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                <img src={images[currTask - 1]} width={300} height={300}/>
                <p style={{marginBottom: '1rem', fontSize: 18}}>{tasks[currTask - 1].description}</p>
                </div>
            </ModalBody>

            <ModalFooter 
                primaryButtonText={`Start Task ${currTask}`}
                onRequestSubmit={ () => changeTask() }
            />
        </ComposedModal>
    )
}

export default TaskModal
