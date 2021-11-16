import React, { useContext } from 'react'
import { ComposedModal, ModalBody, ModalFooter, ModalHeader } from 'carbon-components-react'
import Task1 from '../assets/img/Task1.png'
import Task2 from '../assets/img/Task2.png'
import Task3 from '../assets/img/Task3.png'
import Task4 from '../assets/img/Task4.png'
import Task5 from '../assets/img/Task5.png'
import Task6 from '../assets/img/Task6.png'
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
        description: 'Aw shucks! The help desk did not answer your call. As a user, find and submit a "Help Request Form" to the help desk. '
    },
    {
        number: 3,
        title:'View Help Request Forms',
        description: 'Your help request has been sent to an administrator. Switch to admin view and resolve the help form.'
    },
    {
        number: 4,
        title:'Find and Download a Patch for Adobe Acrobat',
        description: 'A new version of version of Adobe Acrobat has come out. Yours is now susceptible to viruses. Find and download the latest Adobe Acrobat patch.'
    },
    {
        number: 5,
        title:'Upload a new Google Chrome Patch',
        description: 'The company\'s version of Google Chrome is out of date. Upload the new version of Google Chrome.'
    },
    {
        number: 6,
        title:'Find a How-To Describing Adding a New User',
        description: 'It\'s Byron\'s first day on the job. Find the guide on how to add a new user.'
    }
]

const images = [
    Task1,
    Task2,
    Task3,
    Task4,
    Task5,
    Task6
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
