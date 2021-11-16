import { useContext, useState } from "react";
import {Modal, Select, SelectItem, TextInput} from 'carbon-components-react'
import { TaskContext } from "../contexts/task-context";
import { HelpContext } from "../contexts/help-context";
import { RoleContext, roles } from "../contexts/role-context";

const HelpModal = () => {
    const {changeTask} = useContext(TaskContext);
    const {helpOpen, setHelpOpen, submitHelpRequest} = useContext(HelpContext);
    const {role} = useContext(RoleContext);
    const [username, setUsername] = useState("");
    const [contact, setContact] = useState("");
    const [category, setCategory] = useState("");
    const [details, setDetails] = useState("");

    const handleSubmit = () => {
        if (role === roles.admin) {
            alert("Switch to user mode to submit a help request.")
        } else if (username === "" || category === "" || details === "") {
            alert("Must complete all fields.")
        } else if (username.includes(":") || username.includes("|")) {
            alert("Username cannot contain the special characters \':\' or \'\|\'.");
        } else if (contact.includes(":") || contact.includes("|")) {
            alert("Email cannot contain the special characters \':\' or \'\|\'.");
        } else if (details.includes("|")) {
            alert("Details cannot contain special character \'|\'.");
        } else {
            submitHelpRequest(username, contact, category, Date.now(), details);
            setHelpOpen(false);
            changeTask(2 * 2);
        }
    }

    return (
        <Modal
            open={helpOpen}
            primaryButtonText='Submit Help Request'
            secondaryButtonText='Cancel'
            onRequestSubmit={handleSubmit}
            onRequestClose={() => setHelpOpen(false)}
        >
            <TextInput
                labelText="Enter Username"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />

            <TextInput
                labelText="Enter Email"
                placeholder="Email"
                value={contact}
                onChange={e => setContact(e.target.value)}
            />

            <Select
                labelText="Select Category for Help Request"
                placeholder="Category"
                value={category}
                onChange={e => setCategory(e.target.value)}
            >
                <SelectItem
                    value="1"
                    text="1"
                />
                <SelectItem
                    value="2"
                    text="2"
                />
                <SelectItem
                    value="3"
                    text="3"
                />
            </Select>

            <TextInput
                labelText="Enter the Details of your Request"
                placeholder="Details"
                value={details}
                onChange={e => setDetails(e.target.value)}
            />
        </Modal>
    );
}

export default HelpModal;