import { useDashboard } from "../hooks/useDashboard";

function Dashboard() {
  const {
    vehiclePlate,
    setVehiclePlate,
    selectedVehicleId,
    handleUpdateVehicle,
    handleAddVehicle,
    vehicles,
    dispatch,
    isAuthenticated,
    navigate,
    handleSelectVehicle,
    deleteVehicle
  } = useDashboard();

  // Redirect if not authenticated
  if (!isAuthenticated) {
    navigate("/");
    return <div>Redirecting to login...</div>;
  }
  return (
    <div>
      <h1>Dashboard - Vehicle Management</h1>
      <div>
        <input
          type="text"
          placeholder="Enter vehicle plate"
          value={vehiclePlate}
          onChange={(e) => setVehiclePlate(e.target.value)}
        />
        {selectedVehicleId ? (
          <button onClick={handleUpdateVehicle}>Update Vehicle</button>
        ) : (
          <button onClick={handleAddVehicle}>Add Vehicle</button>
        )}
      </div>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            {vehicle.plate} - Checked-in:{" "}
            {new Date(vehicle.checkInTime).toLocaleTimeString()}
            <button onClick={() => handleSelectVehicle(vehicle.id)}>
              Edit
            </button>
            <button onClick={() => dispatch(deleteVehicle(vehicle.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
