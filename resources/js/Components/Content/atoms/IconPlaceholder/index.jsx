export default function IconPlaceholder({ variant, children }) {
    const bgColor = variant === "check" ? "bg-primary" : "bg-red-400";

    return (
        <>
            <i
                className={`bg-primary rounded-full text-white w-5 h-5 flex items-center ${bgColor}`}
            >
                {children}
            </i>
        </>
    );
}
