import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addVehicle, updateVehicle, deleteVehicle } from "../redux/actions";

export const useDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const vehicles = useSelector((state) => state.vehicles.vehicles); // Corrected path

  const [vehiclePlate, setVehiclePlate] = useState("");
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);

  const handleAddVehicle = () => {
    dispatch(
      addVehicle({
        id: vehicles.length + 1,
        plate: vehiclePlate,
        checkInTime: new Date(),
        checkOutTime: null,
      })
    );
    setVehiclePlate("");
  };

  const handleSelectVehicle = (vehicleId) => {
    const vehicle = vehicles.find((v) => v.id === vehicleId);
    setVehiclePlate(vehicle.plate);
    setSelectedVehicleId(vehicleId);
  };

  const handleUpdateVehicle = () => {
    dispatch(updateVehicle({ id: selectedVehicleId, plate: vehiclePlate }));
    setVehiclePlate("");
    setSelectedVehicleId(null);
  };

  return {
    vehiclePlate,
    setVehiclePlate,
    handleAddVehicle,
    handleSelectVehicle,
    handleUpdateVehicle,
    selectedVehicleId,
    vehicles,
    dispatch,
    isAuthenticated,
    navigate,
    deleteVehicle
  };
};
