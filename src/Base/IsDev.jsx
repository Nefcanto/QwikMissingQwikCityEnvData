const isDev = () => {
    return globalThis?.settings?.IsDeveloping
}

export default isDev
