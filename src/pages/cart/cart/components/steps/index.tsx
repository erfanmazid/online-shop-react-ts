import { Steps } from "antd";
import {
  WalletOutlined,
  ShoppingCartOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
import "./steps-custom.css";

const StepsComponent = ({ currentNum }: { currentNum: number }) => (
  <Steps
    className="custom-steps"
    current={currentNum}
    items={[
      {
        title: "سبد خرید",
        icon: <ShoppingCartOutlined />,
      },
      {
        title: "تکمیل اطلاعات",
        icon: <CheckSquareOutlined />,
      },
      {
        title: "پرداخت",
        icon: <WalletOutlined />,
      },
    ]}
  />
);

export default StepsComponent;
