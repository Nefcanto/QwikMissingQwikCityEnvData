import { component$ } from "@builder.io/qwik"
import { Pagination as DefaultPagination } from "Base"

const Pagination = component$(({
    class: internalClass,
    metadata,
}) => {

    return <div class={internalClass}>
        <DefaultPagination
            activeClass="bg-custom-color2 border-gray-200 text-white"
            container="max-w-7xl mx-auto my-8"
            ellipses
            items="mx-2 px-4 [&:has(svg)]:px-2 py-2 border border-custom-color2 rounded-lg bg-white text-black hover:bg-custom-color2 hover:text-white group"
            next="fill-black group-hover:fill-white "
            last="fill-black group-hover:fill-white "
            previous="fill-black group-hover:fill-white "
            first="fill-black group-hover:fill-white "
            metadata={metadata}
        />
    </div>
})

export default Pagination

