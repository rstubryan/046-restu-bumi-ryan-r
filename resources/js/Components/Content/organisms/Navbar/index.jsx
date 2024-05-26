import { useState } from "react";
import ContainerLayout from "@/Components/Content/templates/ContainerLayout.jsx";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/Components/ui/avatar.jsx";
import { Button } from "@/Components/ui/button.jsx";
import HeadingText from "@/Components/Content/atoms/HeadingText/index.jsx";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

export default function Navbar({ avatarUser, usnUser }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="border-b">
                <ContainerLayout>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center p-5 gap-5 md:gap-0 ">
                        <div className="flex justify-between items-center">
                            <HeadingText>
                                Agenone
                                <span className="text-primary">.</span>
                            </HeadingText>
                            <div className="md:hidden">
                                <Button onClick={toggleMenu}>
                                    {isOpen ? (
                                        <Cross2Icon />
                                    ) : (
                                        <HamburgerMenuIcon />
                                    )}
                                </Button>
                            </div>
                        </div>
                        <div
                            className={`md:flex items-center gap-10 space-y-5 md:space-y-0 ${isOpen ? "" : "hidden"}`}
                        >
                            <Avatar>
                                <AvatarImage src={avatarUser} />
                                <AvatarFallback>{usnUser}</AvatarFallback>
                            </Avatar>
                            <Button>Sign In</Button>
                        </div>
                    </div>
                </ContainerLayout>
            </div>
        </>
    );
}
