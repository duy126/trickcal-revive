import React, { useState } from "react";
import { Button, Dropdown, Space } from "antd";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const HeaderPage = () => {
  return (
    <div className="sticky top-0 bg-green-700 z-30">
      <div className="flex" style={{ height: "50px" }}>
        <NavLink
          to={"/"}
          className="font-extrabold text-yellow-400 text-4xl mx-20"
        >
          trickcal revive wiki
        </NavLink>
        <Space>
          <Space wrap>
            <Dropdown
              menu={{
                items: [
                  {
                    key: "1",
                    label: <NavLink to={"tong-do"}>Tông đồ ánh sáng</NavLink>,
                  },
                  {
                    key: "2",
                    label: <NavLink to={"tong-do"}>Tông đồ bóng tối</NavLink>,
                  },
                  {
                    key: "3",
                    label: <NavLink to={"tong-do"}>Tông đồ lửa</NavLink>,
                  },
                  {
                    key: "4",
                    label: <NavLink to={"tong-do"}>Tông đồ nước</NavLink>,
                  },
                  {
                    key: "5",
                    label: <NavLink to={"tong-do"}>Tông đồ cỏ</NavLink>,
                  },
                ],
              }}
            >
              <Button type="text" className="text-yellow-300">
                Tông đồ <FontAwesomeIcon icon={faAngleDown} />
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items: [
                  {
                    key: "1",
                    label: <NavLink>Aside 2*</NavLink>,
                  },
                  {
                    key: "2",
                    label: <NavLink>Aside 3*</NavLink>,
                  },
                ],
              }}
            >
              <Button type="text">
                Aside <FontAwesomeIcon icon={faAngleDown} />
              </Button>
            </Dropdown>
          </Space>
        </Space>
      </div>
    </div>
  );
};

export default HeaderPage;
