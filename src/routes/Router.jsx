import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./Layout/Footer/footer";
import Main from "./Layout/Main/main";
import Logement from "./Pages/Logement/Logement";
import About from "./Pages/About/About";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";


const HeaderFooterLayout = () => {
    return <>
        <Header />
        <Main>
            <Outlet />
        </Main>
        <Footer />
    </>
};

export const router = createBrowserRouter([
    {
        element: <HeaderFooterLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/logement/:id",
                element: <Logement />
            },
            {
                path: "/About",
                element: <About />
            }
        ]
    },
])