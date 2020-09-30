import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const Dashboard = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    await axios.get("http://localhost:4000/myVehicles");
  };

  return (
    <div>
      <h1>Vehicles</h1>
      {/* {vehicleList} */}
    </div>
  );
};

export default Dashboard;
