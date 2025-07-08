import React from "react";

const TableButton = () => {
  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
      <button className="text-green-600 hover:text-green-900">Edit</button>
    </td>
  );
};

export default TableButton;
