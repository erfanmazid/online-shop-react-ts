import Cookies from "js-cookie";
import useGetUserInfo from "../../../../../hooks/get-user-info/useGetUserInfo";

export default function AddressComponent() {
  const { data } = useGetUserInfo(Cookies.get("id"));

  return (
    <div className="w-full p-5 border border-gray-4 rounded-md flex flex-col gap-3 justify-between">
      <div className="flex justify-between w-full items-center  pb-3 border-b border-gray-4">
        <p className="text-lg flex items-center gap-2">
          <span>
            <img src="/assets/location.svg" alt="" />
          </span>
          آدرس شما
        </p>
        <p className="text-sm text-shade-1">ویرایش آدرس</p>
      </div>
      <p className="text-lg">{data?.data.data.user.address}</p>
    </div>
  );
}
