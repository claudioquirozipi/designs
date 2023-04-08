import { type NextPage } from "next";
import { api } from "~/utils/api";

const V1Page: NextPage = () => {
  const { data: shoes } = api.shoes.all.useQuery();
  console.log(shoes);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1>Designs</h1>
      {shoes?.map((shoe) => (
        <div key={shoe.id}>
          <h2>{shoe.brand}</h2>
          <p>{shoe.model}</p>
        </div>
      ))}
    </div>
  );
};

export default V1Page;
