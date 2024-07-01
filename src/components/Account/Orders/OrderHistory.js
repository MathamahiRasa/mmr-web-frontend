import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import OrderSearch from "./OrderSearch";
import OrderFilter from "./OrderFilter";
import OrderList from "./OrderList";
import OrderHistoryList from "../../../data/OrderHistoryList.json";

const OrderHistory = () => {
  const [data, setData] = useState(OrderHistoryList.orderHistory);
  const [originalData] = useState(OrderHistoryList.orderHistory);
  const [checked, setIsChecked] = useState(new Array(data.length).fill(false));
  const [searchQueryData, setSearchQueryData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setSearchQueryData(e.target.value);
  };

  const handleCheckBox = (index) => {
    const updatedCheckState = checked.map((item, idx) =>
      idx === index ? !item : item
    );
    setIsChecked(updatedCheckState);
  };

  useEffect(() => {
    setIsLoading(true);
    const filterData = () => {
      if (checked.every((item) => !item)) {
        setData(originalData);
      } else {
        const filteredData = originalData.filter((item) => {
          const statuses = [
            "On the way" || "Processing",
            "Shipped",
            "Delivered",
            "Cancelled",
            "Returned",
          ];
          return checked.some(
            (isChecked, idx) =>
              isChecked &&
              (item.order.orderStatus === statuses[idx] ||
                (idx === 0 && item.order.orderStatus === "Processing"))
          );
        });
        setData(filteredData);
      }
    };

    const timeoutId = setTimeout(() => {
      filterData();
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [checked, originalData]);

  return (
    <div>
      <OrderSearch
        searchQueryData={searchQueryData}
        handleInputChange={handleInputChange}
      />

      <Box sx={{ display: "flex", gap: 2 }}>
        <OrderFilter handleCheckBox={handleCheckBox} />
        <Box sx={{ flexGrow: 1 }}>
          <OrderList orderHistoryList={data} isLoading={isLoading} />
        </Box>
      </Box>
    </div>
  );
};

export default OrderHistory;
