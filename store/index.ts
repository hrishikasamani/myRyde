import { LocationStore } from "@/types/type";
import {create} from "zustand";

export const useLocationStore = create<LocationStore>((set) => ({
    userAddress: null,
    userLatitude: null,
    userLongitude: null,
    destinationAddress: null,
    destinationLatitude: null,
    destinationLongitude: null,
    setUserLocation: ({
        latitude, longitude, address
    }:{
        latitude: number; longitude: number; address: string;
    }) => {
        set(() => ({
            userLongitude: longitude,
            userLatitude: latitude,
            userAddress: address,
        }));
    },
    setDestinationLocation: ({
        latitude,
        longitude,
        address,
    }: {
        latitude: number; longitude: number; address: string;
    }) => {
        set(() => ({
            destinationLongitude: longitude,
            destinationLatitude: latitude,
            destinationAddress: address,
        }));
    }
}));