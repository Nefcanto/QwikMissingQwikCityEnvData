const useHomeUrl = localePathPrefix => {
    return `${localePathPrefix == "" ? "/" : localePathPrefix}`
}

export default useHomeUrl
