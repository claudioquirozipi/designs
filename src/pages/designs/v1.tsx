import { type NextPage } from "next";
import CardV1 from "~/components/cardV1";
import { api } from "~/utils/api";

const V1Page: NextPage = () => {
  const { data: shoes } = api.shoes.all.useQuery();
  return (
    <div className="flex h-screen items-center justify-center bg-neutral-900">
      {shoes?.length && (
        <div className="grid grid-cols-3 gap-16">
          <CardV1 shoe={shoes[0]!} />
          <CardV1 shoe={shoes[1]!} />
          <CardV1 shoe={shoes[2]!} />
        </div>
      )}
    </div>
  );
};

export default V1Page;
