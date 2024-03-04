import { Breadcrumb } from "Shared"

const PageHead = ({
    breadcrumb,
    seo,
}) => {

    return <>
        <Breadcrumb items={breadcrumb} />
        <h1 class="font-bold text-black text-3xl text-center py-6 md:py-10">
            {seo?.pageTitle}
        </h1>
    </>
}

export default PageHead
