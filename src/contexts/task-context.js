import React from 'react';

export const TaskContext = React.createContext({
    currentTask: -1,
    changeTask: () => {}
});