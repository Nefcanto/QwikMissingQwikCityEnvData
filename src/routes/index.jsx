import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { getPage } from "Contents"
import { useSeo } from "Seo"
import {
    Features,
    Hero,
} from "Index"

const getData = routeLoader$(async props => {
    const [
        page
    ] = await useAsync([
        getPage("newHome", props)
    ])
    return {
        ...page
    }
})

const Index = component$(() => {

    const data = getData().value

    const {
        newHomeHero,
        newFeatures
    } = data

    return <div dir="ltr">
        <Hero {...newHomeHero} />
        <Features {...newFeatures} />
    </div>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
