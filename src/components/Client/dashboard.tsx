import React, { useState, useRef } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaUsers,
  FaBuilding,
  FaTruck,
  FaFileAlt,
  FaBars,
  FaEye,
} from "react-icons/fa";

import { Responsive } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import {
  FaSearch,
  FaChevronDown,
  FaEllipsisH,
  FaPlus,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { Pencil } from "lucide-react";

import user from "../../assets/user.png";
import n1 from "../../assets/n1.png";
import n2 from "../../assets/guybook.png";
import n3 from "../../assets/n3.png";
import n4 from "../../assets/n4.png";
import n5 from "../../assets/n5.png";
import n6 from "../../assets/n6.png";
import greendashboard from "../../assets/greendashboard.png";
import clients from "../../assets/clients.png";
import companies from "../../assets/companies.png";
import vendors from "../../assets/vendors.png";
import reports from "../../assets/reports.png";
import greenman from "../../assets/greenman.png";
import bluecompany from "../../assets/bluecompany.png";
import bluevendor from "../../assets/bluevendor.png";
import orangehourglass from "../../assets/orangehourglass.png";
import money from "../../assets/money.png";
import invoietroll from "../../assets/invoicetroll.png";
import useradd from "../../assets/useradd.png";
import addplus from "../../assets/addplus.png";
import userplus from "../../assets/userplus.png";
import usersub from "../../assets/usersub.png";

const GridLayout = Responsive;

/* =========================
   MENU CONFIGURATION
========================= */

const mainMenuLabels = {
  n1: "Marketplace",
  n2: "Contacts",
  n3: "Business",
  n4: "Users & Roles",
  n5: "Settings",
  n6: "Logout",
};

const menuConfig = {
  n1: {
    title: "Contact Management",
    items: [
      { label: "List 1", key: "list1", icon: <FaBars /> },
      { label: "List 2", key: "list2", icon: <FaBars /> },
      { label: "List 3", key: "list3", icon: <FaBars /> },
      { label: "List 4", key: "list4", icon: <FaBars /> },
      { label: "List 5", key: "list5", icon: <FaBars /> },
    ],
  },

  n2: {
    title: "CONTACTS",
    items: [
      {
        label: "Dashboard",
        key: "dashboard",
        icon: <img src={greendashboard} className="w-5 h-5" />,
      },
      {
        label: "Clients",
        key: "clients",
        icon: <img src={clients} className="w-5 h-5" />,
      },
      {
        label: "Companies",
        key: "companies",
        icon: <img src={companies} className="w-5 h-5" />,
      },
      {
        label: "Vendors",
        key: "vendors",
        icon: <img src={vendors} className="w-5 h-5" />,
      },
      {
        label: "Reports",
        key: "reports",
        icon: <img src={reports} className="w-5 h-5" />,
      },
    ],
  },

  n3: {
    title: "Module 3",
    items: [
      { label: "Option A", key: "optA", icon: <FaEye /> },
      { label: "Option B", key: "optB", icon: <FaEye /> },
    ],
  },

  n4: {
    title: "Module 4",
    items: [{ label: "Feature 1", key: "feature1", icon: <FaBars /> }],
  },

  n5: {
    title: "Module 5",
    items: [{ label: "Feature 2", key: "feature2", icon: <FaBars /> }],
  },

  n6: {
    title: "Module 6",
    items: [{ label: "Feature 3", key: "feature3", icon: <FaBars /> }],
  },
};

/* =========================
   MAIN COMPONENT
========================= */

export default function Dashboard() {
  const [activeMain, setActiveMain] = useState("n1");
  const [activePage, setActivePage] = useState("list1");
  const [isMainExpanded, setIsMainExpanded] = useState(true);
  const [isSubExpanded, setIsSubExpanded] = useState(true);

  /* =========================
     DASHBOARD GRID CONTENT
  ========================= */

  const clientsData = [
    { name: "Eva Thompson", value: 40 },
    { name: "Jane Doe", value: 85 },
    { name: "Anthony Williams", value: 60 },
    { name: "James Bond", value: 10 },
    { name: "Tony Stark", value: 80 },
  ];

  const revenueWeek = [
    { name: "Mon", value: 10 },
    { name: "Tue", value: 30 },
    { name: "Wed", value: 50 },
    { name: "Thu", value: 70 },
    { name: "Fri", value: 20 },
    { name: "Sat", value: 40 },
    { name: "Sun", value: 60 },
  ];

  const estimateData = [
    { name: "Sent", value: 45000 },
    { name: "Pending", value: 80000 },
    { name: "Approved", value: 30000 },
  ];

  const gaugeData = [
    { name: "Collected", value: 47 },
    { name: "Remaining", value: 53 },
  ];

  const dashboardContent = (
    <div className="space-y-6">
      {/* TOP STATS */}
      <div className="bg-white p-6 shadow">
        <h3 className="font-semibold">Dashboard</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <img src={greenman} className="w-5 h-5" />
              {/* <span className="text-green-500">👥</span> */}
              <p className="text-gray-600 font-medium">Total Clients</p>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">320</h2>
            <div>
              <span className="text-green-500 text-sm">↑ 0%</span>
              <p className="text-xs text-gray-400">vs. Last period</p>
            </div>
          </div>
          <div className="mt-4 border rounded-xl p-3 flex justify-between text-sm bg-white">
            <div className="text-center w-1/2">
              <p className="font-semibold">275</p>
              <p className="text-gray-500 text-xs">Active</p>
            </div>
            <div className="text-center w-1/2">
              <p className="font-semibold">45</p>
              <p className="text-gray-500 text-xs">Inactive</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <img src={bluecompany} className="w-5 h-5" />
              {/* <span className="text-blue-500">🏢</span> */}
              <p className="text-gray-600 font-medium">Total Companies</p>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">100</h2>
            <div>
              <span className="text-green-500 text-sm">↑ 0%</span>
              <p className="text-xs text-gray-400">vs. Last period</p>
            </div>
          </div>

          <div className="mt-4 border rounded-xl p-3 flex justify-between text-sm bg-white">
            <div className="text-center w-1/2">
              <p className="font-semibold">60</p>
              <p className="text-gray-500 text-xs">Active</p>
            </div>
            <div className="text-center w-1/2">
              <p className="font-semibold">40</p>
              <p className="text-gray-500 text-xs">Inactive</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <img src={bluevendor} className="w-5 h-5" />
              {/* <span className="text-indigo-500">🏪</span> */}
              <p className="text-gray-600 font-medium">Total Vendors</p>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">25</h2>
            <div>
              <span className="text-green-500 text-sm">↑ 0%</span>
              <p className="text-xs text-gray-400">vs. Last period</p>
            </div>
          </div>

          <div className="mt-4 border rounded-xl p-3 flex justify-between text-sm bg-white">
            <div className="text-center w-1/2">
              <p className="font-semibold">20</p>
              <p className="text-gray-500 text-xs">Active</p>
            </div>
            <div className="text-center w-1/2">
              <p className="font-semibold">5</p>
              <p className="text-gray-500 text-xs">Inactive</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <img src={orangehourglass} className="w-5 h-5" />
              {/* <span className="text-orange-500">⏳</span> */}
              <p className="text-gray-600 font-medium">Pending Approvals</p>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">20</h2>
            {/* <div>
              <span className="text-green-500 text-sm">↑ 0%</span>
              <p className="text-xs text-gray-400">vs. Last period</p>
            </div> */}
          </div>

          <div className="mt-4 border rounded-xl p-3 flex justify-between text-sm bg-white">
            <div className="text-center w-1/2">
              <p className="font-semibold">12</p>
              <p className="text-gray-500 text-xs">Estimates</p>
            </div>
            <div className="text-center w-1/2">
              <p className="font-semibold">6</p>
              <p className="text-gray-500 text-xs">Other</p>
            </div>
          </div>
        </div>
      </div>
      {/* REVENUE + INVOICE */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* LEFT CARD */}
        <div className="bg-white p-5 rounded-xl shadow col-span-1 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-3">
            <img src={money} className="w-5 h-5" />
            <p className="text-gray-600 font-medium">Total Revenue YTD</p>
          </div>

          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-bold">₵50K</h2>

            <div className="flex flex-col items-end">
              <span className="text-green-500 text-sm">↑ 0.05%</span>
              <p className="text-xs text-gray-400">vs. Last month: ₵45K</p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white p-5 rounded-xl shadow col-span-3">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <img src={invoietroll} className="w-5 h-5" />
            <p className="text-gray-600 font-medium">Total Invoices</p>
          </div>

          {/* 3 Equal Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-gray-200">
            {/* Issued */}
            <div className="px-4 flex flex-col gap-2">
              <h2 className="text-3xl font-bold">320</h2>
              <div className="flex justify-between items-center">
                <p className="text-green-500">Issued</p>
                <p className="text-xs text-gray-400">Total Amount: ₵50K</p>
              </div>
            </div>

            {/* Outstanding */}
            <div className="px-4 flex flex-col gap-2">
              <h2 className="text-3xl font-bold">75</h2>
              <div className="flex justify-between items-center">
                <p className="text-orange-500">Outstanding</p>
                <p className="text-xs text-gray-400">Total Amount: ₵50K</p>
              </div>
            </div>

            {/* Overdue */}
            <div className="px-4 flex flex-col gap-2">
              <h2 className="text-3xl font-bold">10</h2>
              <div className="flex justify-between items-center">
                <p className="text-red-500">Overdue</p>
                <p className="text-xs text-gray-400">Total Amount: ₵50K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ESTIMATE SUMMARY + PAYMENT RATE */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow xl:col-span-2">
          <h3 className="font-semibold mb-4">Estimates Summary</h3>

          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={estimateData} layout="vertical">
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="value" radius={[0, 10, 10, 0]}>
                <Cell fill="#16a34a" />
                <Cell fill="#ef4444" />
                <Cell fill="#f97316" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center">
          <h3 className="font-semibold mb-4">Payment Collection Rate</h3>

          <PieChart width={200} height={200}>
            <Pie
              data={gaugeData}
              innerRadius={70}
              outerRadius={90}
              dataKey="value"
            >
              <Cell fill="#ef4444" />
              <Cell fill="#eee" />
            </Pie>
          </PieChart>

          <span className="text-2xl font-bold -mt-28">47%</span>
        </div>
      </div>
      {/* REVENUE + CLIENT CHARTS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Revenue Breakdown</h3>

          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={revenueWeek}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#16a34a"
                fill="#bbf7d0"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Top Performing Clients</h3>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={clientsData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#2563eb" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* CONVERSION RATE */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-6">
          Estimate to Invoice Conversion Rate
        </h3>

        <div className="grid grid-cols-3 text-center">
          <div>
            <h2 className="text-2xl font-bold">100</h2>
            <p className="text-gray-500 text-sm">Total Estimates Sent</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">70</h2>
            <p className="text-gray-500 text-sm">Approved Estimates</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">50</h2>
            <p className="text-gray-500 text-sm">Converted to Invoices</p>
          </div>
        </div>

        <div className="mt-6 h-4 bg-gray-200 rounded">
          <div className="h-4 bg-green-500 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );

  /* =========================
     PAGE RENDERER
  ========================= */

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return dashboardContent;
      case "clients":
        return <ClientsTable />;
      case "companies":
        return <div className="bg-white p-4 rounded shadow">Company Page</div>;
      case "vendors":
        return <div className="bg-white p-4 rounded shadow">Vendor Page</div>;
      case "reports":
        return <div className="bg-white p-4 rounded shadow">Reports Page</div>;
      default:
        return (
          <div className="bg-white p-4 rounded shadow">{activePage} Page</div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* FIRST SIDEBAR */}
      <div
        className={`relative group flex flex-col bg-gray-100 transition-all duration-300 ${
          isMainExpanded ? "w-48" : "w-16"
        }`}
      >
        {/* TOGGLE BUTTON */}
        <button
          onClick={() => setIsMainExpanded(!isMainExpanded)}
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-50 bg-white border rounded-full shadow p-1 opacity-0 group-hover:opacity-100 transition"
        >
          {isMainExpanded ? <FaChevronLeft /> : <FaChevronRight />}
        </button>

        <div className="bg-white shadow flex flex-col justify-between h-full p-2">
          {/* TOP ICONS */}
          <div className="flex flex-col gap-4 mt-20">
            {[n1, n2, n3, n4].map((icon, index) => {
              const key = `n${index + 1}`;
              return (
                <div
                  key={key}
                  className={`flex items-center gap-3 cursor-pointer p-2 rounded ${
                    activeMain === key ? "bg-green-600 text-[#0D673B]" : ""
                  }`}
                  onClick={() => {
                    setActiveMain(key);
                    setActivePage(menuConfig[key].items[0].key);
                  }}
                >
                  <img src={icon} className="w-8 h-8" />
                  {isMainExpanded && (
                    <span
                      className={`text-sm ${
                        activeMain === key ? "text-[#0D673B]" : "text-gray-700"
                      }`}
                    >
                      {mainMenuLabels[key]}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* BOTTOM ICONS */}
          <div className="flex flex-col gap-4 mb-6">
            {[n5, n6].map((icon, index) => {
              const key = `n${index + 5}`;
              return (
                <div
                  key={key}
                  className={`flex items-center gap-3 cursor-pointer p-2 rounded ${
                    activeMain === key ? "bg-green-600 text-[#0D673B]" : ""
                  }`}
                  onClick={() => {
                    setActiveMain(key);
                    setActivePage(menuConfig[key].items[0].key);
                  }}
                >
                  <img src={icon} className="w-8 h-8" />

                  {isMainExpanded && (
                    <span
                      className={`text-sm ${
                        activeMain === key ? "text-[#0D673B]" : "text-gray-700"
                      }`}
                    >
                      {mainMenuLabels[key]}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECOND SIDEBAR */}
      <div className="relative group">
        {/* TOGGLE BUTTON */}
        <button
          onClick={() => setIsSubExpanded(!isSubExpanded)}
          className="absolute -right-3 top-60 z-50 bg-white border rounded-full shadow p-1 opacity-0 group-hover:opacity-100 transition"
        >
          {isSubExpanded ? <FaChevronLeft /> : <FaChevronRight />}
        </button>

        <div className="flex flex-col gap-4 bg-white shadow transition-all duration-300">
          <div className="p-4 font-medium text-base text-gray-100">
            {menuConfig[activeMain].title}
          </div>

          <Menu>
            {menuConfig[activeMain].items.map((item) => (
              <MenuItem
                key={item.key}
                icon={item.icon}
                onClick={() => setActivePage(item.key)}
                className={`${
                  activePage === item.key ? "bg-green-200 text-white" : ""
                }`}
              >
                {isSubExpanded && item.label}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-6 capitalize">{activePage}</h1>
        {renderPage()}
      </div>
    </div>
  );
}

/* =========================
   CLIENT TABLE
========================= */
function ClientsTable() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(0);

  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const steps = [
    "General Information",
    "Representative Details",
    "Additional Information",
    "Communication Options",
    "Shipping Address",
    "Billing Address",
    "Description",
  ];
  const clients = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: ["John Carter", "Eva Thompson", "Tony Stark", "Jane Doe"][i % 4],
    email: `client${i + 1}@mail.com`,
    phone: "+233 20 123 4567",
    address: "Accra, Ghana",
    website: "company.com",
    manager: "Admin",
    avatar: `https://i.pravatar.cc/40?img=${i + 10}`,
  }));
  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };
  return (
    <div className="bg-white text-gray-800 p-6 rounded-xl shadow">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-black">Clients</h2>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-black font-normal"
        >
          <img src={useradd} className="w-5 h-5" /> Add Client
        </button>
      </div>

      <hr className="border-gray-200 mb-6" />

      {/* FILTER BAR */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {/* SEARCH */}
        <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 w-60 bg-white">
          <input
            className="outline-none w-full text-sm"
            placeholder="Search for client name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="mr-2 text-gray-400" />
        </div>

        {/* FILTER DROPDOWNS */}
        {/* {[1, 2, 3].map((f) => ( */}
        <div
          // key={opt}
          className="flex items-center border border-gray-300 rounded-xl px-4 py-2 w-40 justify-between text-sm bg-white cursor-pointer"
        >
          All Statuses
          <FaChevronDown />
        </div>
        <p>Sort By:</p>
        <div
          // key={opt}
          className="flex items-center border border-gray-300 rounded-xl px-4 py-2 w-40 justify-between text-sm bg-white cursor-pointer"
        >
          Newest
          <FaChevronDown />
        </div>

        <p>Show:</p>
        <div
          // key={opt}
          className="flex items-center border border-gray-300 rounded-xl px-4 py-2 w-40 justify-between text-sm bg-white cursor-pointer"
        >
          20
          <FaChevronDown />
        </div>
        {/* ))} */}

        {/* OPTIONS BUTTON */}
        <button className="border border-green-300 p-3 rounded hover:bg-green-100">
          <FaEllipsisH className="text-green-500" />
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 w-10">
                <input type="checkbox" />
              </th>

              <th className="text-left p-3">Client Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Phone Number</th>
              <th className="text-left p-3">Address Line</th>
              <th className="text-left p-3">Website</th>
              <th className="text-left p-3">Client Manager</th>
            </tr>
          </thead>

          <tbody>
            {clients.map((c) => (
              <tr key={c.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">
                  <input type="checkbox" />
                </td>

                <td className="p-3 flex items-center gap-3">
                  <img src={c.avatar} className="w-8 h-8 rounded-full" />
                  {c.name}
                </td>

                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.phone}</td>
                <td className="p-3">{c.address}</td>
                <td className="p-3">{c.website}</td>
                <td className="p-3">{c.manager}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
        <p>Showing 20 of 100</p>

        <div className="flex gap-2">
          <button className="border border-gray-300 w-8 h-8 rounded flex items-center justify-center bg-green-100 text-green-700">
            1
          </button>

          <button className="border border-gray-300 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-100">
            2
          </button>

          <button className="border border-gray-300 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-100">
            3
          </button>

          <button className="border border-gray-300 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-100">
            4
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
          <div className="bg-white w-[90%] max-w-6xl h-[90vh] rounded-2xl p-6 flex flex-col">
            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-1">
                {/* <div className="bg-green-100 p-3 rounded-full"> */}
                {/* <span className="text-green-600 text-xl">+</span> */}
                <img src={addplus} className="w-10 h-10" />
                {/* </div> */}
                <h2 className="text-xl font-semibold">Add Client</h2>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="border rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* BODY */}
            <div className="flex flex-1 overflow-hidden">
              {/* SIDEBAR */}
              <div className="w-1/4 border-r pr-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="relative w-24 h-24">
                    {/* Image */}
                    <img
                      src={image || userplus}
                      alt="profile"
                      className="w-24 h-24 rounded-full object-cover"
                    />

                    {/* Button */}
                    <button
                      onClick={handleClick}
                      className="absolute bottom-0 right-0 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md"
                    >
                      {image ? <Pencil size={16} /> : "+"}
                    </button>

                    {/* Hidden File Input */}
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                </div>
                {/* <div className="flex flex-col items-center mb-6">
                  <div className="relative w-24 h-24">
                    <img
                      src={userplus}
                      className="w-24 h-24 rounded-full object-cover"
                    />

                    <button className="absolute bottom-0 right-0 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                      +
                    </button>
                  </div>
                </div> */}

                <div className="space-y-2 text-sm">
                  {steps.map((s, index) => (
                    <p
                      key={index}
                      onClick={() => setStep(index)}
                      className={`px-3 py-1 rounded-full cursor-pointer ${
                        step === index
                          ? "bg-green-100 text-green-700"
                          : "text-gray-500 hover:bg-gray-100"
                      }`}
                    >
                      {s}
                    </p>
                  ))}
                </div>
              </div>

              {/* FORM AREA */}
              <div className="flex-1 pl-8 overflow-y-auto">
                <h3 className="text-lg font-medium mb-6">{steps[step]}</h3>

                {/* STEP CONTENT SWITCH */}
                {step === 0 && (
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label>First Name</label>
                      <input
                        className="border p-2 rounded-lg"
                        placeholder="First Name"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label>Last Name</label>
                      <input
                        className="border p-2 rounded-lg"
                        placeholder="Last Name"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label>Primary Phone Number</label>
                      <input
                        className="border p-2 rounded-lg"
                        placeholder="Primary Phone Number"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label>Secondary Phone Number</label>
                      <input
                        className="border p-2 rounded-lg"
                        placeholder="Secondary Phone Number"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label>WhatsApp Number</label>
                      <input
                        className="border p-2 rounded-lg"
                        placeholder="WhatsApp Number"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label>Primary Email</label>
                      <input
                        className="border p-2 rounded-lg"
                        placeholder="Primary Email"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label>Secondary Email</label>
                      <input
                        className="border p-2 rounded-lg"
                        placeholder="Secondary Email"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label>Fax</label>
                      <input
                        className="border p-2 rounded-lg"
                        placeholder="Fax"
                      />
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex flex-col">
                      <label>Client Representative</label>
                      <input
                        className="border p-2 rounded-lg"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label>Representative Phone Number</label>
                      <input
                        className="border p-2 rounded-lg"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label>Vendor Name</label>
                      <input
                        className="border p-2 rounded-lg"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label>Lead Source</label>
                      <select
                        id=""
                        name=""
                        className="w-full p-2 border rounded-md"
                      >
                        <option value="">Select a lead source</option>
                      </select>
                      {/* <input
                        className="border p-2 rounded-lg"
                        placeholder="Last Name"
                      /> */}
                    </div>

                    <div className="flex flex-col">
                      <label>Country</label>
                      <select
                        id=""
                        name=""
                        className="w-full p-2 border rounded-md"
                      >
                        <option value="">Select a country</option>
                      </select>
                      {/* <input
                        className="border p-2 rounded-lg"
                        placeholder="Last Name"
                      /> */}
                    </div>

                    <div className="flex flex-col">
                      <label>Client Manager</label>
                      <select
                        id=""
                        name=""
                        className="w-full p-2 border rounded-md"
                      >
                        <option value="">Select a client manager</option>
                      </select>
                      {/* <input
                        className="border p-2 rounded-lg"
                        placeholder="Last Name"
                      /> */}
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <>
                    <p className="text-gray-500">
                      Selected preferred communication options.
                    </p>
                    <div className="flex gap-2">
                      <input type="checkbox" />
                      <p className="text-gray-500">Email</p>
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" />
                      <p className="text-gray-500">Whatsapp</p>
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" />
                      <p className="text-gray-500">SMS</p>
                    </div>
                  </>
                )}
                {step === 4 && (
                  <>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label>Name</label>
                        <input
                          className="border p-2 rounded-lg"
                          placeholder="Full Name"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label>Phone Number</label>
                        <input
                          className="border p-2 rounded-lg"
                          placeholder="Phone Number"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label>Company Name</label>
                        <input
                          className="border p-2 rounded-lg"
                          placeholder="Company Name"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label>Address Line1</label>
                        <input
                          className="border p-2 rounded-lg"
                          placeholder="Address Line1"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label>Address Line2</label>
                        <input
                          className="border p-2 rounded-lg"
                          placeholder="Address Line2"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label>ZIP/Postal Code</label>
                        <input
                          className="border p-2 rounded-lg"
                          placeholder="ZIP/Postal Code"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label>Country</label>
                        <select
                          id=""
                          name=""
                          className="w-full p-2 border rounded-md"
                        >
                          <option value="">Select a country</option>
                        </select>
                        {/* <input
                        className="border p-2 rounded-lg"
                        placeholder="Last Name"
                      /> */}
                      </div>

                      <div className="flex flex-col">
                        <label>City/Town</label>
                        <input
                          className="border p-2 rounded-lg"
                          placeholder="City/Town"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label>State/Province</label>
                        <input
                          className="border p-2 rounded-lg"
                          placeholder="State/Province"
                        />
                      </div>
                    </div>
                  </>
                )}
                {step === 5 && (
                  <>
                    <div className="flex gap-2">
                      <input type="checkbox" />
                      <p className="text-gray-500">
                        Use Shipping Address as Billing Address
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label>Name</label>
                        <input
                          className="border p-2 rounded-lg"
                          placeholder="Full Name"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label>Phone Number</label>
                        <input
                          className="border p-2 rounded-lg"
                          placeholder="Phone Number"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label>Company Name</label>
                        <input
                          className="border p-2 rounded-lg"
                          placeholder="Company Name"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label>Address Line1</label>
                        <input
                          className="border p-2 rounded-lg"
                          placeholder="Address Line1"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label>Address Line2</label>
                        <input
                          className="border p-2 rounded-lg"
                          placeholder="Address Line2"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label>ZIP/Postal Code</label>
                        <input
                          className="border p-2 rounded-lg"
                          placeholder="ZIP/Postal Code"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label>Country</label>
                        <select
                          id=""
                          name=""
                          className="w-full p-2 border rounded-md"
                        >
                          <option value="">Select a country</option>
                        </select>
                        {/* <input
                        className="border p-2 rounded-lg"
                        placeholder="Last Name"
                      /> */}
                      </div>

                      <div className="flex flex-col">
                        <label>City/Town</label>
                        <input
                          className="border p-2 rounded-lg"
                          placeholder="City/Town"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label>State/Province</label>
                        <input
                          className="border p-2 rounded-lg"
                          placeholder="State/Province"
                        />
                      </div>
                    </div>
                  </>
                )}
                {step === 6 && (
                  <textarea
                    placeholder="Description"
                    className="border border-gray-400 w-full h-2/3 text-gray-700 p-2"
                  />
                )}
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex justify-end mt-6">
              {/* PREVIOUS */}
              {step > 0 && (
                <button
                  onClick={prevStep}
                  className={`px-5 py-2 rounded-lg border 
                    "hover:bg-green-300"`}
                >
                  Previous
                </button>
              )}

              {/* NEXT */}
              <button
                onClick={nextStep}
                className="bg-green-500 text-white px-6 py-2 rounded-lg"
              >
                {step === steps.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
