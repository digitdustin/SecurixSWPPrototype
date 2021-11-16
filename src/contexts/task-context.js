import React from 'react';

export const TaskContext = React.createContext({
    task: 1,
    changeTask: () => {}
});