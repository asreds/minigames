import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
            <Sidebar auth={auth} />
            <main auth={auth} className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
                <Navbar />
                {children}
            </main>
        </>
    );
}
