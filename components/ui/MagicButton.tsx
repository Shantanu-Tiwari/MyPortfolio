import React from "react";

const MagicButton = ({
                         title,
                         icon,
                         position,
                         handleClick,
                         otherClasses = "",
                     }: {
    title: string;
    icon: React.ReactNode;
    position: "left" | "right";
    handleClick?: () => void;
    otherClasses?: string;
}) => {
    return (
        <button
            className="relative inline-flex items-center justify-center h-14 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
            onClick={handleClick}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

            <span
                className={`inline-flex items-center justify-center h-full w-full cursor-pointer rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
            >
                {position === "left" && icon}
                <span>{title}</span>
                {position === "right" && icon}
            </span>
        </button>
    );
};

export default MagicButton;
