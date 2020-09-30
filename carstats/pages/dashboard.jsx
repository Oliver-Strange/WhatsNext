import Link from "next/link";
import buildClient from "./api/build-client";

const Dashboard = ({ currentUser, vehicles }) => {
  console.log(currentUser, vehicles);
  const vehicleList = vehicles.map((vehicle) => {
    return (
      <div key={vehicle.id}>
        <p>{vehicle.nickname}</p>
        <p>{vehicle.make}</p>
        <p>{vehicle.modelType}</p>
        <p>{vehicle.miles}</p>
        <p>{vehicle.lastOil}</p>
        <Link href="/myVehicles/[vehicleId]" as={`/myVehicles/${vehicle.id}`}>
          <a>View</a>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <h1>Vehicles</h1>
    </div>
  );
};

Dashboard.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get("/api/myVehicles");

  return { vehicles: data };
};

export default Dashboard;
