"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaHome, FaTasks, FaClock, FaUsers, FaBook, FaCog, FaPlus, FaTrash } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-blue-50">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-950 text-white p-5 border-r fixed h-full">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/images/unicenter.jpg" alt="Unicenter Logo" width={100} height={100} />
        </div>
        <h2 className="text-xl font-bold mb-6 text-center">Dashboard</h2>
        <nav className="space-y-4">
          <NavItem icon={<FaHome />} label="Dashboard" href="/" />
          <NavItem icon={<FaTasks />} label="Project" href="/project.tsx" />
          <NavItem icon={<FaClock />} label="My Tasks" href="/tasks" />
          <NavItem icon={<FaUsers />} label="Attendance" href="/attendance" />
          <NavItem icon={<FaBook />} label="Work Diary" href="/diary" />
          <NavItem icon={<FaCog />} label="Settings" href="/settings" />
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6">
        {/* Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          <StatCard number="28" label="Total Projects" color="bg-blue-500 text-white" />
          <StatCard number="500" label="Total Tasks" color="bg-blue-400 text-white" />
          <StatCard number="200" label="Completed Tasks" color="bg-green-500 text-white" />
          <StatCard number="100" label="Pending Tasks" color="bg-yellow-500 text-white" />
          <StatCard number="32" label="Overdue Tasks" color="bg-red-500 text-white" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Task Tables */}
          <div className="col-span-2 bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg text-blue-700 mb-2">Overall Due Tasks</h3>
            <TaskTable />
          </div>

          {/* Task Activity Graph (Placeholder) */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg text-blue-700 mb-2">Task Activity</h3>
            <div className="h-40 bg-blue-100 rounded-lg flex items-center justify-center">
              📈 Chart Placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Sidebar Navigation Item
type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

const NavItem: React.FC<NavItemProps> = ({ icon, label, href }) => {
  const router = useRouter();
  return (
    <div
      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 cursor-pointer"
      onClick={() => router.push(href)}
    >
      <span className="text-lg text-white">{icon}</span>
      <span className="font-medium">{label}</span>
    </div>
  );
};

// ✅ Statistics Card
type StatCardProps = {
  number: string;
  label: string;
  color: string;
};

const StatCard: React.FC<StatCardProps> = ({ number, label, color }) => (
  <div className={`p-4 rounded-lg shadow-md ${color}`}>
    <h3 className="text-2xl font-bold">{number}</h3>
    <p>{label}</p>
  </div>
);

// ✅ Task Table
const TaskTable: React.FC = () => (
  <table className="w-full text-left">
    <thead>
      <tr className="border-b text-blue-700">
        <th className="p-2">Project Name</th>
        <th className="p-2">Completion Progress</th>
        <th className="p-2">Date Start</th>
        <th className="p-2">Date End</th>
      </tr>
    </thead>
    <tbody>
      {[1, 2, 3, 4, 5].map((i) => (
        <tr key={i} className="border-b hover:bg-blue-50">
          <td className="p-2">Project {i}</td>
          <td className="p-2 flex justify-between items-center">
            Project {i}
            <div className="flex space-x-2">
            <button className="relative text-green-600 hover:text-green-800 group">
                <FaPlus />
                <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Add Task
                </span>
              </button>

            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
