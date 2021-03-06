import React from 'react';

export const roles = {
    user: 0,
    admin: 1
}

export const RoleContext = React.createContext({
    role: Number( localStorage.getItem("role") ),
    toggleRole: () => {},
});