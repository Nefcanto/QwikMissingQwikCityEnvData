import {
    component$,
    Slot,
} from "@builder.io/qwik"
import { merge } from "Base"

const Modal = component$(({
    class: internalClass,
    containerClass,
    isOpen,
}) => {

    return <div
        onClick$={() => isOpen.value = !isOpen.value}
        class={merge(`fixed z-50 top-0 start-0 w-screen h-screen bg-black/60 transition-all duration-700 ${isOpen.value ? "" : "hidden"} ${containerClass}`)}
    >
        <div
            onClick$={e => e.stopPropagation()}
            class={merge(`max-w-full z-50 w-[600px] p-8 text-center bg-white rounded-lg mx-auto duration-700 delay-[1000000] transition-all ${isOpen.value ? "translate-y-full" : "translate-y-0"} ${internalClass}`)}
        >
            <Slot />
        </div>
    </div>
})

export default Modal
