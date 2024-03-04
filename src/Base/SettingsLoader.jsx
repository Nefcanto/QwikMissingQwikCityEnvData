import { readFileSync } from "fs"
import path from "path"

const loadSettings = async isDeveloping => {
    if (!isDeveloping) {
        return {}
    }
    const settingsContent = readFileSync(path.join(process.cwd(), "public", "Settings.json")).toString()
    const settingsJson = JSON.parse(settingsContent)
    const settingsOverrideContent = readFileSync(path.join(process.cwd(), "public", "SettingsOverride.json")).toString()
    const settingsOverrideJson = JSON.parse(settingsOverrideContent)
    const settings = {
        ...settingsJson,
        ...settingsOverrideJson,
    }
    for (const setting in settings) {
        const value = settings[setting]
        if (value.endsWith && value.endsWith("/")) {
            throw `Do not end URLs with slash in settings. Fix the ${value}`
        }
    }
    console.log(settings)
    return settings
}

export default loadSettings
