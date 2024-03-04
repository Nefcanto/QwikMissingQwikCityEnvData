import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { Image } from "Base"
import { Cta } from "Shared"

const Reason = component$(({
    collapse,
    description,
    expand,
    firstParagraph,
    image,
    secondParagraph,
    subtitle,
    thirdParagraph,
    title,
}) => {

    const isExpanded = useSignal(false)

    const toggleExpand = $(() => {
        isExpanded.value = !isExpanded.value
    })

    return <div class="w-full flex flex-col sm:flex-row sm:odd:flex-row-reverse rounded-lg overflow-hidden shadow-init transition-all duration-300 shadow-custom-color1/10 hover:shadow-custom-color2/40 hover:shadow-hover group bg-white p-4">
        <Image
            containerClass="w-1/2 max-w-md mx-auto aspect-square self-start shrink-0 rounded-md overflow-hidden"
            src={image}
            imageClass="group-hover:scale-110 duration-300 brightness-90 group-hover:brightness-100"
        />
        <div class="px-4 flex flex-col justify-center flex-1">
            <strong class="block font-bold text-2xl text-center md:text-start mt-5 md:mt-0 text-custom-color2 py-2">{title}</strong>
            <p class="py-1.5 text-lg font-bold">{subtitle}</p>
            <p class="py-1.5 text-md leading-7">{description}</p>

            <div class={`duration-1000 overflow-hidden mb-1 ${isExpanded.value ? "max-h-[100vh]" : "max-h-0 duration-500"}`}>
                <p class="py-1.5 text-md leading-7">{firstParagraph}</p>
                <p class="py-1.5 text-md leading-7">{secondParagraph}</p>
                <p class="py-1.5 text-md leading-7">{thirdParagraph}</p>
            </div>
            {
                firstParagraph
                &&
                <Cta
                    class="my-2"
                    click={toggleExpand}
                    text={
                        isExpanded.value ?
                            collapse
                            :
                            expand
                    }
                />

            }
        </div>
    </div>

})

export default Reason
