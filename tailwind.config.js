import baseConfig from "./TailwindBase.js"

const config = {
    presets: [
        baseConfig
    ],
    theme: {
        extend: {
            colors: {
                custom: {
                    color1: "#BF18DB",
                    color2: "#430538",
                    color21: "#7E50DA",
                    color3: "#F5F5F5",
                    color31: "#545454",
                    color32: "#4d4d4d",
                }
            }
        },
        fontFamily: {
            IRANSans: ["IRANSans"],
        },
        boxShadow: {
            "hover": "-1px 8px 51px 7px rgba(0,0,0,0.4)",
            "init": "-1px 8px 51px -6px rgba(0,0,0,0.2)",
        }
    }
}

export default config
