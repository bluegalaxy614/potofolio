import type { IServiceItem } from "@/types";
import { Balancer } from "react-wrap-balancer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardBox from "@/components/core/CardBox";
import Column from "@/components/core/Column";

const ServiceItem = ({ data }: { data: IServiceItem }) => {
  return (
    <CardBox classNames="p-4 items-center text-center bg-[var(--textColor10)] group min-h-80">
      <Column classNames="items-center justify-between w-full h-full gap-12">
        <Column classNames="items-center justify-start">
          <span className="text-3xl/6 md:text-4xl/6 text-[var(--primaryColor)]">
            <FontAwesomeIcon icon={data.icon} />
          </span>

          <p className="text-lg/6 font-semibold mt-4">{data.title}</p>
        </Column>

        <span className="w-8 h-1 bg-[var(--primaryColor)] rounded-full"></span>

        <p className="text-base/6 font-normal">
          <Balancer>{data.shortDescription}</Balancer>
        </p>
      </Column>

      <div className="absolute left-0 right-0 top-[-200%] bottom-0 w-full h-auto min-h-full scroll-smooth overflow-hidden overflow-y-auto p-4 bg-zinc-800 hidden invisible opacity-0 transition duration-500 ease-in-out slide_in group-hover:flex group-hover:top-0 group-hover:visible group-hover:opacity-100 group-hover:z-10">
        <p className="text-base/6 font-normal m-auto text-center">
          <Balancer preferNative={false}>{data.description}</Balancer>
        </p>
      </div>
    </CardBox>
  );
};

export default ServiceItem;
