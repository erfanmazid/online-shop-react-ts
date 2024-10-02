import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./custom-radio.css"; // اضافه کردن فایل استایل سفارشی

const options = [
  { label: "ارزان ترین", value: "price" },
  { label: "گران ترین", value: "-price" },
  { label: "جدید ترین", value: "-createdAt" },
];

const RadioButton: React.FC = () => {
  const [value, setValue] = useState("Apple");
  const [serchParams, setSearchParams] = useSearchParams();

  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value);
    serchParams.set("sort", value);
    setSearchParams(serchParams);
  };

  return (
    <>
      <Radio.Group
        options={options}
        onChange={onChange1}
        value={serchParams.get("sort") || value}
        className="custom-radio" // اضافه کردن کلاس سفارشی
      />
    </>
  );
};

export default RadioButton;
