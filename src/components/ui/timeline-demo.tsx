import React from "react";
import { Timeline } from "./timeline";
import { Image as ImageIcon } from "lucide-react";

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
                        <div className="bg-gray-200 dark:bg-slate-800 rounded-lg h-20 md:h-44 lg:h-60 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700 shadow-sm">
                            <ImageIcon size={32} className="mb-2 opacity-50" />
                            <span className="text-xs text-center px-2">Insert NEA Office Photo</span>
                        </div>
                        <div className="bg-gray-200 dark:bg-slate-800 rounded-lg h-20 md:h-44 lg:h-60 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700 shadow-sm">
                            <ImageIcon size={32} className="mb-2 opacity-50" />
                            <span className="text-xs text-center px-2">Insert Networking Equipment Photo</span>
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
                        <div className="bg-gray-200 dark:bg-slate-800 rounded-lg h-20 md:h-44 lg:h-60 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700 shadow-sm">
                            <ImageIcon size={32} className="mb-2 opacity-50" />
                            <span className="text-xs text-center px-2">Insert Codefest Team Photo</span>
                        </div>
                        <div className="bg-gray-200 dark:bg-slate-800 rounded-lg h-20 md:h-44 lg:h-60 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700 shadow-sm">
                            <ImageIcon size={32} className="mb-2 opacity-50" />
                            <span className="text-xs text-center px-2">Insert CNN Project Screenshot</span>
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
                        <div className="bg-gray-200 dark:bg-slate-800 rounded-lg h-20 md:h-44 lg:h-60 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700 shadow-sm">
                            <ImageIcon size={32} className="mb-2 opacity-50" />
                            <span className="text-xs text-center px-2">Insert Fishtopia Screenshot</span>
                        </div>
                        <div className="bg-gray-200 dark:bg-slate-800 rounded-lg h-20 md:h-44 lg:h-60 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700 shadow-sm">
                            <ImageIcon size={32} className="mb-2 opacity-50" />
                            <span className="text-xs text-center px-2">Insert Android App Screenshot</span>
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
                        <div className="bg-gray-200 dark:bg-slate-800 rounded-lg h-20 md:h-44 lg:h-60 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700 shadow-sm">
                            <ImageIcon size={32} className="mb-2 opacity-50" />
                            <span className="text-xs text-center px-2">Insert Graphic Design Work</span>
                        </div>
                        <div className="bg-gray-200 dark:bg-slate-800 rounded-lg h-20 md:h-44 lg:h-60 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700 shadow-sm">
                            <ImageIcon size={32} className="mb-2 opacity-50" />
                            <span className="text-xs text-center px-2">Insert Adopt a Buddy Screenshot</span>
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
