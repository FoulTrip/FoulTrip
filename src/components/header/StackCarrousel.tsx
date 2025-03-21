"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import svg1 from "@/assets/stacks/React.svg";
import svg2 from "@/assets/stacks/docker.svg";
import svg3 from "@/assets/stacks/javascript.svg";
import svg4 from "@/assets/stacks/kubernetes.svg";
import svg5 from "@/assets/stacks/mongodb.svg";
import svg6 from "@/assets/stacks/nestjs.svg";
import svg7 from "@/assets/stacks/nextjs_icon_dark.svg";
import svg8 from "@/assets/stacks/nodejs.svg";
import svg9 from "@/assets/stacks/python.svg";
import svg10 from "@/assets/stacks/solidity.svg";
import svg11 from "@/assets/stacks/typescript.svg";

const logos = [
    svg1, svg2, svg3, svg4, svg5, svg6, svg7, svg8, svg9, svg10, svg11,
];

const LogoCarousel: React.FC = () => {
    return (
        <div className="overflow-hidden w-full">
            <div className="grid place-content-center mb-5">
                <p className="font-bold text-gray-600">Experience With</p>
            </div>
            <div className="flex">
                {logos.map((logo, index) => (
                    <div key={index} className="flex-shrink-0 w-20 flex justify-center">
                        <Image src={logo} alt={`Logo ${index + 1}`} className="h-10 w-auto drop-shadow-md" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoCarousel;

