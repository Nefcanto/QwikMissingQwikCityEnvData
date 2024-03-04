// @ts-nocheck

import { createQwikCity } from "@builder.io/qwik-city/middleware/node";
import qwikCityPlan from "@qwik-city-plan";
import renderer from "./entry.ssr";
import { readFileSync } from "fs"
import path from "path"

console.log('******** I am entry.preview.tsx')

const settingsContent = readFileSync(path.join(process.cwd(), "dist", "Settings.json")).toString()
const settingsJson = JSON.parse(settingsContent)
const settingsOverrideContent = readFileSync(path.join(process.cwd(), "dist", "SettingsOverride.json")).toString()
const settingsOverrideJson = JSON.parse(settingsOverrideContent)
const settings: any = {
    ...settingsJson,
    ...settingsOverrideJson,
}
console.log(settings)
for (const setting in settings) {
    if (settings[settings]?.endsWith && settings[setting].endsWith("/")) {
        throw "Do not end URLs with slash in settings"
    }
}
globalThis.settings = settings

const getGlobalizationData = async () => {
    let url = ""
    try {
        url = `${settings.ApiUrl}/globalization/data?scopesCsv=all,site`
        let res = await fetch(url)
        let retries = 0
        const maxRetries = 3
        while (res.status !== 200 && retries < maxRetries) {
            console.log(`${retries + 1}. Retrying to fetch /globalization/data`)
            retries++
            res = await fetch(url)
        }
        retries = 0
        const data = await res.json()

        const {
            defaultLocale,
            locales,
            locale,
        } = data

        globalThis.defaultLocale = defaultLocale
        globalThis.locales = locales
        globalThis.locale = locale
        return data

    } catch (error) {
        console.error(error, `Failed to fetch the globalization data from ${url}`)
    }
}

getGlobalizationData().then(data => {
    console.log("****************** Got globalization data", data)
}).catch(e => console.log(e))

const render = renderer({
    settings: settings,
})

export default createQwikCity({ render, qwikCityPlan })
