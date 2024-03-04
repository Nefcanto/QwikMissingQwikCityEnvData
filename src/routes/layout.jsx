import {
    component$,
    Slot,
} from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { getSystemConfig } from "Configuration"
import { getGlobalization } from "Globalization"
import { getLayout } from "Contents"
import { useLayoutSeo } from "Seo"
import { useAsync } from "Base"
import {
    Footer,
    Header,
} from "Layout"

const getData = routeLoader$(async props => {
    const [
        globalization,
        layout,
        systemConfig,
    ] = await useAsync([
        getGlobalization(props),
        getLayout("main", props),
        getSystemConfig(props),
    ])
    return {
        ...layout,
        ...globalization,
        ...systemConfig,
    }
})

const Layout = component$(() => {

    const data = getData().value

    return <div
        dir={data.currentLocale.isRtl ? "rtl" : "ltr"}
        class="scroll-smooth"
    >
        <Header {...data} />
        <Slot />
        <Footer {...data} />
    </div>
})

export default Layout

const head = ({ resolveValue }) => {

    return useLayoutSeo(getData, resolveValue)
}

export { head }
