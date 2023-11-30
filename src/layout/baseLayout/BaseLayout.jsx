import React from 'react';
import Header from 'components/header'
export default function BaseLayout({ children }) {
    return (
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    )
}