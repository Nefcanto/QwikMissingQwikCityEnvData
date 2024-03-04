// @ts-nocheck

import {
    createQwikCity,
    type PlatformNode,
} from "@builder.io/qwik-city/middleware/node";
import "dotenv/config"
import qwikCityPlan from "@qwik-city-plan";
import { manifest } from "@qwik-client-manifest";
import renderer from "./entry.ssr";
import express from "express";
import Cors from "cors";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { readFileSync } from "fs"
import path from "path"

console.log('******** I am entry.express.tsx')

const settingsContent = readFileSync(path.join(process.cwd(), "dist", "Settings.json")).toString()
const settingsJson = JSON.parse(settingsContent)
const settingsOverrideContent = readFileSync(path.join(process.cwd(), "dist", "SettingsOverride.json")).toString()
const settingsOverrideJson = JSON.parse(settingsOverrideContent)
const settings: any = {
    ...settingsJson,
    ...settingsOverrideJson,
}
for (const setting in settings) {
    if (settings[setting].endsWith && settings[setting].endsWith("/")) {
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

declare global {
    interface QwikCityPlatform extends PlatformNode { }
}

const distDir = join(fileURLToPath(import.meta.url), "..", "..", "dist");
const buildDir = join(distDir, "build");

const PORT = 3000;

getGlobalizationData().then(data => {
    console.log("****************** Got globalization data", data)
    const render = renderer({
        settings: settings,
        ...data
    })
    const { router, notFound } = createQwikCity({
        render,
        qwikCityPlan,
        manifest,
    });

    const app = express();
    app.use(Cors());
    app.use(`/build`, express.static(buildDir, { immutable: true, maxAge: "1y" }));
    app.use(express.static(distDir, { redirect: false }));
    app.use(router);
    app.use(notFound);
    app.listen(PORT, () => {
        /* eslint-disable */
        console.log(`Server started: http://localhost:${PORT}/`);
    });
}).catch(e => console.log(e))
