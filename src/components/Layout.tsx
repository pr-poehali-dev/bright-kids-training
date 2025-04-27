import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-sport-light flex flex-col md:flex-row">
      <div className="md:flex">
        <Navigation />
      </div>
      <main className="flex-1 p-4 md:p-8 pb-24 md:pb-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
