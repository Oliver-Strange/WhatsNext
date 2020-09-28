import Link from "next/link";
import axios from "axios";

const Dashboard = ({ vehicles }) => {
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
      {vehicleList}
    </div>
  );
};

Dashboard.getInitialProps = async (ctx) => {
  const response = await axios.get("http://localhost:4000/api/myVehicles");
  const json = await response.data;
  return { vehicles: json };
};

export default Dashboard;
