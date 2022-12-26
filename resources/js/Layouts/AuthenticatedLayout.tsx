import React , { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

type LayoutProps = {
    auth : Object,
    header? : string,
    children? : Function[]
    title: string,
    breadcrumbTitle: string,
}

export default function Authenticated({ auth, children, title, breadcrumbTitle }: LayoutProps) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    return (
        <>
            <Sidebar auth={auth} />
            <main auth={auth} className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
                <Navbar title={title} breadcrumbTitle={breadcrumbTitle} />
                {children}
            </main>
        </>
    );
}
