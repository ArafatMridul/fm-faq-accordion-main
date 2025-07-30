import React, { useState } from "react";
import patternMob from "/images/background-pattern-mobile.svg";
import patternDesk from "/images/background-pattern-desktop.svg";
import star from "/images/icon-star.svg";
import plus from "/images/icon-plus.svg";
import minus from "/images/icon-minus.svg";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
    {
        question: "What is Frontend Mentor, and how will it help me?",
        answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
        question: "Is Frontend Mentor free?",
        answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
        question: "Can I use Frontend Mentor projects in my portfolio?",
        answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
        question: "How can I get help if I'm stuck on a challenge?",
        answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
];

const Hero = () => {
    const [value, setValue] = useState(null);
    return (
        <section>
            <div className="fixed top-0 left-0 right-0 z-10">
                <picture>
                    <source media="(min-width: 600px)" srcset={patternDesk} />
                    <img src={patternMob} alt="" className="w-full" />
                </picture>
            </div>
            <div className="relative bg-p-p-1 h-screen">
                <div className="absolute left-6 right-6 sm:left-16 sm:right-16 top-36 sm:top-20 rounded-xl bg-p-w px-6 pt-6 lg:px-10 lg:pt-11 lg:pb-2 lg:w-[600px] lg:left-1/2 lg:-translate-x-1/2 lg:top-42 z-40">
                    <div className="flex items-center gap-6">
                        <img src={star} alt="" className="w-6 lg:w-10" />
                        <h1>FAQs</h1>
                    </div>
                    <div className="lg:mt-2">
                        {faqs.map(({ question, answer }, index) => (
                            <div
                                key={index}
                                onClick={() =>
                                    setValue(value === index ? null : index)
                                }
                                className="cursor-pointer overflow-hidden"
                            >
                                <div
                                    className={`py-6 lg:py-6 relative group ${
                                        index === 0
                                            ? "border-t-0"
                                            : "border-t-2 border-p-p-1"
                                    }`}
                                >
                                    <div className={`absolute bottom-0 left-0 right-0 ${value === index ? "h-full" : "h-0"} group-hover:h-full rounded-sm bg-slate-200 transition-all duration-700 -z-10`}></div>
                                    <div className="flex items-center justify-between">
                                        <h2 className="">{question}</h2>
                                        <AnimatePresence
                                            mode="wait"
                                            initial={false}
                                        >
                                            {index === value ? (
                                                <motion.img
                                                    key="minus"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{
                                                        duration: 0.3,
                                                        ease: "easeInOut",
                                                    }}
                                                    src={minus}
                                                />
                                            ) : (
                                                <motion.img
                                                    key="plus"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{
                                                        duration: 0.3,
                                                        ease: "easeInOut",
                                                    }}
                                                    src={plus}
                                                />
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <AnimatePresence mode="wait">
                                        {value === index && (
                                            <motion.div
                                                key={index}
                                                initial={{
                                                    opacity: 0,
                                                    height: 0,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    height: "auto",
                                                }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{
                                                    duration: 0.7,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                <div className="pt-6">
                                                    <p>{answer}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
