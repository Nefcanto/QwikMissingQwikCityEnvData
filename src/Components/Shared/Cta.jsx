import { component$ } from "@builder.io/qwik"
import { merge } from "Base"

const Cta = component$(({
    class: internalClass,
    click,
    link,
    text,
}) => {
    const buttonStyle = merge("border rounded-md px-3 py-1.5 capitalize text-sm tracking-wider font-bold flex items-center w-fit", internalClass)

    return <>
        {
            click ? <button
                class={buttonStyle}
                onClick$={click}>
                {text}
            </button>
                :
                <a
                    href={link}
                    class={buttonStyle}
                    aria-label={text}
                >
                    {text}
                </a>
        }

    </>
})

export default Cta
