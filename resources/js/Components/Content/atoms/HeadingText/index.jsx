import { cn } from "@/lib/utils.js";

export default function HeadingText({ children, className, ...props }) {
    return (
        <h1
            className={cn(
                `font-semibold text-2xl text-gray-800 leading-tight ${className}`,
            )}
            {...props}
        >
            {children}
        </h1>
    );
}
