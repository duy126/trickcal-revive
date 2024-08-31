import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { tongDoServices } from "../../services/tongDoService";
import { useDispatch, useSelector } from "react-redux";

import { Image } from "antd";
import { upLoadTongDoChiTiet } from "../../redux/tongDo/tongDoSlice";

const TongDoChiTietPage = () => {
  let dispatch = useDispatch();
  let { tongDoChiTiet } = useSelector((state) => state.tongDoReducer);
  let { danhThuong, kiNang, tuyetKi } = tongDoChiTiet;
  // solve bug
  if (danhThuong == undefined) {
    danhThuong = [];
    kiNang = [];
    tuyetKi = [];
  }
  let id = useParams().idChiTiet;
  let showData = (data) => {
    console.log(data);
  };
  let getData = async () => {
    let data = await tongDoServices
      .getDataChiTiet(id)
      .then((res) => {
        console.log("🐧🐧🐧 ~ .then ~ res:", res.data[id]);
        dispatch(upLoadTongDoChiTiet(res.data[id]));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [id]);
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
            <h1 className="text-4xl mb-5">{tongDoChiTiet.ten}</h1>
            <div className="flex mb-3">
              <Image
                style={{ width: "300px" }}
                src={tongDoChiTiet.image}
              ></Image>
              <div className="ms-10" style={{ width: "75%" }}>
                <h1 className="mb-5">Hệ: {tongDoChiTiet.he}</h1>
                <h1>{tongDoChiTiet.thongTinChiTiet}</h1>
              </div>
            </div>
            <h1 className="text-4xl mb-5">Bộ kĩ năng</h1>
            {/* đánh thường */}
            <div className="flex mb-5">
              <Image
                style={{ width: "150px" }}
                src={danhThuong.hinhAnh}
              ></Image>
              <div className="ms-10" style={{ width: "75%" }}>
                <h1 className="font-extrabold text-lime-500">ĐÁNH THƯỜNG</h1>
                <h1>{danhThuong.thongTin1}</h1>
                <h1>{danhThuong.thongTin2}</h1>
                <h1>{danhThuong.thongTin3}</h1>
                <h1>{danhThuong.thongTin4}</h1>
                <h1>{danhThuong.thongTin5}</h1>
                <h1>{danhThuong.thongTin6}</h1>
                <h1>{danhThuong.thongTin7}</h1>
                <h1>{danhThuong.thongTin8}</h1>
              </div>
            </div>
            {/* kĩ năng */}
            <div className="flex mb-5">
              <Image style={{ width: "150px" }} src={kiNang.hinhAnh}></Image>
              <div className="ms-10" style={{ width: "75%" }}>
                {/* thông tin kĩ năng */}
                <h1 className="font-extrabold text-lime-500">KĨ NĂNG</h1>
                <h1>{kiNang.thongTin1}</h1>
                <h1>{kiNang.thongTin2}</h1>
                <h1>{kiNang.thongTin3}</h1>
                <h1>{kiNang.thongTin4}</h1>
                <h1>{kiNang.thongTin5}</h1>
                <h1>{kiNang.thongTin6}</h1>
                <h1>{kiNang.thongTin7}</h1>
                <h1>{kiNang.thongTin8}</h1>
              </div>
            </div>
            {/* tuyệt kĩ */}
            <div className="flex mb-5">
              <Image style={{ width: "150px" }} src={tuyetKi.hinhAnh}></Image>
              <div className="ms-10" style={{ width: "75%" }}>
                {/* thông tin tuyệt kĩ*/}
                <h1 className="font-extrabold text-lime-500">TUYỆT KĨ</h1>
                <h1>{tuyetKi.thongTin1}</h1>
                <h1>{tuyetKi.thongTin2}</h1>
                <h1>{tuyetKi.thongTin3}</h1>
                <h1>{tuyetKi.thongTin4}</h1>
                <h1>{tuyetKi.thongTin5}</h1>
                <h1>{tuyetKi.thongTin6}</h1>
                <h1>{tuyetKi.thongTin7}</h1>
                <h1>{tuyetKi.thongTin8}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TongDoChiTietPage;
