import CarouselComponent from "../../components/carousel";
import { useGetCategory } from "../../hooks/get-category/useGetCategory";
import { CategoriesEntity } from "../../types/category";

export default function HomePage() {
  const { data: category } = useGetCategory();
  console.log(category?.data.data.categories);

  return (
    <main className="flex w-full flex-col gap-10">
      <CarouselComponent />
      <div className="myContainer flex-col flex gap-5 w-full">
        <div className="flex justify-around w-full">
          {category?.data.data.categories.map((cat: CategoriesEntity) => (
            <div
              key={cat._id}
              className="p-5 text-[#fff] bg-primary rounded-md flex flex-col gap-2"
            >
              <img
                src={`http://localhost:8000/images/categories/icons/${cat.icon}`}
                alt={cat.name}
              />
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
