// @ts-nocheck

import {
    render,
    type RenderOptions
} from "@builder.io/qwik"
import Root from "./root"

export default function (opts: RenderOptions) {

    console.log('******** I am entry.dev.tsx')

    return render(document, <Root />, opts)
}
