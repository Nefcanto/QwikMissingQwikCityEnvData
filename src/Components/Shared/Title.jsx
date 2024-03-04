const Title = ({
    inverse,
    subtitle,
    title,
}) => {

    return <>
        <span class={`block ${inverse ? " text-custom-color21 " : " text-custom-color2 "} text-md font-bold text-center`}>
            {subtitle}
        </span>

        <h3 class={`flex gap-1 justify-center text-xl font-bold mt-4 ${inverse ? " text-white " : ""}`}>
            <span>{title}</span>
        </h3>

    </>
}

export default Title
