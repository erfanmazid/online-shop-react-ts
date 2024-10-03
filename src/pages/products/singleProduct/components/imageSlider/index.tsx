import { Carousel, ConfigProvider } from "antd";

const ImageSlider = ({ images }: { images: string[] }) => {
  return (
    <ConfigProvider direction="rtl">
      <Carousel arrows infinite={false}>
        {images?.map((image) => (
          <div className="" key={image}>
            <img src={`http://${image}`} className="w-[400px]" alt="" />
          </div>
        ))}
      </Carousel>
      {/* استایل‌های سفارشی برای فلش‌ها */}
      <style jsx global>{`
        .ant-carousel .slick-prev::after,
        .ant-carousel .slick-next::after {
          color: #417f56 !important; /* تغییر رنگ فلش‌ها */
          font-size: 32px !important; /* تغییر اندازه فلش‌ها */
          width: 20px !important; /* تنظیم عرض فلش‌ها */
          height: 20px !important; /* تنظیم ارتفاع فلش‌ها */
          padding: 10px;
        }

        .ant-carousel .slick-prev:hover,
        .ant-carousel .slick-next:hover {
          color: #417f56 !important; /* تغییر رنگ در حالت hover */
        }

        .slick-arrow slick-next {
          width: 48px !important; /* تنظیم عرض فلش‌ها */
          height: 48px !important; /* تنظیم ارتفاع فلش‌ها */
        }

        .slick-dots li button {
          background-color: #353535 !important; /* رنگ نقاط غیر فعال */
        }

        .slick-dots li.slick-active button {
          background-color: #417f56 !important; /* رنگ نقطه فعال */
        }

        .slick-dots {
          bottom: 10px !important; /* تغییر محل نقاط (اختیاری) */
        }
      `}</style>
    </ConfigProvider>
  );
};

export default ImageSlider;
