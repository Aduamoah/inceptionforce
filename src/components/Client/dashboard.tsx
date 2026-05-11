import React, { useState, useRef, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

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
  FaArrowLeft,
  FaBars,
  FaTrash,
  FaInfoCircle,
  FaCog,
  FaEdit,
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
import { Pencil, X, ChevronDown, ChevronUp } from "lucide-react";

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
import profilesicon from "../../assets/profilesicon.png";
import draftsicon from "../../assets/draftsicon.png";
import departmentsicon from "../../assets/departmentsicon.png";
import teamsicon from "../../assets/teamsicon.png";
import branchesicon from "../../assets/branchesicon.png";
import billingsicon from "../../assets/billingicon.png";
import historyicon from "../../assets/history.png";
import downloader from "../../assets/downloader.png";
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
    title: "BUSINESS MANAGEMENT",
    items: [
      {
        label: "Profiles",
        key: "profiles",
        icon: <img src={profilesicon} className="w-5 h-5" />,
      },
      {
        label: "Drafts",
        key: "drafts",
        icon: <img src={draftsicon} className="w-5 h-5" />,
      },
      {
        label: "Departments",
        key: "departments",
        icon: <img src={departmentsicon} className="w-5 h-5" />,
      },
      {
        label: "Teams",
        key: "teams",
        icon: <img src={teamsicon} className="w-5 h-5" />,
      },
      {
        label: "Branches",
        key: "branches",
        icon: <img src={branchesicon} className="w-5 h-5" />,
      },
      {
        label: "Billing",
        key: "billing",
        icon: <img src={billingsicon} className="w-5 h-5" />,
      },
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
      case "profiles":
        return <ProfilesPage />;
      case "drafts":
        return <DraftPage />;
      case "departments":
        return <DepartmentsPage />;
      case "teams":
        return <TeamsPage />;
      case "branches":
        return <BranchPage />;
      case "billing":
        return <BillingPage />;
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
      <div
        className={`relative group flex-shrink-0 transition-all duration-300 ${isSubExpanded ? "w-44" : "w-20 overflow-hidden"}`}
      >
        <button
          onClick={() => setIsSubExpanded(!isSubExpanded)}
          className="absolute -right-1 top-60 z-50 bg-white border rounded-full shadow p-1 opacity-0 group-hover:opacity-100 transition"
        >
          {isSubExpanded ? (
            <FaChevronLeft size={10} />
          ) : (
            <FaChevronRight size={10} />
          )}
        </button>

        <div className="bg-white shadow h-full flex flex-col">
          <div className="px-4 pt-4 pb-2">
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">
              {menuConfig[activeMain].title}
            </p>
          </div>
          <div className="flex-1 overflow-y-auto">
            {menuConfig[activeMain].items.map((item) => (
              <div
                key={item.key}
                className={`flex items-center gap-3 cursor-pointer px-4 py-2.5 text-sm transition ${activePage === item.key ? "bg-green-50 text-green-700 font-semibold border-r-2 border-green-500" : "text-gray-600 hover:bg-gray-50"}`}
                onClick={() => setActivePage(item.key)}
              >
                <span className="text-base">{item.icon}</span>
                {isSubExpanded && item.label}
              </div>
            ))}
          </div>
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
                  <>
                    <div className="flex flex-col gap-4">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col">
                          <label>Client Representative</label>
                          <input
                            className="border p-2 rounded-lg"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col">
                          <label>Representative Phone Number</label>
                          <input
                            className="border p-2 rounded-lg"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                    </div>
                  </>
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
            <div className="flex justify-end mt-6 gap-2">
              {/* PREVIOUS */}
              {step > 0 && (
                <button
                  onClick={prevStep}
                  className={`px-5 py-2 rounded-lg border border-green-300 text-green-300`}
                >
                  Previous
                </button>
              )}

              {/* NEXT */}
              <button
                onClick={nextStep}
                className="bg-green-500 text-black px-6 py-2 rounded-lg"
              >
                {step === steps.length - 1 ? "Save Client" : "Next"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────
   SAMPLE PROFILE DATA
───────────────────────────────────────*/
const INITIAL_PROFILES = [
  {
    id: 1,
    profileName: "Apex Solutions",
    businessName: "Apex Global Solutions Ltd.",
    officeLocation: "12 Broad Street, Accra",
    primaryPhone: "+233 540123456",
    secondaryPhone: "+233 540123456",
    email: "info@apexglobal.com",
    fax: "-",
    website: "apexglobal.com",
    taxNumber: "12345",
    country: "Ghana",
    zipCode: "00233",
    city: "Accra",
    state: "Greater Accra",
    avatar: "https://i.pravatar.cc/80?img=1",
  },
  {
    id: 2,
    profileName: "BlueTech Ventures",
    businessName: "BlueTech Ventures Ltd.",
    officeLocation: "45 Liberation Road, Accra",
    primaryPhone: "+233 244567890",
    secondaryPhone: "",
    email: "hello@bluetech.com",
    fax: "",
    website: "bluetech.com",
    taxNumber: "67890",
    country: "Ghana",
    zipCode: "00100",
    city: "Accra",
    state: "Greater Accra",
    avatar: "https://i.pravatar.cc/80?img=5",
  },
  {
    id: 3,
    profileName: "GreenLeaf Co.",
    businessName: "GreenLeaf Company Ltd.",
    officeLocation: "Kumasi Central Market, Kumasi",
    primaryPhone: "+233 302345678",
    secondaryPhone: "",
    email: "contact@greenleaf.com",
    fax: "",
    website: "greenleaf.com",
    taxNumber: "11122",
    country: "Ghana",
    zipCode: "00200",
    city: "Kumasi",
    state: "Ashanti",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    id: 4,
    profileName: "Nova Enterprises",
    businessName: "Nova Enterprises Intl.",
    officeLocation: "22 Ring Road, Accra",
    primaryPhone: "+233 501234567",
    secondaryPhone: "",
    email: "info@nova.com",
    fax: "",
    website: "nova.com",
    taxNumber: "33344",
    country: "Ghana",
    zipCode: "00400",
    city: "Accra",
    state: "Greater Accra",
    avatar: "https://i.pravatar.cc/80?img=20",
  },
  {
    id: 5,
    profileName: "Summit Group",
    businessName: "Summit Group Holdings",
    officeLocation: "7 Airport Bypass, Accra",
    primaryPhone: "+233 261112233",
    secondaryPhone: "",
    email: "info@summit.com",
    fax: "",
    website: "summitgroup.com",
    taxNumber: "55566",
    country: "Ghana",
    zipCode: "00500",
    city: "Accra",
    state: "Greater Accra",
    avatar: "https://i.pravatar.cc/80?img=33",
  },
];

const INITIAL_DRAFT = [
  {
    id: 1,
    draftName: "Welcome Email for New Clients",
    draftType: "Email",
    messagePreview:
      "Welcome to [Business Name]! We're thrilled to have you onboard. Here's what to expect...",
  },
  {
    id: 2,
    draftName: "Payment Reminder",
    draftType: "SMS",
    messagePreview:
      "Welcome to [Business Name]! We're thrilled to have you onboard. Here's what to expect...",
  },
];

const INITIAL_DEPARTMENTS = [
  {
    id: 1,
    departmentName: "Human Resources",
    departmentDescription:
      "Manages recruitment, employee relations, payroll, and compliance with labor laws.",
  },
  {
    id: 2,
    departmentName: "Marketing",
    departmentDescription:
      "Focuses on advertising, public relations, and campaigns to promote the business.",
  },
  {
    id: 3,
    departmentName: "Sales",
    departmentDescription:
      "Handles lead generation, client engagement, and closing deals to drive revenue.",
  },
  {
    id: 4,
    departmentName: "IT and Development",
    departmentDescription:
      "Oversees the technology infrastructure, software development, and cybersecurity.",
  },
];

const INITIAL_MEMBERS = [
  {
    id: 1,
    Name: "Alice Johnson",
    Email: "alice.johnson@gmail.com",
    Status: "Active",
    avatar: "https://i.pravatar.cc/80?img=20",
  },
  {
    id: 2,
    Name: "Alice Johnson",
    Email: "alice.johnson@gmail.com",
    Status: "Active",
    avatar: "https://i.pravatar.cc/80?img=20",
  },
  {
    id: 3,
    Name: "Alice Johnson",
    Email: "alice.johnson@gmail.com",
    Status: "Active",
    avatar: "https://i.pravatar.cc/80?img=20",
  },
  {
    id: 4,
    Name: "Alice Johnson",
    Email: "alice.johnson@gmail.com",
    Status: "Active",
    avatar: "https://i.pravatar.cc/80?img=20",
  },
  {
    id: 5,
    Name: "Alice Johnson",
    Email: "alice.johnson@gmail.com",
    Status: "Active",
    avatar: "https://i.pravatar.cc/80?img=20",
  },
];

const INITIAL_BRANCHES = [
  {
    id: 1,
    branchName: "Global HQ",
    addressline1: "123 Corporate Avenue",
    addressline2: "Suite 500",
    country: "United States",
    zipCode: "1001",
    city: "New York",
  },
  {
    id: 2,
    branchName: "Global HQ",
    addressline1: "123 Corporate Avenue",
    addressline2: "Suite 500",
    country: "United States",
    zipCode: "1001",
    city: "New York",
  },
  {
    id: 3,
    branchName: "Global HQ",
    addressline1: "123 Corporate Avenue",
    addressline2: "Suite 500",
    country: "United States",
    zipCode: "1001",
    city: "New York",
  },
  {
    id: 4,
    branchName: "Global HQ",
    addressline1: "123 Corporate Avenue",
    addressline2: "Suite 500",
    country: "United States",
    zipCode: "1001",
    city: "New York",
  },
  {
    id: 5,
    branchName: "Global HQ",
    addressline1: "123 Corporate Avenue",
    addressline2: "Suite 500",
    country: "United States",
    zipCode: "1001",
    city: "New York",
  },
];

const INITIAL_INVOICES = [
  {
    id: 1,
    serviceName: "Sales Pipeline",
    invoiceDate: "Jan 1, 2025",
    dueDate: "Jan 15, 2025",
    amount: "$49.99",
    status: "Paid",
  },
  {
    id: 2,
    serviceName: "Sales Pipeline",
    invoiceDate: "Jan 1, 2025",
    dueDate: "Jan 15, 2025",
    amount: "$49.99",
    status: "Pending",
  },
  {
    id: 3,
    serviceName: "Sales Pipeline",
    invoiceDate: "Jan 1, 2025",
    dueDate: "Jan 15, 2025",
    amount: "$49.99",
    status: "Overdue",
  },
  {
    id: 4,
    serviceName: "Sales Pipeline",
    invoiceDate: "Jan 1, 2025",
    dueDate: "Jan 15, 2025",
    amount: "$49.99",
    status: "Paid",
  },
  {
    id: 5,
    serviceName: "Sales Pipeline",
    invoiceDate: "Jan 1, 2025",
    dueDate: "Jan 15, 2025",
    amount: "$49.99",
    status: "Paid",
  },
];

const INITIAL_HISTORY = [
  {
    id: 1,
    date: "2025-01-20",
    service: "Sales Pipeline",
    creditUsed: "100",
    amount: "$49.99",
    status: "Successful",
    receipt: "Download",
  },
  {
    id: 2,
    date: "2025-01-20",
    service: "Sales Pipeline",
    creditUsed: "100",
    amount: "$49.99",
    status: "Successful",
    receipt: "Download",
  },
  {
    id: 3,
    date: "2025-01-20",
    service: "Sales Pipeline",
    creditUsed: "100",
    amount: "$49.99",
    status: "Failed",
    receipt: "Download",
  },
  {
    id: 4,
    date: "2025-01-20",
    service: "Sales Pipeline",
    creditUsed: "100",
    amount: "$49.99",
    status: "Paid",
    receipt: "Download",
  },
  {
    id: 5,
    date: "2025-01-20",
    service: "Sales Pipeline",
    creditUsed: "100",
    amount: "$49.99",
    status: "Paid",
    receipt: "Download",
  },
];

const SETTINGS_SECTIONS = [
  "Upload Logo",
  "Estimate and Invoice Formatting",
  "Terms and Conditions",
  "Payment Details",
  "Geo-Location",
  "Billing Address",
  "Templates",
];

const DETAILS_SECTIONS = [
  "Campaign Credits",
  "Invoices",
  "Subscription Management",
];

/* ─────────────────────────────────────
   PROFILES PAGE
───────────────────────────────────────*/
function ProfilesPage() {
  const [profiles, setProfiles] = useState(INITIAL_PROFILES);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("details");
  const [activeSettingsSection, setActiveSettingsSection] =
    useState("Upload Logo");
  const [profileIndex, setProfileIndex] = useState(0);
  const [logoPreview, setLogoPreview] = useState(null);

  const filtered = profiles.filter(
    (p) =>
      p.profileName.toLowerCase().includes(search.toLowerCase()) ||
      p.businessName.toLowerCase().includes(search.toLowerCase()) ||
      p.officeLocation.toLowerCase().includes(search.toLowerCase()),
  );

  const openProfile = (profile, index) => {
    setSelectedProfile(profile);
    setProfileIndex(index);
    setActiveTab("details");
    setActiveSettingsSection("Upload Logo");
    setLogoPreview(null);
  };

  const handleNavProfile = (direction) => {
    const newIndex = profileIndex + direction;
    if (newIndex >= 0 && newIndex < filtered.length) {
      setProfileIndex(newIndex);
      setSelectedProfile(filtered[newIndex]);
    }
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
    setSelectedProfile(null);
  };

  const handleCreate = (newProfile) => {
    const id = profiles.length + 1;
    const created = {
      ...newProfile,
      id,
      avatar: `https://i.pravatar.cc/80?img=${id + 40}`,
    };
    setProfiles([...profiles, created]);
    setShowCreateModal(false);
  };

  /* ── LIST VIEW ── */
  if (!selectedProfile) {
    return (
      <div className="min-h-full">
        {/* HEADER BAR */}
        <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
          <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">
            Business Management
          </span>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition shadow-sm"
          >
            <FaPlus size={11} /> Create a Profile
          </button>
        </div>

        <div className="px-6 pt-5">
          {/* SEARCH ROW */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-3 py-2 text-sm w-80">
              <FaSearch className="text-gray-400" />
              <input
                className="outline-none w-full placeholder-gray-400"
                placeholder="Search for profile name, business name or location"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white text-gray-600 hover:bg-gray-50">
                All <FaChevronDown size={10} />
              </button>
              <button className="border border-green-400 text-green-600 rounded-xl px-3 py-2 hover:bg-green-50">
                <FaEllipsisH size={14} />
              </button>
            </div>
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-wide border-b border-gray-200">
                <tr>
                  <th className="p-3 w-10">
                    <input type="checkbox" />
                  </th>
                  <th className="text-left p-3">Profile Name</th>
                  <th className="text-left p-3">Business Name</th>
                  <th className="text-left p-3">Office Location</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((profile, i) => (
                  <tr
                    key={profile.id}
                    className="border-b border-gray-100 hover:bg-green-50/40 cursor-pointer transition group"
                    onClick={() => openProfile(profile, i)}
                  >
                    <td className="p-3" onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" />
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={profile.avatar}
                          className="w-9 h-9 rounded-full object-cover border border-gray-200"
                          alt=""
                        />
                        <span className="font-medium text-gray-800 group-hover:text-green-700 transition">
                          {profile.profileName}
                        </span>
                      </div>
                    </td>
                    <td className="p-3 text-gray-500">
                      {profile.businessName}
                    </td>
                    <td className="p-3 text-gray-500">
                      {profile.officeLocation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="flex justify-between items-center mt-4 pb-6 text-sm text-gray-500">
            <p>
              Showing {filtered.length} of {profiles.length}
            </p>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
                <FaChevronLeft size={10} />
              </button>
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  className={`w-7 h-7 flex items-center justify-center border rounded text-xs font-medium ${n === 1 ? "bg-green-500 text-white border-green-500" : "border-gray-300 hover:bg-gray-100 text-gray-600"}`}
                >
                  {n}
                </button>
              ))}
              <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
                <FaChevronRight size={10} />
              </button>
            </div>
          </div>
        </div>

        {showCreateModal && (
          <CreateProfileModal
            onClose={() => setShowCreateModal(false)}
            onCreate={handleCreate}
          />
        )}
      </div>
    );
  }

  /* ── DETAIL VIEW ── */
  return (
    <div className="min-h-full bg-gray-50">
      {/* TOP NAV */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-3 text-sm">
        <button
          onClick={() => setSelectedProfile(null)}
          className="flex items-center gap-1.5 text-green-600 hover:text-green-700 font-medium"
        >
          <FaArrowLeft size={11} /> Back to Profiles
        </button>
        <div className="w-px h-4 bg-gray-300" />
        <div className="flex items-center gap-1 text-gray-500">
          <button
            onClick={() => handleNavProfile(-1)}
            disabled={profileIndex === 0}
            className="p-1 hover:bg-gray-100 rounded disabled:opacity-30 transition"
          >
            <ChevronDown size={13} />
          </button>
          <button
            onClick={() => handleNavProfile(1)}
            disabled={profileIndex === filtered.length - 1}
            className="p-1 hover:bg-gray-100 rounded disabled:opacity-30 transition"
          >
            <ChevronUp size={13} />
          </button>
          <span className="text-xs">
            {profileIndex + 1} of {filtered.length}
          </span>
        </div>
      </div>

      <div className="px-6 pt-5 pb-10 max-w-5xl">
        {/* PROFILE HEADER */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-4">
            <img
              src={selectedProfile.avatar}
              className="w-16 h-16 rounded-full object-cover border-2 border-green-200 shadow"
              alt=""
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {selectedProfile.profileName}
              </h1>
              <p className="text-gray-500 text-sm mt-0.5">
                {selectedProfile.businessName}
              </p>
            </div>
          </div>
          <button
            onClick={() => handleDelete(selectedProfile.id)}
            className="flex items-center gap-2 border border-red-300 text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            <FaTrash size={11} /> Delete Profile
          </button>
        </div>

        {/* TABS */}
        <div className="flex gap-0 border-b border-gray-200 mb-5">
          <button
            onClick={() => setActiveTab("details")}
            className={`px-5 pb-3 pt-1 text-sm font-medium flex items-center gap-2 border-b-2 transition ${activeTab === "details" ? "border-green-500 text-green-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            <FaInfoCircle size={12} /> Details
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-5 pb-3 pt-1 text-sm font-medium flex items-center gap-2 border-b-2 transition ${activeTab === "settings" ? "border-green-500 text-green-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            <FaCog size={12} /> Settings
          </button>
        </div>

        {/* DETAILS TAB */}
        {activeTab === "details" && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold text-gray-800 text-base">
                General Information
              </h2>
              <button className="flex items-center gap-1.5 border border-gray-300 text-gray-600 hover:bg-gray-50 px-3 py-1.5 rounded-lg text-sm transition">
                <Pencil size={12} /> Edit
              </button>
            </div>
            <div className="grid grid-cols-3 gap-y-6 gap-x-6">
              {[
                ["Profile Name", selectedProfile.profileName],
                ["Business Name", selectedProfile.businessName],
                ["Primary Phone Number", selectedProfile.primaryPhone],
                [
                  "Secondary Phone Number",
                  selectedProfile.secondaryPhone || "—",
                ],
                ["Email", selectedProfile.email],
                ["FAX", selectedProfile.fax || "—"],
                ["Website", selectedProfile.website],
                ["Tax Number", selectedProfile.taxNumber],
                ["Office Location", selectedProfile.officeLocation],
                ["Country", "🇬🇭 " + selectedProfile.country],
                ["ZIP/Postal Code", selectedProfile.zipCode],
                ["City/Town", selectedProfile.city],
                ["State/Province", selectedProfile.state],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs text-gray-400 mb-1 font-medium">
                    {label}
                  </p>
                  <p className="text-sm text-gray-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SETTINGS TAB */}
        {activeTab === "settings" && (
          <div className="flex gap-4">
            <div className="w-52 flex-shrink-0">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {SETTINGS_SECTIONS.map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSettingsSection(section)}
                    className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 last:border-0 transition ${activeSettingsSection === section ? "bg-green-50 text-green-700 font-semibold" : "text-gray-600 hover:bg-gray-50"}`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 min-h-64">
                {activeSettingsSection === "Upload Logo" && (
                  <UploadLogoSection
                    profile={selectedProfile}
                    logoPreview={logoPreview}
                    setLogoPreview={setLogoPreview}
                  />
                )}
                {activeSettingsSection ===
                  "Estimate and Invoice Formatting" && (
                  <EstimateInvoiceFormattingSection />
                )}
                {activeSettingsSection === "Terms and Conditions" && (
                  <TermsAndConditionsSection />
                )}
                {activeSettingsSection === "Payment Details" && (
                  <PaymentDetailsSection />
                )}
                {activeSettingsSection === "Geo-Location" && (
                  <GeoLocationSection />
                )}
                {activeSettingsSection === "Billing Address" && (
                  <BillingAddressSection profile={selectedProfile} />
                )}
                {activeSettingsSection === "Templates" && <TemplatesSection />}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DraftPage() {
  const [profiles, setProfiles] = useState(INITIAL_DRAFT);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("details");
  const [activeSettingsSection, setActiveSettingsSection] =
    useState("Upload Logo");
  const [profileIndex, setProfileIndex] = useState(0);
  const [logoPreview, setLogoPreview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = profiles.filter(
    (p) =>
      p.draftName.toLowerCase().includes(search.toLowerCase()) ||
      p.draftType.toLowerCase().includes(search.toLowerCase()) ||
      p.messagePreview.toLowerCase().includes(search.toLowerCase()),
  );

  const openProfile = (profile, index) => {
    setSelectedProfile(profile);
    setProfileIndex(index);
    setForm({
      draftName: profile.draftName || "",
      to: profile.to || "",
      subject: profile.subject || "",
      message: profile.messagePreview || "",
    });

    setIsModalOpen(true);
  };

  const [form, setForm] = useState({
    draftName: "",
    to: "",
    subject: "",
    message: "",
  });

  const onClose = () => {
    setIsModalOpen(false);
    setSelectedProfile(null);
  };

  const set = (key) => (e) => {
    setForm((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleNavProfile = (direction) => {
    const newIndex = profileIndex + direction;
    if (newIndex >= 0 && newIndex < filtered.length) {
      setProfileIndex(newIndex);
      setSelectedProfile(filtered[newIndex]);
    }
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
    setSelectedProfile(null);
  };

  const handleCreate = (newProfile) => {
    const id = profiles.length + 1;
    const created = {
      ...newProfile,
      id,
      avatar: `https://i.pravatar.cc/80?img=${id + 40}`,
    };
    setProfiles([...profiles, created]);
    setShowCreateModal(false);
  };

  /* ── LIST VIEW ── */

  return (
    <div className="min-h-full">
      {/* HEADER BAR */}
      <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
        <span className="text-lg font-medium text-black  uppercase">
          Drafts
        </span>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black text-sm font-semibold px-4 py-2 rounded-lg transition shadow-sm"
        >
          <FaPlus size={11} /> Create New Draft
        </button>
      </div>
      <div className="px-6 pt-5">
        {/* SEARCH ROW */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-3 py-2 text-sm w-80">
            <FaSearch className="text-gray-400" />
            <input
              className="outline-none w-full placeholder-gray-400"
              placeholder="Search for a draft"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white text-gray-600 hover:bg-gray-50">
              5 <FaChevronDown size={10} />
            </button>
            <button className="border border-green-400 text-green-600 rounded-xl px-3 py-2 hover:bg-green-50">
              <FaEllipsisH size={14} />
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-wide border-b border-gray-200">
              <tr>
                <th className="p-3 w-10">
                  <input type="checkbox" />
                </th>
                <th className="text-left p-3">Draft Name</th>
                <th className="text-left p-3">Draft Type</th>
                <th className="text-left p-3">Message Preview</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((profile, i) => (
                <tr
                  key={profile.id}
                  className="border-b border-gray-100 hover:bg-green-50/40 cursor-pointer transition group"
                  onClick={() => openProfile(profile, i)}
                >
                  <td className="p-3" onClick={(e) => e.stopPropagation()}>
                    <input type="checkbox" />
                  </td>

                  <td className="p-3 text-gray-500">{profile.draftName}</td>
                  <td className="p-3 text-gray-500">{profile.draftType}</td>
                  <td className="p-3 text-gray-500">
                    {profile.messagePreview}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-between items-center mt-4 pb-6 text-sm text-gray-500">
          <p>
            Showing {filtered.length} of {profiles.length}
          </p>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
              <FaChevronLeft size={10} />
            </button>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                className={`w-7 h-7 flex items-center justify-center border rounded text-xs font-medium ${n === 1 ? "bg-green-500 text-white border-green-500" : "border-gray-300 hover:bg-gray-100 text-gray-600"}`}
              >
                {n}
              </button>
            ))}
            <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
              <FaChevronRight size={10} />
            </button>
          </div>
        </div>
      </div>
      {showCreateModal && (
        <CreateDraftModal
          onClose={() => setShowCreateModal(false)}
          onCreate={handleCreate}
        />
      )}
      {isModalOpen && selectedProfile && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* HEADER */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">
                {form.draftName}
              </h2>

              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            {/* BODY */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* TO */}
              <div>
                <label className="text-xs text-gray-500">To</label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={form.to}
                  onChange={set("to")}
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label className="text-xs text-gray-500">Subject</label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={form.subject}
                  onChange={set("subject")}
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-xs text-gray-500">Message</label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm h-60"
                  value={form.message}
                  onChange={set("message")}
                />
              </div>
            </div>

            {/* FOOTER
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 text-sm"
              >
                Cancel
              </button>

              <button
                onClick={() => console.log(form)}
                className="px-6 py-2 rounded-lg bg-green-500 text-black text-sm font-semibold"
              >
                Save Changes
              </button>
            </div> */}
          </div>
        </div>
      )}
      ;
    </div>
  );
}

/* ─────────────────────────────────────
   PROFILES PAGE
───────────────────────────────────────*/
function DepartmentsPage() {
  const [profiles, setProfiles] = useState(INITIAL_DEPARTMENTS);
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("details");
  const [activeSettingsSection, setActiveSettingsSection] =
    useState("Upload Logo");
  const [profileIndex, setProfileIndex] = useState(0);
  const [logoPreview, setLogoPreview] = useState(null);

  const filtered = profiles.filter(
    (p) =>
      p.departmentName.toLowerCase().includes(search.toLowerCase()) ||
      p.departmentDescription.toLowerCase().includes(search.toLowerCase()),
  );

  const filterednew = members.filter(
    (p) =>
      p.Name.toLowerCase().includes(search.toLowerCase()) ||
      p.Email.toLowerCase().includes(search.toLowerCase()) ||
      p.Status.toLowerCase().includes(search.toLowerCase()),
  );

  const openProfile = (profile, index) => {
    setSelectedProfile(profile);
    setProfileIndex(index);
    setActiveTab("details");
    setActiveSettingsSection("Upload Logo");
    setLogoPreview(null);
  };

  const handleNavProfile = (direction) => {
    const newIndex = profileIndex + direction;
    if (newIndex >= 0 && newIndex < filtered.length) {
      setProfileIndex(newIndex);
      setSelectedProfile(filtered[newIndex]);
    }
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
    setSelectedProfile(null);
  };

  const handleCreate = (newProfile) => {
    const id = profiles.length + 1;
    const created = {
      ...newProfile,
      id,
      avatar: `https://i.pravatar.cc/80?img=${id + 40}`,
    };
    setProfiles([...profiles, created]);
    setShowCreateModal(false);
  };

  /* ── LIST VIEW ── */
  if (!selectedProfile) {
    return (
      <div className="min-h-full">
        {/* HEADER BAR */}
        <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
          <span className="text-xl font-normal text-black  uppercase">
            Departments
          </span>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black text-sm font-semibold px-4 py-2 rounded-lg transition shadow-sm"
          >
            <FaPlus size={11} /> Create a Department
          </button>
        </div>

        <div className="px-6 pt-5">
          {/* SEARCH ROW */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-3 py-2 text-sm w-80">
              <FaSearch className="text-gray-400" />
              <input
                className="outline-none w-full placeholder-gray-400"
                placeholder="Search for department"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white text-gray-600 hover:bg-gray-50">
                5 <FaChevronDown size={10} />
              </button>
              <button className="border border-green-400 text-green-600 rounded-xl px-3 py-2 hover:bg-green-50">
                <FaEllipsisH size={14} />
              </button>
            </div>
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-wide border-b border-gray-200">
                <tr>
                  <th className="p-3 w-10">
                    <input type="checkbox" />
                  </th>
                  <th className="text-left p-3">Department Name</th>
                  <th className="text-left p-3">Department Description</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((profile, i) => (
                  <tr
                    key={profile.id}
                    className="border-b border-gray-100 hover:bg-green-50/40 cursor-pointer transition group"
                    onClick={() => openProfile(profile, i)}
                  >
                    <td className="p-3" onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" />
                    </td>
                    <td className="p-3 text-gray-500">
                      {profile.departmentName}
                    </td>
                    <td className="p-3 text-gray-500">
                      {profile.departmentDescription}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="flex justify-between items-center mt-4 pb-6 text-sm text-gray-500">
            <p>
              Showing {filtered.length} of {profiles.length}
            </p>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
                <FaChevronLeft size={10} />
              </button>
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  className={`w-7 h-7 flex items-center justify-center border rounded text-xs font-medium ${n === 1 ? "bg-green-500 text-white border-green-500" : "border-gray-300 hover:bg-gray-100 text-gray-600"}`}
                >
                  {n}
                </button>
              ))}
              <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
                <FaChevronRight size={10} />
              </button>
            </div>
          </div>
        </div>

        {showCreateModal && (
          <CreateDepartmentModal
            onClose={() => setShowCreateModal(false)}
            onCreate={handleCreate}
          />
        )}
      </div>
    );
  }

  /* ── DETAIL VIEW ── */
  return (
    <div className="min-h-full bg-gray-50">
      {/* TOP NAV */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-3 text-sm">
        <button
          onClick={() => setSelectedProfile(null)}
          className="flex items-center gap-1.5 text-green-600 hover:text-green-700 font-medium"
        >
          <FaArrowLeft size={11} /> Back to Departments
        </button>
        <div className="w-px h-4 bg-gray-300" />
        <div className="flex items-center gap-1 text-gray-500">
          <button
            onClick={() => handleNavProfile(-1)}
            disabled={profileIndex === 0}
            className="p-1 hover:bg-gray-100 rounded disabled:opacity-30 transition"
          >
            <ChevronDown size={13} />
          </button>
          <button
            onClick={() => handleNavProfile(1)}
            disabled={profileIndex === filtered.length - 1}
            className="p-1 hover:bg-gray-100 rounded disabled:opacity-30 transition"
          >
            <ChevronUp size={13} />
          </button>
          <span className="text-xs">
            {profileIndex + 1} of {filtered.length}
          </span>
        </div>
      </div>

      <div className="px-6 pt-5 pb-10 max-w-5xl">
        {/* PROFILE HEADER */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-4">
            {/* <img
              src={selectedProfile.avatar}
              className="w-16 h-16 rounded-full object-cover border-2 border-green-200 shadow"
              alt=""
            /> */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {selectedProfile.departmentName}
              </h1>
              {/* <p className="text-gray-500 text-sm mt-0.5">
                {selectedProfile.businessName}
              </p> */}
            </div>
          </div>
          <button
            onClick={() => handleDelete(selectedProfile.id)}
            className="flex items-center gap-2 border border-red-300 text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            <FaTrash size={11} /> Delete Department
          </button>
        </div>

        {/* TABS */}
        <div className="flex gap-0 border-b border-gray-200 mb-5">
          <button
            onClick={() => setActiveTab("details")}
            className={`px-5 pb-3 pt-1 text-sm font-medium flex items-center gap-2 border-b-2 transition ${activeTab === "details" ? "border-green-500 text-green-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            <FaInfoCircle size={12} /> Details
          </button>
          <button
            onClick={() => setActiveTab("members")}
            className={`px-5 pb-3 pt-1 text-sm font-medium flex items-center gap-2 border-b-2 transition ${activeTab === "members" ? "border-green-500 text-green-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            <img src={teamsicon} className="w-5 h-5" /> Members
          </button>
        </div>

        {/* DETAILS TAB */}
        {activeTab === "details" && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold text-gray-800 text-base">
                Department Details
              </h2>
              <button className="flex items-center gap-1.5 border border-gray-300 text-gray-600 hover:bg-gray-50 px-3 py-1.5 rounded-lg text-sm transition">
                <Pencil size={12} /> Edit
              </button>
            </div>
            <div className="grid grid-cols-1 gap-y-6 gap-x-6">
              {[
                ["Department Name", selectedProfile.departmentName],
                [
                  "Department Description",
                  selectedProfile.departmentDescription,
                ],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs text-gray-400 mb-1 font-medium">
                    {label}
                  </p>
                  <p className="text-sm text-gray-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Members TAB */}
        {activeTab === "members" && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-wide border-b border-gray-200">
                <tr>
                  <th className="p-3 w-10">
                    <input type="checkbox" />
                  </th>
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3">Email</th>
                  <th className="text-left p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filterednew.map((member, i) => (
                  <tr
                    key={member.id}
                    className="border-b border-gray-100 hover:bg-green-50/40 cursor-pointer transition group"
                    // onClick={() => openProfile(members, i)}
                  >
                    <td className="p-3" onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" />
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={member.avatar}
                          className="w-9 h-9 rounded-full object-cover border border-gray-200"
                          alt=""
                        />
                        <span className="font-medium text-green-500 group-hover:text-green-700 transition">
                          {member.Name}
                        </span>
                      </div>
                    </td>
                    <td className="p-3 text-gray-500">{member.Email}</td>
                    {/* <td className="p-3 text-green-500">{member.Status}</td> */}
                    <td className="p-3">
                      <span className="inline-block px-3 py-1 rounded-full border border-green-500 text-green-500 text-sm font-medium bg-white">
                        {member.Status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function TeamsPage() {
  const [profiles, setProfiles] = useState(INITIAL_DEPARTMENTS);
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("details");
  const [activeSettingsSection, setActiveSettingsSection] =
    useState("Upload Logo");
  const [profileIndex, setProfileIndex] = useState(0);
  const [logoPreview, setLogoPreview] = useState(null);

  const filtered = profiles.filter(
    (p) =>
      p.departmentName.toLowerCase().includes(search.toLowerCase()) ||
      p.departmentDescription.toLowerCase().includes(search.toLowerCase()),
  );

  const filterednew = members.filter(
    (p) =>
      p.Name.toLowerCase().includes(search.toLowerCase()) ||
      p.Email.toLowerCase().includes(search.toLowerCase()) ||
      p.Status.toLowerCase().includes(search.toLowerCase()),
  );

  const openProfile = (profile, index) => {
    setSelectedProfile(profile);
    setProfileIndex(index);
    setActiveTab("details");
    setActiveSettingsSection("Upload Logo");
    setLogoPreview(null);
  };

  const handleNavProfile = (direction) => {
    const newIndex = profileIndex + direction;
    if (newIndex >= 0 && newIndex < filtered.length) {
      setProfileIndex(newIndex);
      setSelectedProfile(filtered[newIndex]);
    }
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
    setSelectedProfile(null);
  };

  const handleCreate = (newProfile) => {
    const id = profiles.length + 1;
    const created = {
      ...newProfile,
      id,
      avatar: `https://i.pravatar.cc/80?img=${id + 40}`,
    };
    setProfiles([...profiles, created]);
    setShowCreateModal(false);
  };

  /* ── LIST VIEW ── */
  if (!selectedProfile) {
    return (
      <div className="min-h-full">
        {/* HEADER BAR */}
        <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
          <span className="text-xl font-normal text-black  uppercase">
            Teams
          </span>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black text-sm font-semibold px-4 py-2 rounded-lg transition shadow-sm"
          >
            <FaPlus size={11} /> Create a Team
          </button>
        </div>

        <div className="px-6 pt-5">
          {/* SEARCH ROW */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-3 py-2 text-sm w-80">
              <FaSearch className="text-gray-400" />
              <input
                className="outline-none w-full placeholder-gray-400"
                placeholder="Search for team"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white text-gray-600 hover:bg-gray-50">
                5 <FaChevronDown size={10} />
              </button>
              <button className="border border-green-400 text-green-600 rounded-xl px-3 py-2 hover:bg-green-50">
                <FaEllipsisH size={14} />
              </button>
            </div>
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-wide border-b border-gray-200">
                <tr>
                  <th className="p-3 w-10">
                    <input type="checkbox" />
                  </th>
                  <th className="text-left p-3">Team Name</th>
                  <th className="text-left p-3">Team Description</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((profile, i) => (
                  <tr
                    key={profile.id}
                    className="border-b border-gray-100 hover:bg-green-50/40 cursor-pointer transition group"
                    onClick={() => openProfile(profile, i)}
                  >
                    <td className="p-3" onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" />
                    </td>
                    <td className="p-3 text-gray-500">
                      {profile.departmentName}
                    </td>
                    <td className="p-3 text-gray-500">
                      {profile.departmentDescription}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="flex justify-between items-center mt-4 pb-6 text-sm text-gray-500">
            <p>
              Showing {filtered.length} of {profiles.length}
            </p>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
                <FaChevronLeft size={10} />
              </button>
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  className={`w-7 h-7 flex items-center justify-center border rounded text-xs font-medium ${n === 1 ? "bg-green-500 text-white border-green-500" : "border-gray-300 hover:bg-gray-100 text-gray-600"}`}
                >
                  {n}
                </button>
              ))}
              <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
                <FaChevronRight size={10} />
              </button>
            </div>
          </div>
        </div>

        {showCreateModal && (
          <CreateTeamModal
            onClose={() => setShowCreateModal(false)}
            onCreate={handleCreate}
          />
        )}
      </div>
    );
  }

  /* ── DETAIL VIEW ── */
  return (
    <div className="min-h-full bg-gray-50">
      {/* TOP NAV */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-3 text-sm">
        <button
          onClick={() => setSelectedProfile(null)}
          className="flex items-center gap-1.5 text-green-600 hover:text-green-700 font-medium"
        >
          <FaArrowLeft size={11} /> Back to Teams
        </button>
        <div className="w-px h-4 bg-gray-300" />
        <div className="flex items-center gap-1 text-gray-500">
          <button
            onClick={() => handleNavProfile(-1)}
            disabled={profileIndex === 0}
            className="p-1 hover:bg-gray-100 rounded disabled:opacity-30 transition"
          >
            <ChevronDown size={13} />
          </button>
          <button
            onClick={() => handleNavProfile(1)}
            disabled={profileIndex === filtered.length - 1}
            className="p-1 hover:bg-gray-100 rounded disabled:opacity-30 transition"
          >
            <ChevronUp size={13} />
          </button>
          <span className="text-xs">
            {profileIndex + 1} of {filtered.length}
          </span>
        </div>
      </div>

      <div className="px-6 pt-5 pb-10 max-w-5xl">
        {/* PROFILE HEADER */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-4">
            {/* <img
              src={selectedProfile.avatar}
              className="w-16 h-16 rounded-full object-cover border-2 border-green-200 shadow"
              alt=""
            /> */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {selectedProfile.departmentName}
              </h1>
              {/* <p className="text-gray-500 text-sm mt-0.5">
                {selectedProfile.businessName}
              </p> */}
            </div>
          </div>
          <button
            onClick={() => handleDelete(selectedProfile.id)}
            className="flex items-center gap-2 border border-red-300 text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            <FaTrash size={11} /> Delete Team
          </button>
        </div>

        {/* TABS */}
        <div className="flex gap-0 border-b border-gray-200 mb-5">
          <button
            onClick={() => setActiveTab("details")}
            className={`px-5 pb-3 pt-1 text-sm font-medium flex items-center gap-2 border-b-2 transition ${activeTab === "details" ? "border-green-500 text-green-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            <FaInfoCircle size={12} /> Details
          </button>
          <button
            onClick={() => setActiveTab("members")}
            className={`px-5 pb-3 pt-1 text-sm font-medium flex items-center gap-2 border-b-2 transition ${activeTab === "members" ? "border-green-500 text-green-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            <img src={teamsicon} className="w-5 h-5" /> Members
          </button>
        </div>

        {/* DETAILS TAB */}
        {activeTab === "details" && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold text-gray-800 text-base">
                Team Details
              </h2>
              <button className="flex items-center gap-1.5 border border-gray-300 text-gray-600 hover:bg-gray-50 px-3 py-1.5 rounded-lg text-sm transition">
                <Pencil size={12} /> Edit
              </button>
            </div>
            <div className="grid grid-cols-1 gap-y-6 gap-x-6">
              {[
                ["Team Name", selectedProfile.departmentName],
                ["Team Description", selectedProfile.departmentDescription],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs text-gray-400 mb-1 font-medium">
                    {label}
                  </p>
                  <p className="text-sm text-gray-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Members TAB */}
        {activeTab === "members" && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-wide border-b border-gray-200">
                <tr>
                  <th className="p-3 w-10">
                    <input type="checkbox" />
                  </th>
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3">Email</th>
                  <th className="text-left p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filterednew.map((member, i) => (
                  <tr
                    key={member.id}
                    className="border-b border-gray-100 hover:bg-green-50/40 cursor-pointer transition group"
                    // onClick={() => openProfile(members, i)}
                  >
                    <td className="p-3" onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" />
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={member.avatar}
                          className="w-9 h-9 rounded-full object-cover border border-gray-200"
                          alt=""
                        />
                        <span className="font-medium text-green-500 group-hover:text-green-700 transition">
                          {member.Name}
                        </span>
                      </div>
                    </td>
                    <td className="p-3 text-gray-500">{member.Email}</td>
                    {/* <td className="p-3 text-green-500">{member.Status}</td> */}
                    <td className="p-3">
                      <span className="inline-block px-3 py-1 rounded-full border border-green-500 text-green-500 text-sm font-medium bg-white">
                        {member.Status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function BranchPage() {
  const [profiles, setProfiles] = useState(INITIAL_BRANCHES);
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("details");
  const [activeSettingsSection, setActiveSettingsSection] =
    useState("Upload Logo");
  const [profileIndex, setProfileIndex] = useState(0);
  const [logoPreview, setLogoPreview] = useState(null);

  const filtered = profiles.filter(
    (p) =>
      p.branchName.toLowerCase().includes(search.toLowerCase()) ||
      p.addressline1.toLowerCase().includes(search.toLowerCase()) ||
      p.addressline2.toLowerCase().includes(search.toLowerCase()) ||
      p.country.toLowerCase().includes(search.toLowerCase()) ||
      p.zipCode.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase()),
  );
  const filterednew = members.filter(
    (p) =>
      p.Name.toLowerCase().includes(search.toLowerCase()) ||
      p.Email.toLowerCase().includes(search.toLowerCase()) ||
      p.Status.toLowerCase().includes(search.toLowerCase()),
  );

  const openProfile = (profile, index) => {
    setSelectedProfile(profile);
    setProfileIndex(index);
    setActiveTab("details");
    setActiveSettingsSection("Upload Logo");
    setLogoPreview(null);
  };

  const handleNavProfile = (direction) => {
    const newIndex = profileIndex + direction;
    if (newIndex >= 0 && newIndex < filtered.length) {
      setProfileIndex(newIndex);
      setSelectedProfile(filtered[newIndex]);
    }
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
    setSelectedProfile(null);
  };

  const handleCreate = (newProfile) => {
    const id = profiles.length + 1;
    const created = {
      ...newProfile,
      id,
      avatar: `https://i.pravatar.cc/80?img=${id + 40}`,
    };
    setProfiles([...profiles, created]);
    setShowCreateModal(false);
  };

  /* ── LIST VIEW ── */
  if (!selectedProfile) {
    return (
      <div className="min-h-full">
        {/* HEADER BAR */}
        <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
          <span className="text-xl font-normal text-black  uppercase">
            Branches
          </span>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black text-sm font-semibold px-4 py-2 rounded-lg transition shadow-sm"
          >
            <FaPlus size={11} /> Create Branch
          </button>
        </div>

        <div className="px-6 pt-5">
          {/* SEARCH ROW */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-3 py-2 text-sm w-80">
              <FaSearch className="text-gray-400" />
              <input
                className="outline-none w-full placeholder-gray-400"
                placeholder="Search for a branch"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white text-gray-600 hover:bg-gray-50">
                5 <FaChevronDown size={10} />
              </button>
              <button className="border border-green-400 text-green-600 rounded-xl px-3 py-2 hover:bg-green-50">
                <FaEllipsisH size={14} />
              </button>
            </div>
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-wide border-b border-gray-200">
                <tr>
                  <th className="p-3 w-10">
                    <input type="checkbox" />
                  </th>
                  <th className="text-left p-3">Branch Name</th>
                  <th className="text-left p-3">Address Line 1</th>
                  <th className="text-left p-3">Address Line 2</th>
                  <th className="text-left p-3">Country</th>
                  <th className="text-left p-3">Zip/Postal Code</th>
                  <th className="text-left p-3">City/Town</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((profile, i) => (
                  <tr
                    key={profile.id}
                    className="border-b border-gray-100 hover:bg-green-50/40 cursor-pointer transition group"
                    onClick={() => openProfile(profile, i)}
                  >
                    <td className="p-3" onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" />
                    </td>
                    <td className="p-3 text-gray-500">{profile.branchName}</td>
                    <td className="p-3 text-gray-500">
                      {profile.addressline1}
                    </td>
                    <td className="p-3 text-gray-500">
                      {profile.addressline2}
                    </td>
                    <td className="p-3 text-gray-500">{profile.country}</td>
                    <td className="p-3 text-gray-500">{profile.zipCode}</td>
                    <td className="p-3 text-gray-500">{profile.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="flex justify-between items-center mt-4 pb-6 text-sm text-gray-500">
            <p>
              Showing {filtered.length} of {profiles.length}
            </p>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
                <FaChevronLeft size={10} />
              </button>
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  className={`w-7 h-7 flex items-center justify-center border rounded text-xs font-medium ${n === 1 ? "bg-green-500 text-white border-green-500" : "border-gray-300 hover:bg-gray-100 text-gray-600"}`}
                >
                  {n}
                </button>
              ))}
              <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
                <FaChevronRight size={10} />
              </button>
            </div>
          </div>
        </div>

        {showCreateModal && (
          <CreateBranchModal
            onClose={() => setShowCreateModal(false)}
            onCreate={handleCreate}
          />
        )}
      </div>
    );
  }

  /* ── DETAIL VIEW ── */
  return (
    <div className="min-h-full bg-gray-50">
      {/* TOP NAV */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-3 text-sm">
        <button
          onClick={() => setSelectedProfile(null)}
          className="flex items-center gap-1.5 text-green-600 hover:text-green-700 font-medium"
        >
          <FaArrowLeft size={11} /> Back to Branches
        </button>
        <div className="w-px h-4 bg-gray-300" />
        <div className="flex items-center gap-1 text-gray-500">
          <button
            onClick={() => handleNavProfile(-1)}
            disabled={profileIndex === 0}
            className="p-1 hover:bg-gray-100 rounded disabled:opacity-30 transition"
          >
            <ChevronDown size={13} />
          </button>
          <button
            onClick={() => handleNavProfile(1)}
            disabled={profileIndex === filtered.length - 1}
            className="p-1 hover:bg-gray-100 rounded disabled:opacity-30 transition"
          >
            <ChevronUp size={13} />
          </button>
          <span className="text-xs">
            {profileIndex + 1} of {filtered.length}
          </span>
        </div>
      </div>

      <div className="px-6 pt-5 pb-10 max-w-5xl">
        {/* PROFILE HEADER */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-4">
            {/* <img
              src={selectedProfile.avatar}
              className="w-16 h-16 rounded-full object-cover border-2 border-green-200 shadow"
              alt=""
            /> */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {selectedProfile.branchName}
              </h1>
              {/* <p className="text-gray-500 text-sm mt-0.5">
                {selectedProfile.businessName}
              </p> */}
            </div>
          </div>
          <button
            onClick={() => handleDelete(selectedProfile.id)}
            className="flex items-center gap-2 border border-red-300 text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            <FaTrash size={11} /> Delete Branch
          </button>
        </div>

        {/* TABS */}
        <div className="flex gap-0 border-b border-gray-200 mb-5">
          <button
            onClick={() => setActiveTab("details")}
            className={`px-5 pb-3 pt-1 text-sm font-medium flex items-center gap-2 border-b-2 transition ${activeTab === "details" ? "border-green-500 text-green-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            <FaInfoCircle size={12} /> Details
          </button>
          <button
            onClick={() => setActiveTab("members")}
            className={`px-5 pb-3 pt-1 text-sm font-medium flex items-center gap-2 border-b-2 transition ${activeTab === "members" ? "border-green-500 text-green-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            <img src={teamsicon} className="w-5 h-5" /> Members
          </button>
        </div>

        {/* DETAILS TAB */}
        {activeTab === "details" && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold text-gray-800 text-base">
                Branch Details
              </h2>
              <button className="flex items-center gap-1.5 border border-gray-300 text-gray-600 hover:bg-gray-50 px-3 py-1.5 rounded-lg text-sm transition">
                <Pencil size={12} /> Edit
              </button>
            </div>
            <div className="grid grid-cols-2 gap-y-6 gap-x-6">
              {[
                ["Branch Name", selectedProfile.branchName],
                ["Address Line 1", selectedProfile.addressline1],
                ["Address Line 2", selectedProfile.addressline2],
                ["Country", selectedProfile.country],
                ["ZIP/Postal Code ", selectedProfile.zipCode],
                ["City/Town", selectedProfile.city],
                ["State/Province", selectedProfile.state],
                ["Team Description", selectedProfile.teamDescription],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs text-gray-400 mb-1 font-medium">
                    {label}
                  </p>
                  <p className="text-sm text-gray-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Members TAB */}
        {activeTab === "members" && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-wide border-b border-gray-200">
                <tr>
                  <th className="p-3 w-10">
                    <input type="checkbox" />
                  </th>
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3">Email</th>
                  <th className="text-left p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filterednew.map((member, i) => (
                  <tr
                    key={member.id}
                    className="border-b border-gray-100 hover:bg-green-50/40 cursor-pointer transition group"
                    // onClick={() => openProfile(members, i)}
                  >
                    <td className="p-3" onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" />
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={member.avatar}
                          className="w-9 h-9 rounded-full object-cover border border-gray-200"
                          alt=""
                        />
                        <span className="font-medium text-green-500 group-hover:text-green-700 transition">
                          {member.Name}
                        </span>
                      </div>
                    </td>
                    <td className="p-3 text-gray-500">{member.Email}</td>
                    {/* <td className="p-3 text-green-500">{member.Status}</td> */}
                    <td className="p-3">
                      <span className="inline-block px-3 py-1 rounded-full border border-green-500 text-green-500 text-sm font-medium bg-white">
                        {member.Status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function InvoicePage() {
  const [profiles, setProfiles] = useState(INITIAL_INVOICES);
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("details");
  const [activeSettingsSection, setActiveSettingsSection] =
    useState("Upload Logo");
  const [profileIndex, setProfileIndex] = useState(0);
  const [logoPreview, setLogoPreview] = useState(null);

  const filtered = profiles.filter(
    (p) =>
      p.serviceName.toLowerCase().includes(search.toLowerCase()) ||
      p.invoiceDate.toLowerCase().includes(search.toLowerCase()) ||
      p.dueDate.toLowerCase().includes(search.toLowerCase()) ||
      p.amount.toLowerCase().includes(search.toLowerCase()) ||
      p.status.toLowerCase().includes(search.toLowerCase()),
  );
  const filterednew = members.filter(
    (p) =>
      p.Name.toLowerCase().includes(search.toLowerCase()) ||
      p.Email.toLowerCase().includes(search.toLowerCase()) ||
      p.Status.toLowerCase().includes(search.toLowerCase()),
  );

  const openProfile = (profile, index) => {
    setSelectedProfile(profile);
    setProfileIndex(index);
    setActiveTab("details");
    setActiveSettingsSection("Upload Logo");
    setLogoPreview(null);
  };

  const handleNavProfile = (direction) => {
    const newIndex = profileIndex + direction;
    if (newIndex >= 0 && newIndex < filtered.length) {
      setProfileIndex(newIndex);
      setSelectedProfile(filtered[newIndex]);
    }
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
    setSelectedProfile(null);
  };

  const handleCreate = (newProfile) => {
    const id = profiles.length + 1;
    const created = {
      ...newProfile,
      id,
      avatar: `https://i.pravatar.cc/80?img=${id + 40}`,
    };
    setProfiles([...profiles, created]);
    setShowCreateModal(false);
  };

  /* ── LIST VIEW ── */

  return (
    <div className="min-h-full w-full">
      {/* HEADER BAR */}
      <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
        <span className="text-xl font-normal text-black  uppercase">
          Invoices
        </span>
      </div>

      <div className="px-6 pt-5">
        {/* SEARCH ROW */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-3 py-2 text-sm w-80">
            <FaSearch className="text-gray-400" />
            <input
              className="outline-none w-full placeholder-gray-400"
              placeholder="Search for invoice"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white text-gray-600 hover:bg-gray-50">
              5 <FaChevronDown size={10} />
            </button>
            <button className="border border-green-400 text-green-600 rounded-xl px-3 py-2 hover:bg-green-50">
              <FaEllipsisH size={14} />
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-wide border-b border-gray-200">
              <tr>
                <th className="p-3 w-10">
                  <input type="checkbox" />
                </th>
                <th className="text-left p-3">Service Name</th>
                <th className="text-left p-3">Invoice Date</th>
                <th className="text-left p-3">Due Date</th>
                <th className="text-left p-3">Amount</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((profile, i) => (
                <tr
                  key={profile.id}
                  className="border-b border-gray-100 hover:bg-green-50/40 cursor-pointer transition group"
                  // onClick={() => openProfile(profile, i)}
                >
                  <td className="p-3" onClick={(e) => e.stopPropagation()}>
                    <input type="checkbox" />
                  </td>
                  <td className="p-3 text-gray-500">{profile.serviceName}</td>
                  <td className="p-3 text-gray-500">{profile.invoiceDate}</td>
                  <td className="p-3 text-gray-500">{profile.dueDate}</td>
                  <td className="p-3 text-gray-500">{profile.amount}</td>
                  <td className="p-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full border text-sm font-medium bg-white
      ${
        profile.status === "Paid"
          ? "border-green-500 text-green-500"
          : profile.status === "Overdue"
            ? "border-red-500 text-red-500"
            : profile.status === "Pending"
              ? "border-orange-500 text-orange-500"
              : "border-gray-300 text-gray-500"
      }`}
                    >
                      {profile.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-between items-center mt-4 pb-6 text-sm text-gray-500">
          <p>
            Showing {filtered.length} of {profiles.length}
          </p>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
              <FaChevronLeft size={10} />
            </button>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                className={`w-7 h-7 flex items-center justify-center border rounded text-xs font-medium ${n === 1 ? "bg-green-500 text-white border-green-500" : "border-gray-300 hover:bg-gray-100 text-gray-600"}`}
              >
                {n}
              </button>
            ))}
            <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
              <FaChevronRight size={10} />
            </button>
          </div>
        </div>
      </div>

      {/* {showCreateModal && (
          <CreateBranchModal
            onClose={() => setShowCreateModal(false)}
            onCreate={handleCreate}
          />
        )} */}
    </div>
  );
}

function SubscriptionManagement() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-5xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Subscription Management
      </h2>

      <p className="text-gray-600 mb-4">
        Select a service to manage its subscription
      </p>

      {/* Dropdown */}
      <div className="mb-6">
        <select className="w-full p-3 border rounded-lg text-gray-700">
          <option>Sales Pipeline</option>
        </select>
      </div>

      {/* Plan Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-semibold">Growth Plan</h3>
              <span className="px-3 py-1 text-sm border border-green-500 text-green-500 rounded-full">
                Active
              </span>
            </div>

            <p className="text-gray-500 mt-4">Renews on Jan 31, 2025</p>
          </div>

          <div className="text-right">
            <h1 className="text-5xl font-bold">$100</h1>
            <p className="text-gray-500">/month</p>
          </div>
        </div>

        <hr className="my-6" />

        <div className="flex justify-end gap-4">
          <button className="px-6 py-2 border border-red-500 text-red-500 rounded-lg">
            Cancel Plan
          </button>
          <button className="px-6 py-2 bg-green-500 text-white rounded-lg">
            Change Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export function CampaignCredits() {
  const [credits, setCredits] = useState(2000);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-5xl mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Campaign Credits
      </h2>

      <p className="text-gray-600 mb-4">Credits Breakdown</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h1 className="text-5xl font-bold">150</h1>
          <p className="text-gray-500 mt-1">/400 used</p>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex">
              <div className="bg-green-500 w-[37%]" />
              <div className="bg-orange-400 w-[63%]" />
            </div>
          </div>

          <div className="flex justify-between mt-4 text-sm">
            <p className="text-green-500">37% used</p>
            <p className="text-orange-500">63% remaining</p>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border flex items-center justify-between">
          {/* Circle */}
          <div className="w-32 h-32 rounded-full border-8 border-yellow-400 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 text-sm">Total</p>
              <h2 className="text-xl font-bold">400</h2>
              <p className="text-gray-500 text-xs">Credits</p>
            </div>
          </div>

          {/* Breakdown */}
          <div className="text-sm space-y-2">
            <p>
              🟡 Monthly Subscribed: <b>200</b>
            </p>
            <p>
              🟢 Additionally Purchased: <b>40</b>
            </p>
            <p>
              🔵 Opening Credit: <b>80</b>
            </p>
            <p>
              🟣 Free: <b>80</b>
            </p>
          </div>
        </div>
      </div>

      {/* Buy Credits */}
      <div className="mt-8">
        <p className="text-gray-600 mb-2">Buy More Credit</p>

        <h1 className="text-5xl font-bold mb-4">{credits.toLocaleString()}</h1>

        {/* Slider */}
        <input
          type="range"
          min="500"
          max="50000"
          step="500"
          value={credits}
          onChange={(e) => setCredits(Number(e.target.value))}
          className="w-full mb-4"
        />

        {/* Presets */}
        <div className="flex flex-wrap gap-3 mb-4">
          {[500, 1000, 2000, 5000, 10000, 50000].map((val) => (
            <button
              key={val}
              onClick={() => setCredits(val)}
              className="px-4 py-2 border rounded-lg"
            >
              {val.toLocaleString()}
            </button>
          ))}
        </div>

        <button className="bg-green-500 text-white px-6 py-3 rounded-lg">
          Buy {credits.toLocaleString()} Credits
        </button>
      </div>
    </div>
  );
}

function BillingPage() {
  const [profiles, setProfiles] = useState(INITIAL_BRANCHES);
  const [members, setMembers] = useState(INITIAL_HISTORY);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("details");
  const [activeSettingsSection, setActiveSettingsSection] =
    useState("Upload Logo");
  const [profileIndex, setProfileIndex] = useState(0);
  const [logoPreview, setLogoPreview] = useState(null);

  const filtered = profiles.filter(
    (p) =>
      p.branchName.toLowerCase().includes(search.toLowerCase()) ||
      p.addressline1.toLowerCase().includes(search.toLowerCase()) ||
      p.addressline2.toLowerCase().includes(search.toLowerCase()) ||
      p.country.toLowerCase().includes(search.toLowerCase()) ||
      p.zipCode.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase()),
  );

  const filterednew = members.filter(
    (p) =>
      p.date.toLowerCase().includes(search.toLowerCase()) ||
      p.service.toLowerCase().includes(search.toLowerCase()) ||
      p.creditUsed.toLowerCase().includes(search.toLowerCase()) ||
      p.amount.toLowerCase().includes(search.toLowerCase()) ||
      p.status.toLowerCase().includes(search.toLowerCase()) ||
      p.receipt.toLowerCase().includes(search.toLowerCase()),
  );

  const openProfile = (profile, index) => {
    setSelectedProfile(profile);
    setProfileIndex(index);
    setActiveTab("details");
    setActiveSettingsSection("Upload Logo");
    setLogoPreview(null);
  };

  const handleNavProfile = (direction) => {
    const newIndex = profileIndex + direction;
    if (newIndex >= 0 && newIndex < filtered.length) {
      setProfileIndex(newIndex);
      setSelectedProfile(filtered[newIndex]);
    }
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
    setSelectedProfile(null);
  };

  const handleCreate = (newProfile) => {
    const id = profiles.length + 1;
    const created = {
      ...newProfile,
      id,
      avatar: `https://i.pravatar.cc/80?img=${id + 40}`,
    };
    setProfiles([...profiles, created]);
    setShowCreateModal(false);
  };

  useEffect(() => {
    if (activeTab === "details") {
      setActiveSettingsSection("Campaign Credits");
    }
  }, [activeTab]);

  /* ── LIST VIEW ── */

  return (
    <div className="min-h-full bg-gray-50">
      {/* TOP NAV */}

      <div className="px-6 pt-5 pb-10 max-w-5xl">
        {/* PROFILE HEADER */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-4">
            {/* <img
              src={selectedProfile.avatar}
              className="w-16 h-16 rounded-full object-cover border-2 border-green-200 shadow"
              alt=""
            /> */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Billing</h1>
              {/* <p className="text-gray-500 text-sm mt-0.5">
                {selectedProfile.businessName}
              </p> */}
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="flex gap-0 border-b border-gray-200 mb-5">
          <button
            onClick={() => setActiveTab("details")}
            className={`px-5 pb-3 pt-1 text-sm font-medium flex items-center gap-2 border-b-2 transition ${activeTab === "details" ? "border-green-500 text-green-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            <FaInfoCircle size={12} /> Details
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`px-5 pb-3 pt-1 text-sm font-medium flex items-center gap-2 border-b-2 transition ${activeTab === "history" ? "border-green-500 text-green-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            <img src={historyicon} className="w-5 h-5" /> Transaction history
          </button>
        </div>

        {/* DETAILS TAB */}
        {activeTab === "details" && (
          <div className="flex gap-4">
            <div className="w-52 flex-shrink-0">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {DETAILS_SECTIONS.map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSettingsSection(section)}
                    className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 last:border-0 transition ${activeSettingsSection === section ? "bg-green-50 text-green-700 font-semibold" : "text-gray-600 hover:bg-gray-50"}`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 min-h-64">
                {activeSettingsSection === "Invoices" && <InvoicePage />}
                {activeSettingsSection === "Subscription Management" && (
                  <SubscriptionManagement />
                )}
                {activeSettingsSection === "Campaign Credits" && (
                  <CampaignCredits />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Members TAB */}
        {activeTab === "history" && (
          <>
            <div className="h-full w-full bg-white rounded-sm ">
              <div className="flex justify-between items-center px-6 py-4 bg-white  border-gray-200">
                <span className="text-xl font-normal text-black  uppercase">
                  Transaction History
                </span>
              </div>

              <div className="px-6 pt-5">
                {/* SEARCH ROW */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-3 py-2 text-sm w-80">
                    <FaSearch className="text-gray-400" />
                    <input
                      className="outline-none w-full placeholder-gray-400"
                      placeholder="Search for a service"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white text-gray-600 hover:bg-gray-50">
                      5 <FaChevronDown size={10} />
                    </button>
                    <button className="border border-green-400 text-green-600 rounded-xl px-3 py-2 hover:bg-green-50">
                      <FaEllipsisH size={14} />
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-wide border-b border-gray-200">
                      <tr>
                        <th className="p-3 w-10">
                          <input type="checkbox" />
                        </th>
                        <th className="text-left p-3">Date</th>
                        <th className="text-left p-3">Service</th>
                        <th className="text-left p-3">Credits Used</th>
                        <th className="text-left p-3">Amount</th>
                        <th className="text-left p-3">Status</th>
                        <th className="text-left p-3">Receipt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filterednew.map((member, i) => (
                        <tr
                          key={member.id}
                          className="border-b border-gray-100 hover:bg-green-50/40 cursor-pointer transition group"
                          // onClick={() => openProfile(members, i)}
                        >
                          <td
                            className="p-3"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <input type="checkbox" />
                          </td>
                          <td className="p-3">
                            <div className="flex items-center gap-3">
                              {/* <img
                          src={member.avatar}
                          className="w-9 h-9 rounded-full object-cover border border-gray-200"
                          alt=""
                        /> */}
                              <span className="font-medium text-black group-hover:text-green-700 transition">
                                {member.date}
                              </span>
                            </div>
                          </td>
                          <td className="p-3 text-gray-500">
                            {member.service}
                          </td>
                          <td className="p-3 text-gray-500">
                            {member.creditUsed}
                          </td>
                          <td className="p-3 text-gray-500">{member.amount}</td>
                          <td className="p-3">
                            <span
                              className={`inline-block px-3 py-1 rounded-full border text-sm font-medium bg-white
      ${
        member.status === "Paid" || member.status === "Successful"
          ? "border-green-500 text-green-500"
          : member.status === "Failed"
            ? "border-red-500 text-red-500"
            : "border-gray-300 text-gray-500"
      }`}
                            >
                              {member.status}
                            </span>
                          </td>
                          <td className="p-3">
                            <button className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1 text-gray-500 hover:bg-gray-100">
                              <img
                                src={downloader}
                                alt="download"
                                className="w-5 h-5"
                              />
                              <span>{member.receipt}</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );

  // return (
  //   <div className="min-h-full">
  //     {/* HEADER BAR */}
  //     <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
  //       <span className="text-xl font-normal text-black  uppercase">
  //         Branches
  //       </span>
  //       <button
  //         onClick={() => setShowCreateModal(true)}
  //         className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black text-sm font-semibold px-4 py-2 rounded-lg transition shadow-sm"
  //       >
  //         <FaPlus size={11} /> Create Branch
  //       </button>
  //     </div>

  //     <div className="px-6 pt-5">
  //       {/* SEARCH ROW */}
  //       <div className="flex items-center gap-3 mb-4">
  //         <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-3 py-2 text-sm w-80">
  //           <FaSearch className="text-gray-400" />
  //           <input
  //             className="outline-none w-full placeholder-gray-400"
  //             placeholder="Search for a branch"
  //             value={search}
  //             onChange={(e) => setSearch(e.target.value)}
  //           />
  //         </div>
  //         <div className="ml-auto flex items-center gap-2">
  //           <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white text-gray-600 hover:bg-gray-50">
  //             5 <FaChevronDown size={10} />
  //           </button>
  //           <button className="border border-green-400 text-green-600 rounded-xl px-3 py-2 hover:bg-green-50">
  //             <FaEllipsisH size={14} />
  //           </button>
  //         </div>
  //       </div>

  //       {/* TABLE */}
  //       <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
  //         <table className="w-full text-sm">
  //           <thead className="bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-wide border-b border-gray-200">
  //             <tr>
  //               <th className="p-3 w-10">
  //                 <input type="checkbox" />
  //               </th>
  //               <th className="text-left p-3">Branch Name</th>
  //               <th className="text-left p-3">Address Line 1</th>
  //               <th className="text-left p-3">Address Line 2</th>
  //               <th className="text-left p-3">Country</th>
  //               <th className="text-left p-3">Zip/Postal Code</th>
  //               <th className="text-left p-3">City/Town</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {filtered.map((profile, i) => (
  //               <tr
  //                 key={profile.id}
  //                 className="border-b border-gray-100 hover:bg-green-50/40 cursor-pointer transition group"
  //                 onClick={() => openProfile(profile, i)}
  //               >
  //                 <td className="p-3" onClick={(e) => e.stopPropagation()}>
  //                   <input type="checkbox" />
  //                 </td>
  //                 <td className="p-3 text-gray-500">{profile.branchName}</td>
  //                 <td className="p-3 text-gray-500">{profile.addressline1}</td>
  //                 <td className="p-3 text-gray-500">{profile.addressline2}</td>
  //                 <td className="p-3 text-gray-500">{profile.country}</td>
  //                 <td className="p-3 text-gray-500">{profile.zipCode}</td>
  //                 <td className="p-3 text-gray-500">{profile.city}</td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>

  //       {/* PAGINATION */}
  //       <div className="flex justify-between items-center mt-4 pb-6 text-sm text-gray-500">
  //         <p>
  //           Showing {filtered.length} of {profiles.length}
  //         </p>
  //         <div className="flex items-center gap-1">
  //           <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
  //             <FaChevronLeft size={10} />
  //           </button>
  //           {[1, 2, 3, 4, 5].map((n) => (
  //             <button
  //               key={n}
  //               className={`w-7 h-7 flex items-center justify-center border rounded text-xs font-medium ${n === 1 ? "bg-green-500 text-white border-green-500" : "border-gray-300 hover:bg-gray-100 text-gray-600"}`}
  //             >
  //               {n}
  //             </button>
  //           ))}
  //           <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
  //             <FaChevronRight size={10} />
  //           </button>
  //         </div>
  //       </div>
  //     </div>

  //     {showCreateModal && (
  //       <CreateBranchModal
  //         onClose={() => setShowCreateModal(false)}
  //         onCreate={handleCreate}
  //       />
  //     )}
  //   </div>
  // );
  /* ── DETAIL VIEW ── */
}
/* ─────────────────────────────────────
   UPLOAD LOGO SECTION
───────────────────────────────────────*/
function UploadLogoSection({ profile, logoPreview, setLogoPreview }) {
  const fileRef = useRef(null);
  return (
    <div>
      <h3 className="font-semibold text-gray-800 mb-5">Upload Logo</h3>
      <div className="flex items-start gap-6">
        <div className="w-32 h-32 rounded-xl border-2 border-dashed border-gray-300 overflow-hidden bg-gray-50">
          <img
            src={logoPreview || profile.avatar}
            className="w-full h-full object-cover"
            alt="logo"
          />
        </div>
        <div className="flex flex-col gap-3 mt-2">
          <button
            onClick={() => fileRef.current.click()}
            className="border border-green-500 text-green-600 hover:bg-green-50 px-5 py-2 rounded-lg text-sm font-medium transition"
          >
            Change Logo
          </button>
          <button className="border border-gray-300 text-gray-600 hover:bg-gray-50 px-5 py-2 rounded-lg text-sm transition">
            Preview in document
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files[0];
              if (f) setLogoPreview(URL.createObjectURL(f));
            }}
          />
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition">
          Apply Changes
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   CREATE PROFILE MODAL
───────────────────────────────────────*/
function CreateProfileModal({ onClose, onCreate }) {
  const fileRef = useRef(null);
  const [avatar, setAvatar] = useState(null);
  const [form, setForm] = useState({
    profileName: "",
    businessName: "",
    primaryPhone: "",
    secondaryPhone: "",
    website: "",
    email: "",
    officeLocation: "",
    fax: "",
    taxNumber: "",
    country: "",
    zipCode: "",
    city: "",
    state: "",
  });

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const fields = [
    { key: "profileName", label: "Profile Name" },
    { key: "businessName", label: "Business Name" },
    { key: "primaryPhone", label: "Primary Phone Number" },
    { key: "secondaryPhone", label: "Secondary Phone Number" },
    { key: "website", label: "Website" },
    { key: "email", label: "Email" },
    { key: "officeLocation", label: "Office Location" },
    { key: "fax", label: "Fax" },
    { key: "taxNumber", label: "Tax Number" },
    { key: "country", label: "Country", isSelect: true },
    { key: "zipCode", label: "ZIP/Postal Code" },
    { key: "city", label: "City/Town" },
    { key: "state", label: "State/Province", fullWidth: true },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xl font-light leading-none">
                +
              </span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Create a Profile
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition"
          >
            <X size={15} />
          </button>
        </div>

        {/* BODY */}
        <div className="flex flex-1 overflow-hidden">
          {/* Avatar column */}
          <div className="w-36 flex-shrink-0 flex flex-col items-center pt-8 border-r border-gray-100 bg-gray-50">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center border-2 border-gray-300">
                {avatar ? (
                  <img
                    src={avatar}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                ) : (
                  <svg
                    viewBox="0 0 100 100"
                    className="w-16 h-16 text-gray-400"
                    fill="currentColor"
                  >
                    <circle cx="50" cy="37" r="20" />
                    <ellipse cx="50" cy="85" rx="35" ry="22" />
                  </svg>
                )}
              </div>
              <button
                onClick={() => fileRef.current.click()}
                className="absolute bottom-0 right-0 w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center shadow hover:bg-green-600 transition"
              >
                {avatar ? (
                  <Pencil size={11} />
                ) : (
                  <span className="text-sm font-bold">+</span>
                )}
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files[0];
                  if (f) setAvatar(URL.createObjectURL(f));
                }}
              />
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {fields.map(({ key, label, isSelect, fullWidth }) => (
                <div
                  key={key}
                  className={`flex flex-col gap-1 ${fullWidth ? "col-span-2 max-w-xs" : ""}`}
                >
                  <label className="text-xs text-gray-500 font-medium">
                    {label}
                  </label>
                  {isSelect ? (
                    <select
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-green-400 bg-white"
                      value={form[key]}
                      onChange={set(key)}
                    >
                      <option value="">Select country</option>
                      <option>Ghana</option>
                      <option>Nigeria</option>
                      <option>Kenya</option>
                      <option>South Africa</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                    </select>
                  ) : (
                    <input
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400 focus:ring-1 focus:ring-green-200"
                      placeholder={label}
                      value={form[key]}
                      onChange={set(key)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 text-sm hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (form.profileName) onCreate(form);
            }}
            className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition"
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
}

function CreateDepartmentModal({ onClose, onCreate }) {
  const [form, setForm] = useState({
    departmentName: "",
    departmentDescription: "",
  });

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const fields = [
    { key: "departmentName", label: "Department Name" },
    {
      key: "departmentDescription",
      label: "Department Description",
      fullWidth: true,
      isTextarea: true,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xl font-light leading-none">
                +
              </span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Create a Department
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition"
          >
            <X size={15} />
          </button>
        </div>

        {/* BODY */}
        <div className="">
          {/* Form */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 gap-x-5 gap-y-4">
              {fields.map(({ key, label, isTextarea, fullWidth }) => (
                <div
                  key={key}
                  className={`flex flex-col gap-1 ${fullWidth ? "" : ""}`}
                >
                  <label className="text-xs text-gray-500 font-medium">
                    {label}
                  </label>
                  {isTextarea ? (
                    <textarea
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400 focus:ring-1 focus:ring-green-200 h-60"
                      placeholder={label}
                      value={form[key]}
                      onChange={set(key)}
                    />
                  ) : (
                    <input
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400 focus:ring-1 focus:ring-green-200"
                      placeholder={label}
                      value={form[key]}
                      onChange={set(key)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 text-sm hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (form.draftName) onCreate(form);
            }}
            className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-black text-sm font-semibold transition"
          >
            Save Department
          </button>
        </div>
      </div>
    </div>
  );
}

function CreateTeamModal({ onClose, onCreate }) {
  const [form, setForm] = useState({
    teamName: "",
    teamDescription: "",
  });

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const fields = [
    { key: "teamName", label: "Team Name" },
    {
      key: "teamDescription",
      label: "Team Description",
      fullWidth: true,
      isTextarea: true,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xl font-light leading-none">
                +
              </span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Create a Team
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition"
          >
            <X size={15} />
          </button>
        </div>

        {/* BODY */}
        <div className="">
          {/* Form */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 gap-x-5 gap-y-4">
              {fields.map(({ key, label, isTextarea, fullWidth }) => (
                <div
                  key={key}
                  className={`flex flex-col gap-1 ${fullWidth ? "" : ""}`}
                >
                  <label className="text-xs text-gray-500 font-medium">
                    {label}
                  </label>
                  {isTextarea ? (
                    <textarea
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400 focus:ring-1 focus:ring-green-200 h-60"
                      placeholder={label}
                      value={form[key]}
                      onChange={set(key)}
                    />
                  ) : (
                    <input
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400 focus:ring-1 focus:ring-green-200"
                      placeholder={label}
                      value={form[key]}
                      onChange={set(key)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 text-sm hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (form.teamName) onCreate(form);
            }}
            className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-black text-sm font-semibold transition"
          >
            Save Team
          </button>
        </div>
      </div>
    </div>
  );
}

function CreateBranchModal({ onClose, onCreate }) {
  const [form, setForm] = useState({
    branchName: "",
    addressline1: "",
    addressline2: "",
    country: "",
    zipCode: "",
    city: "",
    state: "",
    teamDescription: "",
  });

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const fields = [
    { key: "branchName", label: "Branch Name" },
    { key: "addressline1", label: "Address Line 1" },
    { key: "addressline2", label: "Address Line 2" },
    {
      key: "country",
      label: "Country",
      isSelect: true,
    },
    { key: "zipCode", label: "ZIP/Postal Code" },
    { key: "city", label: "City/Town" },
    { key: "state", label: "State/Province" },
    {
      key: "teamDescription",
      label: "Team Description",
      fullWidth: true,
      isTextarea: true,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xl font-light leading-none">
                +
              </span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Create Branch
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition"
          >
            <X size={15} />
          </button>
        </div>

        {/* BODY */}
        <div className="">
          {/* Form */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {fields.map(({ key, label, isTextarea, isSelect }) => (
                <div
                  key={key}
                  className={`flex flex-col gap-1 ${isTextarea ? "col-span-2 max-w-xs" : ""}`}
                >
                  <label className="text-xs text-gray-500 font-medium">
                    {label}
                  </label>
                  {isTextarea ? (
                    <textarea
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400 focus:ring-1 focus:ring-green-200 h-60"
                      placeholder={label}
                      value={form[key]}
                      onChange={set(key)}
                    />
                  ) : isSelect ? (
                    <select
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-green-400 bg-white"
                      value={form[key]}
                      onChange={set(key)}
                    >
                      <option value="">Select country</option>
                      <option>Ghana</option>
                      <option>Nigeria</option>
                      <option>Kenya</option>
                      <option>South Africa</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                    </select>
                  ) : (
                    <input
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400 focus:ring-1 focus:ring-green-200"
                      placeholder={label}
                      value={form[key]}
                      onChange={set(key)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-6 py-2 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 text-sm hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (form.branchName) onCreate(form);
            }}
            className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-black text-sm font-semibold transition"
          >
            Save Branch
          </button>
        </div>
      </div>
    </div>
  );
}

function CreateDraftModal({ onClose, onCreate }) {
  const [form, setForm] = useState({
    draftName: "",
    draftType: "",
    message: "",
  });

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const fields = [
    { key: "draftName", label: "Draft Name", fullWidth: true },
    { key: "draftType", label: "Draft Type", isSelect: true, fullWidth: true },
    { key: "message", label: "Message", fullWidth: true, isTextarea: true },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xl font-light leading-none">
                +
              </span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Create New Draft
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition"
          >
            <X size={15} />
          </button>
        </div>

        {/* BODY */}
        <div className="">
          {/* Form */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 gap-x-5 gap-y-4">
              {fields.map(({ key, label, isSelect, isTextarea, fullWidth }) => (
                <div
                  key={key}
                  className={`flex flex-col gap-1 ${fullWidth ? "" : ""}`}
                >
                  <label className="text-xs text-gray-500 font-medium">
                    {label}
                  </label>
                  {isSelect ? (
                    <select
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-green-400 bg-white"
                      value={form[key]}
                      onChange={set(key)}
                    >
                      <option value="">Select from List</option>
                      <option>Email</option>
                      <option>SMS</option>
                    </select>
                  ) : isTextarea ? (
                    <textarea
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400 focus:ring-1 focus:ring-green-200 h-60"
                      placeholder={label}
                      value={form[key]}
                      onChange={set(key)}
                    />
                  ) : (
                    <input
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400 focus:ring-1 focus:ring-green-200"
                      placeholder={label}
                      value={form[key]}
                      onChange={set(key)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 text-sm hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (form.draftName) onCreate(form);
            }}
            className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-black text-sm font-semibold transition"
          >
            Save Draft
          </button>
        </div>
      </div>
    </div>
  );
}
/* ─────────────────────────────────────
   BILLING ADDRESS SECTION
───────────────────────────────────────*/
function BillingAddressSection({ profile }) {
  const inputCls =
    "border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-green-400 focus:ring-1 focus:ring-green-100 w-full placeholder-gray-400";
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Billing Address
      </h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-gray-700">Name</label>
          <input className={inputCls} placeholder="Name" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-gray-700">Phone Number</label>
          <input className={inputCls} placeholder="Phone Number" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-gray-700">Address Line 1</label>
          <input className={inputCls} placeholder="Address Line 1" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-gray-700">Address Line 2</label>
          <input className={inputCls} placeholder="Address Line 2" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-gray-700">Country</label>
          <div className="relative">
            <select
              className={`${inputCls} appearance-none pr-8 text-gray-400`}
              defaultValue=""
            >
              <option value="" disabled>
                Select Country
              </option>
              <option>Ghana</option>
              <option>Nigeria</option>
              <option>Kenya</option>
              <option>South Africa</option>
              <option>United Kingdom</option>
              <option>United States</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-gray-700">ZIP/Postal Code</label>
          <input
            className={inputCls}
            placeholder="ZIP/Postal Code"
            defaultValue={profile.zipCode}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-gray-700">City/Town</label>
          <input
            className={inputCls}
            placeholder="City/Town"
            defaultValue={profile.city}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-gray-700">State/Province</label>
          <input
            className={inputCls}
            placeholder="State/Province"
            defaultValue={profile.state}
          />
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition">
          Apply Changes
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   ESTIMATE AND INVOICE FORMATTING
───────────────────────────────────────*/
function EstimateInvoiceFormattingSection() {
  const [toggles, setToggles] = useState({
    showSalesperson: false,
    showCreator: false,
    showTaxable: false,
    includeDueDate: false,
    showTerms: false,
    showWarranty: false,
    showPaymentDetails: false,
    prefixZip: false,
    taxOnTransport: false,
    taxOnLabor: false,
    showEstimatedCost: false,
    showProfit: false,
    includeDiscount: false,
  });
  const [dropdowns, setDropdowns] = useState({
    estimateTitle: "Quotation",
    invoiceTitle: "Invoice",
    dateFormat: "DD/MM/YYY",
    timezone: "Africa/Accra",
    timeFormat: "12-hour time",
    currency: "GHS - Ghana Cedi",
    estimatorLabel: "Estimator",
  });

  const toggle = (key) => setToggles((p) => ({ ...p, [key]: !p[key] }));
  const setDrop = (key) => (e) =>
    setDropdowns((p) => ({ ...p, [key]: e.target.value }));

  const Toggle = ({ k }) => (
    <button
      onClick={() => toggle(k)}
      className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${toggles[k] ? "bg-green-500" : "bg-gray-300"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${toggles[k] ? "translate-x-5" : ""}`}
      />
    </button>
  );

  const selectCls =
    "border border-gray-300 rounded-xl px-3 py-2 text-sm outline-none focus:border-green-400 bg-white min-w-48";
  const SectionTitle = ({ children }) => (
    <h4 className="text-base font-semibold text-gray-900 mt-6 mb-3">
      {children}
    </h4>
  );
  const Row = ({ label, k }) => (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-700">{label}</span>
      <Toggle k={k} />
    </div>
  );
  const DropRow = ({ label, k, options }) => (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-700">{label}</span>
      <select className={selectCls} value={dropdowns[k]} onChange={setDrop(k)}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="overflow-y-auto">
      <h3 className="text-lg font-semibold text-gray-900">
        Estimate and Invoice Formatting
      </h3>

      <SectionTitle>Display Options</SectionTitle>
      <Row
        label="Show the name of the salesperson on estimates or invoices."
        k="showSalesperson"
      />
      <Row
        label="Show the name of the creator on printed documents."
        k="showCreator"
      />
      <Row
        label="Display the taxable amount on quotations and invoices."
        k="showTaxable"
      />
      <Row
        label="Include the due date on estimates and invoices."
        k="includeDueDate"
      />
      <Row
        label="Show terms and conditions on estimates or invoices."
        k="showTerms"
      />
      <Row
        label="Display product or service warranty details on estimates or invoices."
        k="showWarranty"
      />
      <Row
        label="Show payment details (e.g., bank details) on estimates and invoices."
        k="showPaymentDetails"
      />
      <Row
        label="Prefix ZIP/Postal Code to the phone number on printed documents."
        k="prefixZip"
      />

      <SectionTitle>Tax Application</SectionTitle>
      <Row
        label="Apply sales tax on transportation/delivery services."
        k="taxOnTransport"
      />
      <Row
        label="Apply sales tax on labor/installation services."
        k="taxOnLabor"
      />

      <SectionTitle>Financial Information</SectionTitle>
      <Row
        label="Display the estimated cost of products/items on templates."
        k="showEstimatedCost"
      />
      <Row
        label="Show the estimated profit for products/items on templates."
        k="showProfit"
      />
      <Row
        label="Include the discount percentage (e.g., 5%) on estimates and invoices."
        k="includeDiscount"
      />

      <SectionTitle>Customizable Fields</SectionTitle>
      <DropRow
        label="Estimate Document Title"
        k="estimateTitle"
        options={["Quotation", "Estimate", "Proposal"]}
      />
      <DropRow
        label="Invoice Document Title"
        k="invoiceTitle"
        options={["Invoice", "Bill", "Receipt"]}
      />
      <DropRow
        label="Date Format"
        k="dateFormat"
        options={["DD/MM/YYY", "MM/DD/YYYY", "YYYY-MM-DD"]}
      />
      <DropRow
        label="Time Zone"
        k="timezone"
        options={[
          "Africa/Accra",
          "Africa/Lagos",
          "Europe/London",
          "America/New_York",
        ]}
      />
      <DropRow
        label="Time Format"
        k="timeFormat"
        options={["12-hour time", "24-hour time"]}
      />
      <DropRow
        label="Currency"
        k="currency"
        options={[
          "🇬🇭 GHS - Ghana Cedi",
          "🇳🇬 NGN - Nigerian Naira",
          "🇺🇸 USD - US Dollar",
          "🇬🇧 GBP - British Pound",
        ]}
      />

      <SectionTitle>Custom Label</SectionTitle>
      <DropRow
        label="We term the individual preparing estimates or invoices as"
        k="estimatorLabel"
        options={["Estimator", "Salesperson", "Agent", "Representative"]}
      />

      <div className="flex justify-end mt-6 pb-2">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition">
          Apply Changes
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   TERMS AND CONDITIONS SECTION
───────────────────────────────────────*/
function TermsAndConditionsSection() {
  const inputCls =
    "border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-green-400 focus:ring-1 focus:ring-green-100 w-full placeholder-gray-400";
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Terms and Conditions
      </h3>
      <div className="space-y-5">
        <div className="flex items-start gap-8">
          <label className="text-sm text-gray-700 w-36 flex-shrink-0 pt-2.5">
            Display Header
          </label>
          <input className={inputCls} placeholder="Enter a display header" />
        </div>
        <div className="flex items-start gap-8">
          <label className="text-sm text-gray-700 w-36 flex-shrink-0 pt-2.5">
            Terms
          </label>
          <textarea
            className="border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-400 focus:ring-1 focus:ring-green-100 w-full placeholder-gray-400 resize-none h-48"
            placeholder="Enter terms"
          />
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition">
          Apply Changes
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   PAYMENT DETAILS SECTION
───────────────────────────────────────*/
function PaymentDetailsSection() {
  const inputCls =
    "border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-green-400 focus:ring-1 focus:ring-green-100 w-full placeholder-gray-400";
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Payment Details
      </h3>
      <div className="space-y-5">
        <div className="flex items-start gap-8">
          <label className="text-sm text-gray-700 w-40 flex-shrink-0 pt-2.5">
            Display Header
          </label>
          <input className={inputCls} placeholder="Enter a display header" />
        </div>
        <div className="flex items-start gap-8">
          <label className="text-sm text-gray-700 w-40 flex-shrink-0 pt-2.5">
            Details
          </label>
          <textarea
            className="border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-400 focus:ring-1 focus:ring-green-100 w-full placeholder-gray-400 resize-none h-48"
            placeholder="Enter details"
          />
        </div>
        <div className="flex items-start gap-8">
          <label className="text-sm text-gray-700 w-40 flex-shrink-0 pt-2.5">
            Appreciation Notes
          </label>
          <textarea
            className="border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-400 focus:ring-1 focus:ring-green-100 w-full placeholder-gray-400 resize-none h-32"
            placeholder="Enter appreciation notes"
          />
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition">
          Apply Changes
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   GEO-LOCATION SECTION
───────────────────────────────────────*/
function GeoLocationSection() {
  const [location, setLocation] = useState("");
  const [pin, setPin] = useState({ x: 48, y: 52 });
  const [dragging, setDragging] = useState(false);
  const mapRef = useRef(null);

  const handleMouseDown = (e) => {
    setDragging(true);
    movePinTo(e);
  };
  const handleMouseMove = (e) => {
    if (!dragging) return;
    movePinTo(e);
  };
  const handleMouseUp = () => setDragging(false);

  const movePinTo = (e) => {
    if (!mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    const x = Math.min(
      100,
      Math.max(0, ((e.clientX - rect.left) / rect.width) * 100),
    );
    const y = Math.min(
      100,
      Math.max(0, ((e.clientY - rect.top) / rect.height) * 100),
    );
    setPin({ x, y });
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Geo-Location</h3>
      <div className="flex items-center gap-4 mb-3">
        <label className="text-sm text-gray-700 w-20 flex-shrink-0">
          Location
        </label>
        <input
          className="border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-green-400 focus:ring-1 focus:ring-green-100 flex-1 placeholder-gray-400"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <p className="text-sm text-gray-700 mb-3">
        You can move the pin to your building to set your location
      </p>

      {/* MAP */}
      <div
        ref={mapRef}
        className="relative w-full h-72 rounded-xl overflow-hidden cursor-crosshair select-none border border-gray-200"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Map tile background using OpenStreetMap static-style SVG */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 288"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <rect width="800" height="288" fill="#e8e0d8" />
          {/* Roads */}
          <path
            d="M0,80 Q200,60 400,90 Q600,120 800,80"
            stroke="#fff"
            strokeWidth="8"
            fill="none"
          />
          <path
            d="M0,140 Q150,130 300,145 Q500,160 800,140"
            stroke="#fff"
            strokeWidth="6"
            fill="none"
          />
          <path
            d="M0,200 Q300,190 500,210 Q650,225 800,200"
            stroke="#fff"
            strokeWidth="5"
            fill="none"
          />
          <path
            d="M200,0 Q220,100 210,288"
            stroke="#fff"
            strokeWidth="5"
            fill="none"
          />
          <path
            d="M450,0 Q460,80 455,288"
            stroke="#fff"
            strokeWidth="7"
            fill="none"
          />
          <path
            d="M650,0 Q660,100 655,288"
            stroke="#fff"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M0,60 Q100,55 200,65 Q350,75 500,60"
            stroke="#d4cfc8"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M500,150 Q600,160 700,155 Q750,153 800,150"
            stroke="#d4cfc8"
            strokeWidth="3"
            fill="none"
          />
          {/* Blocks */}
          <rect
            x="10"
            y="100"
            width="80"
            height="50"
            rx="4"
            fill="#d9d2c8"
            opacity="0.7"
          />
          <rect
            x="110"
            y="95"
            width="60"
            height="40"
            rx="4"
            fill="#d9d2c8"
            opacity="0.7"
          />
          <rect
            x="250"
            y="105"
            width="100"
            height="55"
            rx="4"
            fill="#d9d2c8"
            opacity="0.7"
          />
          <rect
            x="480"
            y="100"
            width="70"
            height="45"
            rx="4"
            fill="#d9d2c8"
            opacity="0.7"
          />
          <rect
            x="560"
            y="90"
            width="90"
            height="60"
            rx="4"
            fill="#d9d2c8"
            opacity="0.7"
          />
          <rect
            x="10"
            y="165"
            width="120"
            height="50"
            rx="4"
            fill="#d9d2c8"
            opacity="0.7"
          />
          <rect
            x="300"
            y="170"
            width="80"
            height="40"
            rx="4"
            fill="#d9d2c8"
            opacity="0.7"
          />
          <rect
            x="620"
            y="165"
            width="100"
            height="55"
            rx="4"
            fill="#d9d2c8"
            opacity="0.7"
          />
          {/* Green area */}
          <ellipse
            cx="130"
            cy="200"
            rx="40"
            ry="25"
            fill="#c8dfc8"
            opacity="0.8"
          />
          <ellipse
            cx="700"
            cy="230"
            rx="30"
            ry="18"
            fill="#c8dfc8"
            opacity="0.8"
          />
          {/* Labels */}
          <text x="30" y="130" fontSize="9" fill="#888" fontFamily="sans-serif">
            Main Street
          </text>
          <text
            x="260"
            y="125"
            fontSize="8"
            fill="#888"
            fontFamily="sans-serif"
          >
            Business District
          </text>
          <text
            x="490"
            y="120"
            fontSize="8"
            fill="#888"
            fontFamily="sans-serif"
          >
            Central Ave
          </text>
        </svg>

        {/* Draggable Pin */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: `${pin.x}%`,
            top: `${pin.y}%`,
            transform: "translate(-50%, -100%)",
          }}
        >
          <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
            <path
              d="M14 0C6.27 0 0 6.27 0 14c0 9.33 14 22 14 22S28 23.33 28 14C28 6.27 21.73 0 14 0z"
              fill="#e53935"
            />
            <circle cx="14" cy="14" r="5" fill="white" />
          </svg>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition">
          Apply Changes
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   TEMPLATES SECTION
───────────────────────────────────────*/
function TemplatesSection() {
  const [invoiceTemplate, setInvoiceTemplate] = useState("");
  const [estimateTemplate, setEstimateTemplate] = useState("");

  const selectCls =
    "border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-green-400 appearance-none bg-white w-72 pr-8 text-gray-400";

  const PreviewBox = ({ selected }) => (
    <div className="flex-1 rounded-xl bg-gray-100 flex items-center justify-center min-h-64 border border-gray-200">
      <span className="text-sm text-gray-400">
        {selected ? selected + " Preview" : "Template"}
      </span>
    </div>
  );

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Templates</h3>

      {/* Invoice Template */}
      <div className="flex gap-8 mb-8">
        <div className="w-72 flex-shrink-0">
          <label className="text-sm text-gray-700 block mb-2">
            Invoice Template
          </label>
          <div className="relative">
            <select
              className={selectCls}
              value={invoiceTemplate}
              onChange={(e) => setInvoiceTemplate(e.target.value)}
            >
              <option value="" disabled>
                Select Template
              </option>
              <option value="Classic">Classic</option>
              <option value="Modern">Modern</option>
              <option value="Minimal">Minimal</option>
              <option value="Professional">Professional</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-1">
          <label className="text-sm text-gray-700">Template Preview</label>
          <PreviewBox selected={invoiceTemplate} />
        </div>
      </div>

      {/* Estimate Template */}
      <div className="flex gap-8">
        <div className="w-72 flex-shrink-0">
          <label className="text-sm text-gray-700 block mb-2">
            Estimate Template
          </label>
          <div className="relative">
            <select
              className={selectCls}
              value={estimateTemplate}
              onChange={(e) => setEstimateTemplate(e.target.value)}
            >
              <option value="" disabled>
                Select Template
              </option>
              <option value="Classic">Classic</option>
              <option value="Modern">Modern</option>
              <option value="Minimal">Minimal</option>
              <option value="Professional">Professional</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-1">
          <label className="text-sm text-gray-700">Template Preview</label>
          <PreviewBox selected={estimateTemplate} />
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition">
          Apply Changes
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   SETTINGS PLACEHOLDER
───────────────────────────────────────*/
function SettingsPlaceholder({ title }) {
  return (
    <div>
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-6">
        Configure settings for {title.toLowerCase()}.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-10 bg-gray-100 rounded-lg" />
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition">
          Apply Changes
        </button>
      </div>
    </div>
  );
}
