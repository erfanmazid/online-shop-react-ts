import CarouselComponent from "../../components/carousel";
import { useGetCategory } from "../../hooks/get-category/useGetCategory";
import ShowCategory from "./components/showCategory";

export default function HomePage() {
  const { data: category } = useGetCategory();

  return (
    <main className="flex w-full flex-col gap-10">
      <CarouselComponent />
      <div className="myContainer flex-col flex gap-5 w-full">
        <div className="flex justify-around w-full">
          {<ShowCategory data={category?.data.data.categories} />}
        </div>
      </div>
    </main>
  );
}
