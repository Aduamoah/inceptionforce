import React, { useState } from "react";
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
import { FaSearch, FaChevronDown, FaEllipsisH, FaPlus } from "react-icons/fa";

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

import user from "../../assets/user.png";
import n1 from "../../assets/n1.png";
import n2 from "../../assets/n2.png";
import n3 from "../../assets/n3.png";
import n4 from "../../assets/n4.png";
import n5 from "../../assets/n5.png";
import n6 from "../../assets/n6.png";
import greendashboard from "../../assets/greendashboard.png";
import clients from "../../assets/clients.png";
import companies from "../../assets/companies.png";
import vendors from "../../assets/vendors.png";
import reports from "../../assets/reports.png";

const GridLayout = Responsive;

/* =========================
   MENU CONFIGURATION
========================= */

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
    title: "CONTACT MANAGEMENT",
    items: [
      {
        label: "Dashboard",
        key: "dashboard",
        icon: <img src={greendashboard} />,
      },
      { label: "Clients", key: "clients", icon: <img src={clients} /> },
      { label: "Companies", key: "companies", icon: <img src={companies} /> },
      { label: "Vendors", key: "vendors", icon: <img src={vendors} /> },
      { label: "Reports", key: "reports", icon: <img src={reports} /> },
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
  const [activePage, setActivePage] = useState("dashboard");

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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Total Clients</p>
          <h2 className="text-3xl font-bold">320</h2>
          <div className="flex justify-between mt-4 text-sm">
            <span>275 Active</span>
            <span>45 Inactive</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Total Companies</p>
          <h2 className="text-3xl font-bold">100</h2>
          <div className="flex justify-between mt-4 text-sm">
            <span>60 Active</span>
            <span>40 Inactive</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Total Vendors</p>
          <h2 className="text-3xl font-bold">25</h2>
          <div className="flex justify-between mt-4 text-sm">
            <span>20 Active</span>
            <span>5 Inactive</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Pending Approvals</p>
          <h2 className="text-3xl font-bold">20</h2>
          <div className="flex justify-between mt-4 text-sm">
            <span>12 Estimates</span>
            <span>6 Inactive</span>
          </div>
        </div>
      </div>

      {/* REVENUE + INVOICE */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Total Revenue YTD</p>
          <h2 className="text-3xl font-bold">₵50K</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow grid grid-cols-3 text-center">
          <div>
            <h2 className="text-3xl font-bold">320</h2>
            <p className="text-green-500">Issued</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">75</h2>
            <p className="text-orange-500">Outstanding</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">10</h2>
            <p className="text-red-500">Overdue</p>
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
    <div className="flex h-screen gap-2 bg-gray-100">
      {/* FIRST SIDEBAR */}
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="bg-white shadow flex flex-col justify-between h-full p-2">
          {/* TOP ICONS */}
          <div className="flex flex-col gap-4 mt-20">
            {[n1, n2, n3, n4].map((icon, index) => {
              const key = `n${index + 1}`;
              return (
                <img
                  key={key}
                  src={icon}
                  className={`w-10 h-10 cursor-pointer ${
                    activeMain === key ? "border-2 border-blue-500 rounded" : ""
                  }`}
                  onClick={() => {
                    setActiveMain(key);
                    setActivePage(menuConfig[key].items[0].key);
                  }}
                />
              );
            })}
          </div>

          {/* BOTTOM ICONS */}
          <div className="flex flex-col gap-4 mb-6">
            {[n5, n6].map((icon, index) => {
              const key = `n${index + 5}`;
              return (
                <img
                  key={key}
                  src={icon}
                  className={`w-10 h-10 cursor-pointer ${
                    activeMain === key ? "border-2 border-blue-500 rounded" : ""
                  }`}
                  onClick={() => {
                    setActiveMain(key);
                    setActivePage(menuConfig[key].items[0].key);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* SECOND SIDEBAR */}
      <div className="flex flex-col w-auto h-fit gap-4 mt-14 bg-white shadow">
        <div className="p-4 font-bold text-base text-gray-200">
          {menuConfig[activeMain].title}
        </div>

        <Menu>
          {menuConfig[activeMain].items.map((item) => (
            <MenuItem
              key={item.key}
              icon={item.icon}
              onClick={() => setActivePage(item.key)}
              className={
                activePage === item.key ? "bg-blue-600 text-white" : ""
              }
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
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

  return (
    <div className="bg-white text-gray-800 p-6 rounded-xl shadow">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm text-gray-600">100 Clients</h2>

        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white font-semibold">
          <FaPlus /> Add Client
        </button>
      </div>

      <hr className="border-gray-200 mb-6" />

      {/* FILTER BAR */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {/* SEARCH */}
        <div className="flex items-center border border-gray-300 rounded px-3 py-2 w-80 bg-white">
          <FaSearch className="mr-2 text-gray-400" />
          <input
            className="outline-none w-full text-sm"
            placeholder="Search for a name, email or phone number"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* FILTER DROPDOWNS */}
        {[1, 2, 3].map((f) => (
          <div
            key={f}
            className="flex items-center border border-gray-300 rounded px-4 py-2 w-44 justify-between text-sm bg-white cursor-pointer"
          >
            Filter
            <FaChevronDown />
          </div>
        ))}

        {/* OPTIONS BUTTON */}
        <button className="border border-gray-300 p-3 rounded hover:bg-gray-100">
          <FaEllipsisH />
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
    </div>
  );
}
