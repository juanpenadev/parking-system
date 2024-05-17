import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addVehicle, updateVehicle, deleteVehicle } from '../redux/actions';

function Dashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const vehicles = useSelector(state => state.vehicles.vehicles); // Corrected path

    const [vehiclePlate, setVehiclePlate] = useState('');
    const [selectedVehicleId, setSelectedVehicleId] = useState(null);

    // Redirect if not authenticated
    if (!isAuthenticated) {
        navigate('/');
        return <div>Redirecting to login...</div>;
    }

    const handleAddVehicle = () => {
        dispatch(addVehicle({ id: vehicles.length + 1, plate: vehiclePlate, checkInTime: new Date(), checkOutTime: null }));
        setVehiclePlate('');
    };

    const handleSelectVehicle = (vehicleId) => {
        const vehicle = vehicles.find(v => v.id === vehicleId);
        setVehiclePlate(vehicle.plate);
        setSelectedVehicleId(vehicleId);
    };

    const handleUpdateVehicle = () => {
        dispatch(updateVehicle({ id: selectedVehicleId, plate: vehiclePlate }));
        setVehiclePlate('');
        setSelectedVehicleId(null);
    };

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
                {vehicles.map(vehicle => (
                    <li key={vehicle.id}>
                        {vehicle.plate} - Checked-in: {new Date(vehicle.checkInTime).toLocaleTimeString()}
                        <button onClick={() => handleSelectVehicle(vehicle.id)}>Edit</button>
                        <button onClick={() => dispatch(deleteVehicle(vehicle.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
