import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card.jsx";
import HeadingText from "@/Components/Content/atoms/HeadingText/index.jsx";
import { Button } from "@/Components/ui/button.jsx";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import IconPlaceholder from "@/Components/Content/atoms/IconPlaceholder/index.jsx";
import { Link } from "@inertiajs/react";

export default function CardPricing({
    title,
    description,
    price,
    featuresList,
}) {
    return (
        <Card className="shadow-md">
            <CardHeader>
                <CardTitle>
                    <HeadingText className="text-primary">{title}</HeadingText>
                </CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <HeadingText className="text-4xl font-black">
                    ${price}
                    <span className="text-base font-extralight text-gray-400">
                        /design
                    </span>
                </HeadingText>
            </CardContent>
            <CardContent>
                <Button className="w-full">
                    <Link href="/checkout">Get Started</Link>
                </Button>
            </CardContent>
            <CardContent className="flex flex-col gap-3">
                <p className="font-semibold text-sm text-gray-400">Features</p>
                {featuresList.map((feature) => (
                    <div key={feature.id} className="flex items-center gap-2">
                        {feature.icon === "CheckIcon" ? (
                            <IconPlaceholder variant="check">
                                <CheckIcon className="mx-auto w-3 h-3" />
                            </IconPlaceholder>
                        ) : (
                            <IconPlaceholder variant="cross">
                                <Cross2Icon className="mx-auto w-3 h-3" />
                            </IconPlaceholder>
                        )}
                        <span>{feature.name}</span>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
