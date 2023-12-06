import React from 'react';
import Header from 'components/header'
import Footer from 'components/footer'
export default function BaseLayout({ children }) {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    )
}