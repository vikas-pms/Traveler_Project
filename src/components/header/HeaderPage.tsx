"use client";
import Link from 'next/link';
import React from 'react';

function HeaderPage() {

    return (
        <>
            <div className="pb-2 pt-2 ">
                <div className="navbar bg-black-100">
                    <div className="navbar-start">
                        <div className="dropdown lg:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><a>Why Join</a></li>
                                <li><a>Faculty</a></li>
                                <li><a>Curriculum</a></li>
                                <li><a>Who Should Join</a></li>
                                <li><a>Fees</a></li>
                                <li><Link href={"/contact-us"}>
                                    Contact Us
                                </Link></li>
                                <li><Link href={"/faq"}>
                                    FAQs
                                </Link></li>
                                <li><a>Wall of Love</a></li>
                            </ul>
                        </div>
                        <div className="nav-rht flex items-center" style={{ height: "50px" }}>
                            <Link href={"/"}>
                                <img style={{ height: "50px" }} src="https://seeksolution.in/static/media/favicon.f61d9487b8e127a74f59.png" alt="Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="nav-mdl flex flex-wrap md:gap-5 md:flex-row">
                            <li><a className="rounded-full bg-slate-900 px-3 py-3" href="">Why Join</a></li>
                            <li><a className="rounded-full bg-slate-900 px-3 py-3" href="">Faculty</a></li>
                            <li><a className="rounded-full bg-slate-900 px-3 py-3" href="">Curriculum</a></li>
                            <li><a className="rounded-full bg-slate-900 px-3 py-3" href="">Who Should Join</a></li>
                            <li><a className="rounded-full bg-slate-900 px-3 py-3" href="">Fees</a></li>
                            <li >
                                <Link className="rounded-full bg-slate-900 px-3 py-3" href={"/contact-us"}>
                                    Contact Us
                                </Link>
                            </li>
                            <li >
                                <Link className="rounded-full bg-slate-900 px-3 py-3" href={"/faq"}>
                                    FAQs
                                </Link>
                            </li>
                            <li><a className="rounded-full bg-slate-900 px-3 py-3" href="">Wall of Love</a></li>
                        </ul>
                    </div>

                    <div className="navbar-end">
                        <div className="nav-lft mt-4 md:mt-0">
                            <button className="px-8 py-2 rounded-lg bg-orange-400">Apply Now</button>
                        </div>
                    </div>
                </div>

                <hr />
            </div>
        </>
    );
}

export default HeaderPage;
