export default function Input({
    name,
    type,
    value,
    placeholder,
    onChange,
    className,
    ...props
}) {
    return (
        <div className="mb-4">
            <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-primary ${className}`}
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
}
