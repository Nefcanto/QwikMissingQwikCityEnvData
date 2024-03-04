import { DefaultBreadcrumb } from "Base"

const Breadcrumb = ({ items }) => {

    return <>
        <div class="w-full bg-slate-300 py-3">
            <DefaultBreadcrumb
                wrapperClass="max-w-7xl mx-auto px-5 flex items-center gap-1"
                itemClass="min-w-fit whitespace-nowrap flex transition-all text-white hover:text-custom-color2"
                lastItemClass="min-w-fit whitespace-nowrap text-white hover:text-custom-color2"
                separator={"/"}
                separatorClass="text-white"
                breadcrumb={items}
            />
        </div>
    </>
}

export default Breadcrumb
