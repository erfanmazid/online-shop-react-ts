import { Card } from "antd";
import { ProductsEntity } from "../../types/products";
import { Link } from "react-router-dom";

const { Meta } = Card;

const ProductCart = ({ item }: { item: ProductsEntity }) => {
  return (
    <Link to={`/product/${item._id}`}>
      <Card
        hoverable
        className="mx-auto cursor-pointer w-[240px]"
        //   style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src={`http://${item.images?.[0]}`}
            className="h-40 object-contain pt-3"
          />
        }
      >
        <Meta
          title={<span className="text-[16px]">{item.name}</span>}
          description={
            <p className="text-lg font-bold text-tint-6">
              {item.price.toLocaleString("fa-IR")} تومان
            </p>
          }
        />
      </Card>
    </Link>
  );
};

export default ProductCart;
