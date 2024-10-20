"use client";

import Link from "next/link";
import { useEffect } from "react";

const BrandsList = (props: {
    brands: Array<{
        _id: string,
        name: string,
        img: string,
        href: string,
    }>
}) => {

    useEffect(() => {
        // const scrollers = document.querySelectorAll(".scroller");

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            const scrollers: NodeListOf<Element> = document.querySelectorAll(".scroller");

            scrollers.forEach((scroller: Element) => {
                (scroller as HTMLElement).setAttribute("data-animated", "true");

                const scrollerInner: HTMLElement | null = scroller.querySelector(".scroller__inner") as HTMLElement;
                if (scrollerInner) {
                    const scrollerContent: HTMLElement[] = Array.from(scrollerInner.children) as HTMLElement[];

                    scrollerContent.forEach((item) => {
                        const duplicatedItem: HTMLElement = item.cloneNode(true) as HTMLElement;
                        duplicatedItem.setAttribute("aria-hidden", "true");
                        scrollerInner.appendChild(duplicatedItem);
                    });
                } else {
                    console.error("scrollerInner not found for:", scroller);
                }
            });
        }

    }, []);


    return (
        <div className="bg-gray-900 pt-5 pb-5 w-full flex flex-col items-center overflow-hidden">
            <h1 className="text-white text-3xl mb-4">We have helped scale 1200+ D2C Brands and Enablers like</h1>

            <div className="scroller" data-direction="left" data-speed="fast">
                <div className="scroller__inner flex gap-4 p-4 ">
                    {props.brands.slice(0, props.brands.length).map((res) =>
                        <Link key={res._id} href={res.href}>
                            <div className="rounded-lg px-4 bg-white"><img className="w-24 h-24 object-contain rounded-lg m-2" src={res.img} alt="" /></div>
                        </Link>
                    )}
                </div>
            </div>
            <div className="scroller" data-direction="right" data-speed="fast">
                <div className="scroller__inner flex gap-4 p-4">
                    {props.brands.slice(props.brands.length/2).map((res) =>
                        <Link key={res._id} href={res.href}>
                            <div  className="rounded-lg px-4 bg-white"><img className="w-24 h-24 object-contain rounded-lg m-2" src={res.img} alt="" /></div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BrandsList;
