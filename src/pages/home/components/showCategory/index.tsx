import { Link } from "react-router-dom";
import { CategoriesEntity } from "../../../../types/category";

export default function ShowCategory({ data }: { data: CategoriesEntity[] }) {
  return (
    <div className="grid grid-cols-2 gap-5 px-2 md:flex md:justify-between w-full">
      {data?.map((cat) => (
        <Link to={`/products/all?category=${cat._id}`} key={cat._id}>
          <div
            key={cat._id}
            className="p-5 text-[#fff] bg-primary rounded-md flex flex-col gap-2 justify-center items-center text-center"
          >
            <h3 className="text-xl">{cat.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
