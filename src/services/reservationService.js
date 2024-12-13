// API logic for reservations
import apiClient from "./apiClient";

// Create reservation
export const createReservation = async(reservationData) => {
    try {
        const response = await apiClient.post('/reservations', reservationData );
        return response.data;
    } catch (error) {
        console.error('Error creating reservation:', error.response?.data || error.message);
        throw error.response?.data || { message: 'Failed to create reservation' };
    }
    };

    // (Optional) Get all reservations
    export const getReservations = async () => {
        try {
            const response = await apiClient.get('/reservations');
            return response.data;
    } catch (error) {
        console.error('Error fetching reservations:', error.response?.data || error.message)
        throw error.response?.data || { message: 'Failed to fetch reservations'};
    }
};