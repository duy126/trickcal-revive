import { Card, Image } from "antd";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { tongDoServices } from "../../services/tongDoService";
import { useDispatch, useSelector } from "react-redux";
import { upLoadTongDo } from "../../redux/tongDo/tongDoSlice";

const TongDoPage = () => {
  let dispatch = useDispatch();
  let { tongDo } = useSelector((state) => state.tongDoReducer);
  let hiendata = async () => {
    let dataTongDo = await tongDoServices
      .getData()
      .then((res) => {
        dispatch(upLoadTongDo(res.data));
        return res;
      })
      .catch((err) => {
        return err;
      });
    console.log("🐧🐧🐧 ~ TongDoPage ~ dataTongDo:", dataTongDo.data);
  };
  // render giao dien
  const renderTongDo = (array) => {
    if (array == undefined) {
      return;
    }
    return array.map((items, id) => {
      return (
        <NavLink key={id} to={`../chiTiet-page/${items.ten}`}>
          <Card
            className="bg-orange-400 border-orange-400"
            cover={
              <img
                alt="example"
                src={items.image}
                style={{ height: "300px" }}
                preview={false}
              />
            }
          >
            <h2 className="text-3xl text-orange-700 font-medium">
              {items.ten}
            </h2>
          </Card>
        </NavLink>
      );
    });
  };

  useEffect(() => {
    hiendata();
  }, []);

  return (
    <div className="relative top-0 " style={{}}>
      <div
        // bg-color
        className="bg-orange-400 py-5 "
        style={{ width: "100%", height: "100%" }}
      >
        <div
          // bg-color cover text
          className="mx-auto p-5 bg-orange-900 rounded-3xl "
          style={{ width: "60%" }}
        >
          {/* text-color */}
          <div className=" text-white ">
            {/* content */}
            <h1 className="text-4xl mb-5">Tông đồ là gì?</h1>
            <p className="mb-5">
              Tông đồ là các bé loli đi theo chúng ta trong vũ trụ elias. Trong
              game mỗi bé sẽ đi theo 1 hệ là Ánh sáng, Bóng Tối, Cỏ, Nước và Lửa
            </p>
            <Image
              className="rounded-3xl"
              src="https://external-preview.redd.it/trickcal-character-interaction-dungeon-menu-and-gameplay-v0-pkRSVjjWQbmqdVK9HkdSCUWhv2BQXtLPsgO_VtgH2pU.png?format=pjpg&auto=webp&s=b3bf7f1ac8928d6e875bf0779ab2d2a9665a1491"
              preview={false}
            ></Image>
            {/* Tông đồ hệ nước */}
            <h1 className="text-4xl mb-5">Tông đồ hệ nước</h1>
            <div className="grid-cols-4 grid gap-5">
              {renderTongDo(tongDo.heNuoc)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TongDoPage;
