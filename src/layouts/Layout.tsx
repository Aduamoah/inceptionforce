import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
