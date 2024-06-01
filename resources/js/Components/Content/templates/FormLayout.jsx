import HeadingText from "@/Components/Content/atoms/HeadingText/index.jsx";
import { Button } from "@/Components/ui/button.jsx";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Link } from "@inertiajs/react";

export default function FormLayout({ label, children }) {
    return (
        <>
            <div>
                <Button>
                    <Link href="/">
                        <ArrowLeftIcon />
                    </Link>
                </Button>
                <HeadingText className="text-3xl text-center text-primary mb-4">
                    {label}
                </HeadingText>
                <div>{children}</div>
            </div>
        </>
    );
}
