import { useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker, { DateObject } from "react-multi-date-picker";

export default function DatePickerComponent({
  setShippingDate,
}: {
  setShippingDate: (date: string) => void; // تغییر نوع ورودی به string برای تاریخ ISO
}) {
  const today = new DateObject({ calendar: persian });

  const [date, setDate] = useState(today);
  setShippingDate(date.toDate().toISOString());

  // تبدیل تاریخ به فرمت ISO
  const handleChange = (date: DateObject | null) => {
    if (date !== null) {
      setDate(date);

      const isoDate = new Date(date.toDate()).toISOString(); // تبدیل به ISO
      setShippingDate(isoDate); // ارسال تاریخ به بکند در فرمت ISO
    }
  };

  return (
    <div className="w-full p-5 border border-gray-4 rounded-md flex flex-col gap-3 justify-between">
      <div className="flex justify-between w-full items-center  pb-3 border-b border-gray-4">
        <p className="text-lg flex items-center gap-2">
          <span>
            <img src="/assets/location.svg" alt="location icon" />
          </span>
          زمان ارسال
        </p>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:justify-between">
        <DatePicker
          className="p-3"
          value={date}
          onChange={handleChange}
          minDate={today}
          maxDate={new DateObject({ calendar: persian }).add(3, "days")}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
        />
        <p className="text-lg text-gray-6">
          زمان تحویل به شما{" "}
          {date.toDate().toLocaleDateString("fa-IR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          است
        </p>
      </div>
    </div>
  );
}
