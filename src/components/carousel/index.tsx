import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#417F56",
  maxHeight: "400px",
  padding: "20px",
};

const CarouselComponent: React.FC = () => {
  return (
    <Carousel arrows infinite={true} autoplay autoplaySpeed={5000}>
      <div>
        <img style={contentStyle} src="/image/slider/2.png" alt="" />
      </div>
      <div>
        <img style={contentStyle} src="/image/slider/1.png" alt="" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
