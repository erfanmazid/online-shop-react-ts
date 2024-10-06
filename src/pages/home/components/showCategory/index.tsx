import { Link } from "react-router-dom";
import { CategoriesEntity } from "../../../../types/category";

export default function ShowCategory({ data }: { data: CategoriesEntity[] }) {
  console.log(data?.[6]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2 w-full">
      {data?.map((cat) => (
        <Link to={`/products/all?category=${cat._id}`} key={cat._id}>
          <div
            key={cat._id}
            className="group p-5 bg-gradient-to-r from-tint-4 to-primary text-[#fff] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            {/* Placeholder for an icon or image */}
            <div className="w-16 h-16 mb-4 bg-[#fff] bg-opacity-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <img
                src={`/icon/${cat.slugname}.png`}
                alt={cat.name}
                className="w-10 h-10"
              />
            </div>

            {/* Category Name */}
            <h3 className="text-lg font-bold group-hover:text-tint-1 transition-colors">
              {cat.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
