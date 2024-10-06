import CarouselComponent from "../../components/carousel";
import { useGetCategory } from "../../hooks/get-category/useGetCategory";
import ShowCategoryProducts from "./components/categoryProducts";
import ShowCategory from "./components/showCategory";

export default function HomePage() {
  const { data: category, isLoading } = useGetCategory();

  return (
    <main className="flex w-full flex-col gap-6 p-4 bg-gray-50">
      {/* Carousel section */}
      <section className="relative rounded-lg shadow-lg overflow-hidden">
        <CarouselComponent />
      </section>

      {/* Categories Section */}
      <section className="myContainer flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-semibold text-primary">
            دسته بندی ها:
          </h2>
        </div>
        <ShowCategory data={category?.data.data.categories} />

        {/* Featured Products */}
        <div>
          <ShowCategoryProducts
            data={category?.data.data.categories}
            length={3}
            isLoading={isLoading}
          />
        </div>
      </section>
    </main>
  );
}
