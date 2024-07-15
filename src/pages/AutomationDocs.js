import React from "react";
import FileUploader from "../components/FileUploader";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";

const AutomationDocs = () => {
  return (
    <div className="flex h-screen">
      <div className="h-full">
        <SideBar />
      </div>
      <div className="overflow-auto">
        <div className="flex-1 p-7">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 mb-6">
              <h1 className="pl-2 text-2xl font-semibold align-item-center">
                Upload Your File Here
              </h1>
              <FileUploader />
            </div>
            <div className="relative top-[-25px] left-[500px] flex justify-center lg:flex lg:justify-center ">
              <button className="px-[100px] py-2 font-semibold text-white bg-gray-500 rounded hover:bg-green-600 lg:justify-center lg:items-center">
                Upload
              </button>
            </div>

            <div className="col-span-3 ">
              <div className="p-6 bg-blue-100 border border-gray-200 rounded-lg shadow-md">
                <h1 className="mb-4 font-bold text-center text-blue-900">
                  SUMMARY
                </h1>
                <p className="text-justify text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit cumque quae ad, eaque odit reiciendis assumenda
                  officiis debitis consectetur aliquam aut! Et architecto
                  dolores non iure laboriosam id, consequatur error?
                </p>
              </div>
            </div>

            <div className="col-span-1">
              <div className="flex flex-col justify-between h-full p-6 bg-yellow-100 border border-gray-200 rounded-lg shadow-md">
                <h1 className="mb-4 font-bold text-center text-yellow-900">
                  TASKS
                </h1>
                <ul className="flex-1 text-gray-800 list-disc list-inside">
                  <li className="mb-2">First bullet point</li>
                  <li className="mb-2">Second bullet point</li>
                  <li className="mb-2">Third bullet point</li>
                  <li className="mb-2">Fourth bullet point</li>
                </ul>
              </div>
            </div>

            <div className="col-span-1">
              <div className="flex flex-col justify-between h-full p-6 bg-yellow-100 border border-gray-200 rounded-lg shadow-md">
                <h1 className="mb-4 font-bold text-center text-yellow-900">
                  COST
                </h1>
                <p className="text-justify text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit cumque quae ad, eaque odit reiciendis assumenda
                  officiis debitis consectetur aliquam aut! Et architecto
                  dolores non iure laboriosam id, consequatur error?
                </p>
              </div>
            </div>

            <div className="col-span-1">
              <div className="flex flex-col justify-between h-full p-6 bg-yellow-100 border border-gray-200 rounded-lg shadow-md">
                <h1 className="mb-4 font-bold text-center text-yellow-900">
                  OTHER
                </h1>
                <p className="text-justify text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit cumque quae ad, eaque odit reiciendis assumenda
                  officiis debitis consectetur aliquam aut! Et architecto
                  dolores non iure laboriosam id, consequatur error?
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
              Save Response
            </button>
          </div>
          <div>
            <h2 className="font-semibold text-center text-2xl mt-1">
              {" "}
              Three Recently Generated Projects
            </h2>
          </div>

          <div className="mt-6">
            <table className="min-w-full overflow-hidden bg-white border border-gray-300 rounded-lg shadow-md">
              <thead className="bg-gray-200">
                <tr>
                  <th className="w-[200px] px-4 py-2 border border-gray-300 text-left text-gray-800">
                    Date
                  </th>
                  <th className="w-[600px] px-4 py-2 border border-gray-300 text-left text-gray-800">
                    Project Name
                  </th>
                  <th className="px-4 py-2 text-left text-gray-800 border border-gray-300">
                    Estimated Cost
                  </th>
                  <th className="px-4 py-2 text-left text-gray-800 border border-gray-300">
                    Estimated Time
                  </th>
                  <th className="px-4 py-2 text-left text-gray-800 border border-gray-300">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">
                    1961-04-21
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="px-4 py-2 border border-gray-300">$2500</td>
                  <td className="px-4 py-2 border border-gray-300">4 hours</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <Link
                      to="/assign-tasks"
                      className="text-blue-500 hover:text-blue-700 underline"
                    >
                      Customize
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">
                    1972-03-31
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    Witchy Woman
                  </td>
                  <td className="px-4 py-2 border border-gray-300">$2500</td>
                  <td className="px-4 py-2 border border-gray-300">4 hours</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <Link
                      to="/assign-tasks"
                      className="text-blue-500 hover:text-blue-700 underline"
                    >
                      Customize
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">
                    1975-08-04
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    Shining Star
                  </td>
                  <td className="px-4 py-2 border border-gray-300">$2500</td>
                  <td className="px-4 py-2 border border-gray-300">4 hours</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <Link
                      to="/assign-tasks"
                      className="text-blue-500 hover:text-blue-700 underline"
                    >
                      Customize
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationDocs;
