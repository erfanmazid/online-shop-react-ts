import { useEffect, useState } from "react";
import ProductTable from "../../components/tabls/product/ProductsTable";
import httpRequest from "../../services/http-request";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

interface UpdatedRow {
  key: string;
  price: number;
  quantity: number;
}

export default function ProductsPage() {
  const [hasChanges, setHasChanges] = useState(false);
  const [updatedRows, setUpdatedRows] = useState<UpdatedRow[]>([]);
  const [resetEditState, setResetEditState] = useState(false);

  const qc = useQueryClient();

  const handleSave = async () => {
    try {
      const requests = updatedRows.map((row) =>
        httpRequest.patch(`/api/products/${row.key}`, {
          price: row.price,
          quantity: row.quantity,
        })
      );

      await Promise.all(requests);
      toast.success("تغییرات با موفقیت اعمال شد");
      setHasChanges(false);
      qc.invalidateQueries({ queryKey: ["products"] });
      setResetEditState(true); // ریست کردن وضعیت ویرایش
      setTimeout(() => setResetEditState(false), 100); // بازگردانی وضعیت resetEditState به false
    } catch (error) {
      console.error("خطا در ارسال داده‌ها:", error);
      toast.error("خطایی رخ داد");
    }
  };

  const handleCancel = () => {
    setUpdatedRows([]); // یا هر چیزی که نیاز باشد
    setHasChanges(false); // تغییرات را لغو کن
    setResetEditState(false); // ویرایش‌ها را لغو کن
  };

  const onTableChange = (updatedRow: UpdatedRow) => {
    setHasChanges(true);
    setUpdatedRows((prev) => {
      const index = prev.findIndex((row) => row.key === updatedRow.key);
      if (index !== -1) {
        const updated = [...prev];
        updated[index] = updatedRow;
        return updated;
      } else {
        return [...prev, updatedRow];
      }
    });
  };

  // اضافه کردن event listener برای کیبورد
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && hasChanges) {
        handleSave();
      } else if (event.key === "Escape") {
        handleCancel();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasChanges, updatedRows]);

  return (
    <div className="myContainer flex flex-col gap-5 p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-primary">موجودی و قیمت ها</h1>
        <button
          className={`bg-primary text-[#fff] text-lg py-1 px-4 rounded-md ${
            !hasChanges ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!hasChanges}
          onClick={handleSave}
        >
          ذخیره
        </button>
      </div>
      <ProductTable
        onTableChange={onTableChange}
        resetEditState={resetEditState}
      />
    </div>
  );
}
