import FormLayout from "@/Components/Content/templates/FormLayout.jsx";
import FormCheckout from "@/Components/Content/organisms/FormCheckout/index.jsx";
import ContainerLayout from "@/Components/Content/templates/ContainerLayout.jsx";
import { Head } from "@inertiajs/react";

export default function FormPages() {
    return (
        <>
            <Head title="Checkout" />
            <ContainerLayout className="h-screen justify-center max-w-2xl flex flex-col">
                <FormLayout label="Billing Information">
                    <FormCheckout />
                </FormLayout>
            </ContainerLayout>
        </>
    );
}
