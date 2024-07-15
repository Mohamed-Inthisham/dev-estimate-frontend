import React, { useState } from "react";
import SideBar from "../components/SideBar";
import ProjectDropdown from "../components/ProjectDropdown";
import FeatureDropdown from "../components/FeatureDropdown";

const Projects = () => {
  const [tasks, setTasks] = useState([
    { task: "Design UI", assignee: "Alice", cost: "$200", time: "2h", id: 1 },
    { task: "Develop API", assignee: "Bob", cost: "$300", time: "3h", id: 2 },
    { task: "Testing", assignee: "Charlie", cost: "$150", time: "1.5h", id: 3 },
  ]);

  const handleRemove = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleAdd = () => {
    const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = {
      task: "New Task",
      assignee: "New Assignee",
      cost: "$0",
      time: "0h",
      id: newId,
    };
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="">
      <div className="flex">
        <SideBar />
        <div className="flex-1 p-7">
          <div className="text-2xl font-semibold">
            <h1>Projects Info & Customization</h1>
          </div>
          <div className="flex justify-around mt-7 h-[50px]  ">
            <div>
              <ProjectDropdown />
            </div>
            <div>
              <FeatureDropdown />
            </div>
          </div>
          <hr className="border-t border-blue-400 my-4 " />
          <div className="grid grid-cols-3 gap-4 h-[150px] mt-5">
            <div className="bg-slate-100 p-4 shadow-lg rounded-lg border border-gray-200">
              <h1 className="text-lg font-semibold text-gray-800">
                Project Name
              </h1>
              <h3 className="text-md text-gray-600 mt-2">TechVision</h3>
              <h1 className="text-lg font-semibold text-gray-800">
                Feature Name
              </h1>
              <h3 className="text-md text-gray-600 mt-2">
                User Authentication and Access Control
              </h3>
            </div>
            <div className="bg-slate-100 p-4 shadow-lg rounded-lg flex flex-col justify-center items-center border border-gray-200">
              <h1 className="text-lg font-semibold text-gray-800">COST</h1>
              <span className="text-xl font-bold text-green-500">$20000</span>
            </div>
            <div className="bg-slate-100 p-4 shadow-lg rounded-lg flex flex-col justify-center items-center border border-gray-200">
              <h1 className="text-lg font-semibold text-gray-800">TIME</h1>
              <span className="text-xl font-bold text-blue-500">20 Days</span>
            </div>
          </div>
          <div className="max-w- mx-auto p-6 bg-white shadow-xl rounded-lg mt-6  border border-gray-200">
      <h2 className="text-2xl font-bold mb-4">Task Management</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Task</th>
            <th className="p-2">Assignee</th>
            <th className="p-2">Cost Of Task</th>
            <th className="p-2">Time Of Task</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-t">
              <td className="p-2">{task.task}</td>
              <td className="p-2">{task.assignee}</td>
              <td className="p-2">{task.cost}</td>
              <td className="p-2">{task.time}</td>
              <td className="p-2">
              <button className="text-blue-500 hover:underline">Edit</button>
                <button
                  className="text-red-500 hover:underline ml-2"
                  onClick={() => handleRemove(task.id)}
                >
                  Remove
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleAdd}
      >
        Add New
      </button>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
