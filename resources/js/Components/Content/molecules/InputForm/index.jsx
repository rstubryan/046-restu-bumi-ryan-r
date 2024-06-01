import Input from "@/Components/Content/atoms/Input/index.jsx";
import Label from "@/Components/Content/atoms/Label/index.jsx";

export default function InputForm({
    name,
    label,
    type,
    value,
    onChange,
    placeholder,
    ...props
}) {
    return (
        <>
            <Label name={name} label={label} />
            <Input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...props}
            />
        </>
    );
}
