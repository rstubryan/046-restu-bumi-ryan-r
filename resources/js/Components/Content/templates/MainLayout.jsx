import Navbar from "@/Components/Content/organisms/Navbar/index.jsx";
import ContainerLayout from "@/Components/Content/templates/ContainerLayout.jsx";
import HeadingText from "@/Components/Content/atoms/HeadingText/index.jsx";
import CardPricing from "@/Components/Content/organisms/CardPricing/index.jsx";
import Footer from "@/Components/Content/organisms/Footer/index.jsx";

export default function MainLayout() {
    const featuresList = [
        {
            id: 1,
            title: "Basic",
            description: "A simple option for those who need a basic website",
            price: "10",
            features: [
                {
                    id: 1,
                    icon: "CheckIcon",
                    name: "Newer frameworks",
                },
                {
                    id: 2,
                    icon: "CheckIcon",
                    name: "Responsive design",
                },
                {
                    id: 3,
                    icon: "Cross2Icon",
                    name: "Advanced customization",
                },
                {
                    id: 4,
                    icon: "Cross2Icon",
                    name: "Can use custom domain",
                },
                {
                    id: 5,
                    icon: "Cross2Icon",
                    name: "Unlimited revisions",
                },
                {
                    id: 6,
                    icon: "Cross2Icon",
                    name: "Long term priority support",
                },
            ],
        },
        {
            id: 2,
            title: "Advanced",
            description: "Ideal for small businesses or startups",
            price: "50",
            features: [
                {
                    id: 1,
                    icon: "CheckIcon",
                    name: "Newer frameworks",
                },
                {
                    id: 2,
                    icon: "CheckIcon",
                    name: "Responsive design",
                },
                {
                    id: 3,
                    icon: "CheckIcon",
                    name: "Advanced customization",
                },
                {
                    id: 4,
                    icon: "CheckIcon",
                    name: "Can use custom domain",
                },
                {
                    id: 5,
                    icon: "Cross2Icon",
                    name: "Unlimited revisions",
                },
                {
                    id: 6,
                    icon: "Cross2Icon",
                    name: "Long term priority support",
                },
            ],
        },
        {
            id: 3,
            title: "Corporation",
            description: "Suitable for large companies or corporations",
            price: "100",
            features: [
                {
                    id: 1,
                    icon: "CheckIcon",
                    name: "Newer frameworks",
                },
                {
                    id: 2,
                    icon: "CheckIcon",
                    name: "Responsive design",
                },
                {
                    id: 3,
                    icon: "CheckIcon",
                    name: "Advanced customization",
                },
                {
                    id: 4,
                    icon: "CheckIcon",
                    name: "Can use custom domain",
                },
                {
                    id: 5,
                    icon: "CheckIcon",
                    name: "Unlimited revisions",
                },
                {
                    id: 6,
                    icon: "CheckIcon",
                    name: "Long term priority support",
                },
            ],
        },
    ];
    return (
        <>
            <div>
                <header className="sticky bg-white top-0 z-50">
                    <Navbar />
                </header>
                <main>
                    <ContainerLayout>
                        <div className="my-32">
                            <HeadingText className="text-center text-4xl max-w-xl mx-auto leading-relaxed">
                                Buat{" "}
                                <span className="text-primary">
                                    Pekerjaanmu
                                </span>{" "}
                                Menjadi Lebih{" "}
                                <span className="text-primary">Mudah</span>{" "}
                                dengan{" "}
                                <span className="text-primary">Agenone</span>
                            </HeadingText>
                            <p className="text-center py-3">
                                Menawarkan jasa IT untuk kebutuhan anda
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {featuresList.map((item) => (
                                <CardPricing
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    featuresList={item.features}
                                />
                            ))}
                        </div>
                    </ContainerLayout>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}
