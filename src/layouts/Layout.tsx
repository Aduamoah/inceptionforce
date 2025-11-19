import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen max-w-full flex flex-col">
      <main className="flex-1 lg:p-4 ">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
