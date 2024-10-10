import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { useState } from "react";
import "./custom-radio.css"; // اضافه کردن فایل استایل سفارشی

const options = [
  { label: "ارسال توسط پیک", value: "120000" },
  { label: "ارسال توسط پست", value: "70000" },
];

const ShippingRadioButton = ({
  setShipping,
}: {
  setShipping: (shipping: number) => void;
}) => {
  const [value, setValue] = useState("Apple");

  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value);
    setShipping(Number(value));
  };

  return (
    <>
      <Radio.Group
        options={options}
        onChange={onChange1}
        value={value}
        className="custom-radio"
      />
    </>
  );
};

export default ShippingRadioButton;
