'use client';
import React, { useState } from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight
                className="top-20 left-0 md:left-60 md:-top-20"
                fill="blue"
            />
            <div className="p-4 relative z-10 text-center">
                <h1 className="mt-20 md:mt-48 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the art of music</h1>
                <p className="mt-10 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illum at similique eveniet, repellat repellendus iusto! Consectetur aspernatur accusamus, sapiente quia porro impedit perferendis, totam atque error asperiores, veniam veritatis.</p>
                <div className="mt-10">
                    <Link href={"/courses"} >
                        <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">Explore courses</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
