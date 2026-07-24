import React from "react";
import { Timeline } from "./timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "2026 (Present)",
            content: (
                <div>
                    <p className="text-slate-800 dark:text-slate-200 text-xs md:text-sm font-normal mb-8 leading-relaxed">
                        Broadening my IT expertise beyond software by working as a <strong>Networking Intern</strong> at the <strong>Nepal Electricity Authority (NEA)</strong>. Gaining hands-on experience in enterprise-scale network infrastructure, system administration, and large-scale troubleshooting.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg h-36 md:h-44 lg:h-52 overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm group">
                            <img 
                                src="/DSC_9687-Enhanced-NR.jpg.jpeg" 
                                alt="Sushil Nemkul NEA Networking" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="rounded-lg h-36 md:h-44 lg:h-52 overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm group">
                            <img 
                                src="/2025_12_20_12_29_07_IMG_4327.jpg.jpeg" 
                                alt="NEA System Admin & Troubleshooting" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2025",
            content: (
                <div>
                    <p className="text-slate-800 dark:text-slate-200 text-xs md:text-sm font-normal mb-8 leading-relaxed">
                        Taking on major leadership roles and diving deep into Artificial Intelligence. Organized and led <strong>DAV Codefest 2025</strong>, a massive 72-hour hackathon with 150+ participants. Concurrently developed a <strong>Bird Species Identification System</strong> using CNNs and TensorFlow.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg h-36 md:h-44 lg:h-52 overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm group">
                            <img 
                                src="/cod1.jpg" 
                                alt="DAV Codefest Event" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="rounded-lg h-36 md:h-44 lg:h-52 overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm group">
                            <img 
                                src="/cod2.jpg" 
                                alt="DAV Codefest Participants" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    <p className="text-slate-800 dark:text-slate-200 text-xs md:text-sm font-normal mb-8 leading-relaxed">
                        Expanded into modern frontend frameworks and full-stack development. Built <strong>Fishtopia</strong>, an e-commerce platform using React.js and Flask with Khalti API integration. Explored mobile development by building a real-time Android <strong>Weather App</strong> using Java/Kotlin.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg h-36 md:h-44 lg:h-52 overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm group">
                            <img 
                                src="/f1.png" 
                                alt="Fishtopia E-Commerce Platform" 
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="rounded-lg h-36 md:h-44 lg:h-52 overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm group">
                            <img 
                                src="/weather1.jpg" 
                                alt="Android Weather App" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2022-2023",
            content: (
                <div>
                    <p className="text-slate-800 dark:text-slate-200 text-xs md:text-sm font-normal mb-8 leading-relaxed">
                        Began my BCA degree at DAV College. Started freelance graphic design, developing a strong eye for UI/UX. Transitioned into web development, mastering HTML, CSS, PHP, and MySQL by building my first major platform, <strong>Adopt a Buddy</strong>.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg h-36 md:h-44 lg:h-52 overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm group">
                            <img 
                                src="/ad3.jpg" 
                                alt="Adopt a Buddy Platform" 
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="rounded-lg h-36 md:h-44 lg:h-52 overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm group">
                            <img 
                                src="/ad1.jpg" 
                                alt="Adopt a Buddy UI" 
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
