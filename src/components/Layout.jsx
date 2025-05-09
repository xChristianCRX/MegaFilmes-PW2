import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Header />
            <main className="flex-grow p-6">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
