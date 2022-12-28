// @ts-nocheck
import React from "react";
import { Link } from "@inertiajs/inertia-react";
const Sidebar = ({ auth }) => {
    return (
        <aside
            className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark bg-white"
            id="sidenav-main"
        >
            <div className="sidenav-header">
                <i
                    className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                    aria-hidden="true"
                    id="iconSidenav"
                />
                <a
                    className="navbar-brand m-0"
                    href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
                    target="_blank"
                >
                    <img
                        src="/assets/img/logo-ct.png"
                        className="navbar-brand-img h-100"
                        alt="main_logo"
                    />
                    <span className="ms-1 font-weight-bold text-white">
                        Minigames Dashboard
                    </span>
                </a>
            </div>
            <hr className="horizontal light mt-0 mb-2" />
            <div
                className="collapse navbar-collapse  w-auto "
                id="sidenav-collapse-main"
            >
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {/* @ts-ignore */}
                        <a
                            className={`nav-link text-white ${
                                route().current("dashboard")
                                    ? "active bg-gradient-primary"
                                    : ""
                            }`}
                            href="../pages/dashboard.html"
                        >
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">
                                    dashboard
                                </i>
                            </div>
                            <span className="nav-link-text ms-1">
                                Dashboard
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        {/* @ts-ignore */}
                        <Link
                            className={`nav-link text-white ${
                                route().current("dashboard.tts")
                                    ? "active bg-gradient-primary"
                                    : ""
                            }`}
                            href={route("dashboard.tts")}
                        >
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">
                                    table_view
                                </i>
                            </div>
                            <span className="nav-link-text ms-1">TTS</span>
                        </Link>
                    </li>
                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                            Account pages
                        </h6>
                    </li>
                    <li className="nav-item">
                        {/* @ts-ignore */}
                        <Link
                            className={`nav-link text-white ${
                                route().current("dashboard.profile.edit")
                                    ? "active bg-gradient-primary"
                                    : ""
                            }`}
                            href={route("dashboard.profile.edit")}
                        >
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">
                                    person
                                </i>
                            </div>
                            <span className="nav-link-text ms-1">Profile</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        {/* @ts-ignore */}
                        <Link
                            className=" btn btn-warning btn-logout nav-link text-white"
                            as="button" type="button"
                            href={route("logout")}
                            method="post"
                        >
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">
                                    login
                                </i>
                            </div>
                            <span className="nav-link-text ms-1">Sign Out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};
export default Sidebar;
