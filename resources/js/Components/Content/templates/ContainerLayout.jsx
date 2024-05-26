import { cn } from "@/lib/utils.js";

export default function ContainerLayout({ children, className, ...props }) {
    return (
        <>
            <div className={cn(`container ${className}`)} {...props}>
                {children}
            </div>
        </>
    );
}
