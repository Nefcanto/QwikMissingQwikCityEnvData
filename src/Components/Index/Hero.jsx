import { Image } from "Base"
import { Cta } from "Shared"

const Hero = ({
    description,
    firstCtaLink,
    firstCtaText,
    image,
    secondCtaLink,
    secondCtaText,
    title,
}) => {

    return <div class="px-6 pt-20 sm:max-w-[500px] sm:text-center sm:mx-auto lg:flex lg:gap-8 lg:max-w-[800px] lg:text-start xl:max-w-[1000px]">
        <div class="flex-1">
            <h1 class="text-4xl text-custom-color21 font-black lg:text-5xl">{title}</h1>
            <p class="text-sm my-4 sm:my-6">{description}</p>
            <div class="flex flex-wrap gap-2 sm:justify-center sm:gap-3 lg:justify-start">
                <Cta
                    text={firstCtaText}
                    link={firstCtaLink}
                />
                <Cta
                    text={secondCtaText}
                    link={secondCtaLink}
                />
            </div>
        </div>
        <Image
            priority
            containerClass="w-full hidden lg:block flex-1"
            src={image}
            alt={title}
        />
    </div>
}

export default Hero
