// @ts-nocheck

import {
    renderToStream,
    type RenderToStreamOptions,
} from "@builder.io/qwik/server";
import { manifest } from "@qwik-client-manifest";
import Root from "./root";

export default function (props) {

    console.log('******** I am entry.ssr.tsx')

    function render(opts: RenderToStreamOptions) {
        return renderToStream(<Root
            settings={props.settings}
            locales={props.locals}
            locale={props.locale}
            defaultLocale={props.defaultLocale}
        />, {
            manifest,
            ...opts,
            containerAttributes: {
                lang: opts.serverData?.locale || "en",
                ...opts.containerAttributes,
            },
        });
    }
    return render(props)
}
