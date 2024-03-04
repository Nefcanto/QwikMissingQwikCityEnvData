import { DesktopSubMenu } from "Layout"

const DesktopMenu = ({ menuItems }) => {

    const style = "p-3 text-custom-color32 hover:text-custom-color2 transition-all select-none"

    return <>
        <ul class="ms-10 hidden lg:flex">
            {menuItems?.map(item => <>
                <li class="relative group">
                    {
                        item.url
                            ?
                            <a
                                href={item?.url}
                                class={style}
                            >
                                {item?.title}
                            </a>
                            :
                            <span class={style + " cursor-pointer"}>
                                {item?.title}
                            </span>
                    }

                    {
                        item?.relatedItems?.children?.length > 0 && <DesktopSubMenu items={item?.relatedItems?.children} />
                    }
                </li>
            </>)}
        </ul>
    </>
}

export default DesktopMenu
