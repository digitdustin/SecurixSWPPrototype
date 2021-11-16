import React from 'react';

export const HelpContext = React.createContext({
    helpOpen: false,
    setHelpOpen: () => {},
    submitHelpRequest: () => {},
    getHelpRequests: () => {}
});