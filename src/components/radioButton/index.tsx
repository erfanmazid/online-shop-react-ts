import { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { useSearchParams } from "react-router-dom";

const optionsWithDisabled = [
  { label: "همه", value: "all" },
  { label: "تحویل شده", value: "delivered" },
  { label: "تحویل نشده", value: "undelivered" },
];

const RadioButton: React.FC = () => {
  const [serchParams, setSearchParams] = useSearchParams();
  const params = serchParams.get("status");
  const [value, setValue] = useState(params || "all");

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    serchParams.set("status", value);
    setSearchParams(serchParams);
    setValue(value);
  };

  return (
    <>
      <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange}
        value={value}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};

export default RadioButton;
