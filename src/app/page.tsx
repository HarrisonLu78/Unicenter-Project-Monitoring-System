import Image from "next/image";
import { FaHome, FaTasks, FaClock, FaUsers, FaBook, FaCog } from "react-icons/fa";

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
          <NavItem icon={<FaHome />} label="Dashboard" />
          <NavItem icon={<FaTasks />} label="Project" />
          <NavItem icon={<FaClock />} label="My Tasks" />
          <NavItem icon={<FaUsers />} label="Attendance" />
          <NavItem icon={<FaBook />} label="Work Diary" />
          <NavItem icon={<FaCog />} label="Settings" />
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

          {/* Task for the Day */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg text-blue-700 mb-2">Task for the Day</h3>
            <TaskTable />
          </div>

          {/* Today Tracked Task */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg text-blue-700 mb-2">Today Tracked Task</h3>
            <TaskTable />
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
};

const NavItem: React.FC<NavItemProps> = ({ icon, label }) => (
  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 cursor-pointer">
    <span className="text-lg text-white">{icon}</span>
    <span className="font-medium">{label}</span>
  </div>
);

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
        <th className="p-2">Task Name</th>
        <th className="p-2">Project Name</th>
        <th className="p-2">Work Logs</th>
      </tr>
    </thead>
    <tbody>
      {[1, 2, 3, 4, 5].map((i) => (
        <tr key={i} className="border-b hover:bg-blue-50">
          <td className="p-2">Task {i}</td>
          <td className="p-2">Project {i}</td>
          <td className="p-2">06h 14m / 00h 00m</td>
        </tr>
      ))}
    </tbody>
  </table>
);