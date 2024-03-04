import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { useSeo } from "Seo"
import { getPage } from "Contents"
import { Reasons } from "Reasons"

const getData = routeLoader$(async props => {
    const [
        page
    ] = await useAsync([
        getPage("reasons", props)
    ])
    return {
        ...page
    }
})

const Index = component$(() => {

    const data = getData().value
    const {
        reasons,
        ...rest
    } = data

    return <>
        <Reasons
            statics={reasons}
            {...rest}
        />
    </>
})

export default Index

const head = ({ resolveValue }) => {

    return useSeo(getData, resolveValue)
}

export { head }
