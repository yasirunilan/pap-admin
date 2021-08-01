import React from 'react';
import PapNavbar from "../components/PapNavbar";
import PapDrawer from "../components/PapDrawer";

const HomeScreen = () => {
    return (
        <div>
            <PapNavbar />
            <PapDrawer />
            <h1>Home Screen</h1>
        </div>
    )
}

export default HomeScreen;
