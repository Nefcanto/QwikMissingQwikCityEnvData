import { Image } from "Base"

const PagesHeader = ({
    image,
    title,
}) => {

    return <>
        <div class="relative w-full aspect-[3/1.3] aspect-[3/.75] sm:aspect-[3/.75] mt-2">
            <Image
                src={image}
                alt={title}
                containerClass={"absolute top-0 start-0 w-full h-full z-0 blur-sm opacity-[98] after:absolute after:content-[\"\"] after:w-full after:h-full after:bg-custom-color2/30 after:top-0 after:z-10"}
            />
            <Image
                src={image}
                alt={title}
                containerClass="relative py-6 md:py-10 max-w-6xl mx-auto px-5 w-full h-full"
            />

        </div>
    </>
}

export default PagesHeader
