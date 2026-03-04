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
    </main>
    </>
  )
};

export { DashBoard };
