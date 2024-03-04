import { Menu } from "Svg"
import { Cta } from "Shared"
import {
    DesktopMenu,
    MobileMenu,
} from "Layout"

const Header = ({
    loginRegister,
    logo,
    menuItems,
}) => {

    return <>
        <header class="bg-custom-color3">
            <div class="max-w-7xl mx-auto px-5 py-5 flex items-center relative">
                <span onClick$={() => trigger("menuClicked")}>
                    <Menu
                        class="w-10 aspect-square text-custom-color21 stroke-[1.7px] lg:hidden cursor-pointer"
                    />
                </span>

                <a
                    href="/"
                    class="hidden lg:block w-[40px]">
                    <span
                        dangerouslySetInnerHTML={logo?.logoSvg}
                        class="w-full aspect-[1/.3]"
                    />
                </a>

                <DesktopMenu menuItems={menuItems} />
                <MobileMenu menuItems={menuItems} />

                <div class="ms-auto">
                    <Cta
                        link={loginRegister?.link}
                        text={loginRegister?.text}
                        class="bg-custom-color21 text-custom-color3 hover:bg-custom-color1 duration-300"
                    />
                </div>
            </div>
        </header>
    </>

}

export default Header
