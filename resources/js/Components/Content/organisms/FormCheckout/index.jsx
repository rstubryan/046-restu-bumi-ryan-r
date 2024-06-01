import Input from "@/Components/Content/atoms/Input/index.jsx";
import Label from "@/Components/Content/atoms/Label/index.jsx";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/Components/ui/button.jsx";

export default function FormCheckout() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postal: "",
        country: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.phone]: e.target.value,
            [e.target.address]: e.target.value,
            [e.target.city]: e.target.value,
            [e.target.postal]: e.target.value,
            [e.target.country]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("", form);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit} method="post">
                <div className="mb-4">
                    <Label label="Full Name" name="name" />
                    <Input
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        onChange={handleChange}
                        value={form.name}
                    />
                </div>
                <div className="mb-4">
                    <Label label="Email Address" name="email" />
                    <Input
                        name="email"
                        type="email"
                        placeholder="johndoe@gmail.com"
                        onChange={handleChange}
                        value={form.email}
                    />
                </div>
                <div className="mb-4">
                    <Label label="Phone Number" name="phone" />
                    <Input
                        name="phone"
                        type="tel"
                        placeholder="081234567890"
                        onChange={handleChange}
                        value={form.phone}
                    />
                </div>
                <div className="mb-4">
                    <Label label="Address" name="address" />
                    <Input
                        name="address"
                        type="text"
                        placeholder="Jl. Raya"
                        onChange={handleChange}
                        value={form.address}
                    />
                </div>
                <div className="mb-4">
                    <Label label="City" name="city" />
                    <Input
                        name="city"
                        type="text"
                        placeholder="Jakarta"
                        onChange={handleChange}
                        value={form.city}
                    />
                </div>
                <div className="mb-4">
                    <Label label="Postal Code" name="postal" />
                    <Input
                        name="postal"
                        type="text"
                        placeholder="12345"
                        onChange={handleChange}
                        value={form.postal}
                    />
                </div>
                <div className="mb-4">
                    <Label label="Country" name="country" />
                    <Input
                        name="country"
                        type="text"
                        placeholder="Indonesia"
                        onChange={handleChange}
                        value={form.country}
                    />
                </div>
                <Button type="submit" className="w-full mt-4 text-md">
                    Submit
                </Button>
            </form>
        </>
    );
}
