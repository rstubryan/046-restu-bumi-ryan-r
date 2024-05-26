import { Head } from "@inertiajs/react";
import MainLayout from "@/Components/Content/templates/MainLayout.jsx";

export default function Content({ children, className, ...props }) {
    return (
        <>
            <Head title="Content" />
            <MainLayout />
        </>
    );
}
