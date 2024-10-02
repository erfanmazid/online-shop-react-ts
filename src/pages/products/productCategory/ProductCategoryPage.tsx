import AllCard from "./components/allCard";
import BreadcrumbComponent from "./components/breadcrumb";
import MenuComponent from "./components/menu";
import RadioButton from "./components/radio";

export default function ProductCategoryPage() {
  return (
    <div className="myContainer my-4">
      <div className="mb-3 w-[90%] mx-auto md:p-5 md:w-full flex flex-col gap-3 md:flex-row md:gap-16">
        {
          <BreadcrumbComponent
            value={[
              { title: "خانه", link: "/" },
              { title: "دسته بندی محصولات", link: "/products/all" },
            ]}
          />
        }
        {<RadioButton />}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
        <div className="hidden md:block col-span-1 relative">
          <div className="h-full sticky top-4">{<MenuComponent />}</div>
        </div>

        <div className="col-span-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {<AllCard />}
          </div>
        </div>
      </div>
    </div>
  );
}
