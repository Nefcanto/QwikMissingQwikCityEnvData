import { Image } from "Base"
import {
    NewTitle,
    Paragraph,
} from "Shared"

const Features = ({
    items,
    subtitle,
    title,
}) => {

    return <div class="features px-6 mt-12 py-12 bg-slate-50 sm:px-12 md:px-24 lg:px-8 xl:mx-auto xl:py-20">
        <div class="xl:max-w-screen-lg xl:mx-auto">
            <NewTitle text={title} />
            <Paragraph text={subtitle} />
            <ul class="grid gap-4 mt-8 sm:gap-6 md:gap-8 lg:grid-cols-3 xl:mt-12">
                {
                    items?.map(item => <li
                        key={item.id}
                        class="border"
                    >
                        <Image
                            containerClass="w-full aspect-square mb-4"
                            src={item.image}
                            alt={item.title}
                        />
                        <div class="p-4 md:p-8">
                            <div class="text-lg font-semi-bold text-custom-color1 mb-2 tracking-wider uppercase">{item.title}</div>
                            <div class="text-sm text-slate-700 font-light">{item.description}</div>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    </div>
}

export default Features
