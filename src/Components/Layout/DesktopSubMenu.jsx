const DesktopSubMenu = ({ items }) => {

    return <>
        <ul class="min-w-[320px] max-w-full hidden group-hover:block absolute top-9 start-0 bg-custom-color3 text-custom-color1 shadow z-10">
            {
                items?.map(item => <>
                    <li class="px-3 py-3 hover:bg-custom-color2 hover:text-custom-color1 transition-all">
                        <a
                            href={item?.url}
                        >
                            {item?.title}
                        </a>
                    </li>
                </>)
            }
        </ul>
    </>
}

export default DesktopSubMenu
