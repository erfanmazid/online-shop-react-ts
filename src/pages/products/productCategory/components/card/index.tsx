import { Card } from "antd";

const { Meta } = Card;

const ProductCart: React.FC = () => {
  return (
    <Card
      hoverable
      className="w-[90%] mx-auto cursor-pointer md:w-[100%] lg:w-[240px]"
      //   style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="http://localhost:8000/images/products/images/products-66fbc3b9345a2a5d5d05b3f0-1727775673040-1.webp"
          className="h-40 object-contain pt-3"
        />
      }
    >
      <Meta
        title={<span className="text-lg text-primary">jsj</span>}
        description="www.instagram.com"
      />
    </Card>
  );
};

export default ProductCart;
