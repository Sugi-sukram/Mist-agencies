"use client";
import React, { JSX, useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown, Layout, Menu, Drawer } from "antd";
import Image from "next/image";
import logo from "@/assets/appIcon.png";
import { LuSquare } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaChildReaching } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import placeholdericon from "@/assets/appIcon.png";
import { usePathname, useRouter } from "next/navigation";
import { MdArrowForwardIos } from "react-icons/md";
import axiosPrivate from "@/utils/axios";
import Cookies from "universal-cookie";
import useMediaQuery from "@/component/hooks/UseMediaHook";
import { Admin } from "@prisma/client";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "/admin/app/dashboard", <MdDashboard />),
  getItem("Reach Outs", "/admin/app/reachouts", <FaChildReaching />),
  getItem("User", "/admin/app/user", <FaUsers />),
  getItem(
    "Products",
    "/admin/app/products",
    <MdOutlineProductionQuantityLimits />
  ),
];

const cookieStore = new Cookies();

const App = ({ children }: { children: JSX.Element }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const pathname = usePathname();
  const [admin, setAdmin] = useState<Admin>();
  const isMobile = useMediaQuery("(max-width: 768px)"); // Custom hook for mobile detection

  const getAdmin = async () => {
    let userId = cookieStore.get("userId");
    if (userId) {
      let res = await axiosPrivate(`/api/v1/user/${userId}`);
      if (res && res.data) {
        setAdmin(res.data.user);
      }
    } else {
      console.error("User ID not found in cookies.");
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);

  const router = useRouter();

  const sidebarContent = (
    <div className="flex-1 h-[calc(100dvh-3.5rem)]">
      <div className="flex justify-center items-center h-16">
        <Image src={logo} alt="logo" className="h-12! w-16!" />
      </div>
      <Menu
        theme="light"
        onClick={(e) => {
          if (e.key === "content") return;
          router.push(e.key);
        }}
        className="bg-white"
        defaultSelectedKeys={[`${pathname}`]}
        defaultOpenKeys={[`${pathname?.split("/")[2]}`]}
        // activeKey={`${pathname?.split("/")[2]}`}
        accessKey={`${pathname?.split("/")[2]}`}
        mode="inline"
        items={items}
      />
    </div>
  );

  return (
    <Layout style={{ height: "97dvh", backgroundColor: "white" }} className="" >
      {/* Sidebar for larger screens */}
      {!isMobile && (
        <Sider
          theme="light"
          collapsed={collapsed}
          width={230}
          className="relative flex flex-col justify-between "
          onCollapse={(value) => setCollapsed(value)}
          style={{
            height: "100vh",
            background: "white",
          }}
          breakpoint="md"
          // collapsedWidth={0}
        >
          {sidebarContent}
          <div
            className="flex items-center justify-center text-white cursor-pointer active:bg-[#3f85d6]/20 hover:bg-[#3f85d6]/50 bg-[#3f85d6] leading-0 w-5 h-5 rounded-full absolute top-4 right-[-10px]"
            onClick={() => setCollapsed(!collapsed)}
          >
            <MdArrowForwardIos
              className={`${collapsed && "rotate-180"}`}
              size={12}
            />
          </div>
          <div className="flex flex-col w-full justify-end bg-whiten p-0 my-2">
            <section className="py-0 rounded-lg">
              <div className="flex items-center gap-3">
                {!collapsed && (
                  <div className="flex items-center gap-3 px-4">
                    <Image
                      src={admin?.profileURL || placeholdericon}
                      className="rounded-full object-contain h-10"
                      width={50}
                      height={50}
                      alt="profile"
                    />
                    {admin && (
                      <div>
                        <div
                          title={admin.name || ""}
                          className="font-semibold text-sm capitalize w-32 truncate"
                        >
                          {admin?.name}
                        </div>
                        <p
                          className="text-xs w-32 truncate"
                          title={admin?.email || ""}
                        >
                          {admin?.email}
                        </p>
                      </div>
                    )}
                  </div>
                )}
                <div className={!collapsed ? "" : "w-full flex justify-center"}>
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: "3",
                          label: (
                            <p
                              onClick={() => {
                                // onLogout();
                              }}
                            >
                              Logout
                            </p>
                          ),
                        },
                      ],
                    }}
                    placement="topLeft"
                    arrow
                    overlayClassName="w-32"
                    className="border-none"
                  >
                    <Button className="text-black bg-transparent shadow-none hover:bg-none">
                      {!collapsed ? (
                        <div>
                          <SlOptionsVertical size={20} className="" />
                        </div>
                      ) : (
                        <Image
                          src={admin?.profileURL || placeholdericon}
                          className="rounded-full object-contain"
                          width={50}
                          height={50}
                          alt="profile"
                        />
                      )}
                    </Button>
                  </Dropdown>
                </div>
              </div>
            </section>
          </div>
        </Sider>
      )}

      {/* Drawer for mobile screens */}
      {/* {isMobile && (
        <>
          <div
            onClick={() => setDrawerVisible(true)}
            className="m-4"
          >
            <LuMenuSquare fontSize={30} />
          </div>
          <Drawer
            title="Menu"
            placement="left"
            onClose={() => setDrawerVisible(false)}
            visible={drawerVisible}
            bodyStyle={{ padding: 0 }}
          >
            {sidebarContent}
          </Drawer>
        </>
      )} */}
      {isMobile && (
        <>
          <div className="flex justify-between items-center m-4">
            <div className="flex items-center gap-2">
              <Image src={logo} alt="logo" className="h-8! w-10!" />
              <span className="font-semibold text-lg">Mist Agency</span>{" "}
              {/* Add your app's name here */}
            </div>
            <div onClick={() => setDrawerVisible(true)}>
              <LuSquare fontSize={30} />
            </div>
          </div>
          <Drawer
            title="Menu"
            placement="left"
            onClose={() => setDrawerVisible(false)}
            visible={drawerVisible}
            bodyStyle={{ padding: 0 }}
          >
            {sidebarContent}
          </Drawer>
        </>
      )}
      <Layout>
        <div className="h-full py-2  bg-white" id="main">
          {children}
        </div>
      </Layout>
    </Layout>
  );
};

export default App;
