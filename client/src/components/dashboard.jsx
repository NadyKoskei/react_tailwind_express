import "../index.css";

const DashBoard = () => {
  return (
    <>
      <main className="pb-4 pl-3 pr-3 mb-10">
        <div className="admin">
          <h1>Welcome Koskei Nady</h1>
        </div>

        <div
          id="data-div"
          className="mt-3 grid grid-flow-row auto-rows-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"
        >
          <div
            id="users"
            className="bg-blue-200 w-full h-30 flex flex-col justify-center items-center"
          >
            <h1>1500</h1>
            <h2>Users</h2>
          </div>

          <div
            id="homes"
            className="bg-blue-200 w-full h-30 flex flex-col justify-center items-center"
          >
            <h1>300</h1>
            <h2>Homes</h2>
          </div>

          <div
            id="visitors"
            className="bg-blue-200 w-full h-30 flex flex-col justify-center items-center"
          >
            <h1>50,000</h1>
            <h2>Visitors</h2>
          </div>

          <div
            id="amount"
            className="bg-blue-200 w-full h-30 flex flex-col justify-center items-center"
          >
            <h1>1,350,000</h1>
            <h2>Donations</h2>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-semibold mb-3">User Records</h2>
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2 border">#</th>
                <th className="px-3 py-2 border">First Name</th>
                <th className="px-3 py-2 border">Last Name</th>
                <th className="px-3 py-2 border">Email</th>
                <th className="px-3 py-2 border">Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 border">1</td>
                <td className="px-3 py-2 border">Jane</td>
                <td className="px-3 py-2 border">Doe</td>
                <td className="px-3 py-2 border">jane@example.com</td>
                <td className="px-3 py-2 border">janedoe</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border">2</td>
                <td className="px-3 py-2 border">John</td>
                <td className="px-3 py-2 border">Smith</td>
                <td className="px-3 py-2 border">john@example.com</td>
                <td className="px-3 py-2 border">johnsmith</td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </>
  );
};

export { DashBoard };
