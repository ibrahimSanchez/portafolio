import { ReactNode } from "react";
import { IconButton } from "@mui/material";

interface Props {
    title: string;
    description: string;
    icon: ReactNode;
    className: string;
}


export const SimpleCard = ({ title, description, icon, className }: Props) => (
    <div className={`p-6 border border-detail-primary rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] z-10 ${className}`}>
        <div className="text-center mb-4">
            <IconButton className="text-detail-primary text-4xl">
                {icon}
            </IconButton>
        </div>

        <div className="w-full h-[2px] mb-4 bg-detail-primary" />

        <h3 className="text-2xl font-semibold text-heading-base">{title}</h3>
        <p className="mt-4 text-md text-text-base">{description}</p>
    </div>
);