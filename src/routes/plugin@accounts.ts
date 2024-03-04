// @ts-nocheck

import { serverAuth$ } from "@builder.io/qwik-auth"
import type { Provider } from "@auth/core/providers"
import Keycloak from "@auth/core/providers/keycloak"

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } = serverAuth$(
    ({ env }) => ({
        secret: "auth-secret",
        trustHost: true,
        callbacks: {
            async jwt({ token, account, profile }) {
                if (account) {
                    token.accessToken = account.access_token
                    token.id = profile.id
                }
                return token
            },
            async session({
                session,
                token,
            }) {

                session.user.guid = token.sub
                session.user.accessToken = token.accessToken
                return session
            }
        },
        providers: [
            Keycloak({
                clientId: "Site",
                clientSecret: "client-secret" as string,
                issuer: "https://accounts.pydr.ir/realms/Development" as string
            }),
        ] as Provider[],
    })
);
