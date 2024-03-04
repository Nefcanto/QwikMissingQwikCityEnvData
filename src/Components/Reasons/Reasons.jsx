import { Reason } from "Reasons"
import { PageHead } from "Shared"

const Reasons = ({
    breadcrumb,
    seo,
    statics,
}) => {

    return <section>
        <PageHead
            breadcrumb={breadcrumb}
            seo={seo}
        />
        <div class="max-w-7xl mx-auto px-5 py-5">

            <div class="flex flex-col gap-5">

                {
                    statics.items?.map(item => <Reason
                        key={item.id}
                        {...item}
                        {...statics}
                    />)
                }
            </div>
        </div>
    </section>
}

export default Reasons
