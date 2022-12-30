export interface Lab {
    id: number,
    // album
    album: string,
    // Name of the lab
    name: string,
    // Place of the lab
    position: string,
    // description
    description: string,
    // Total seats
    totalSeats: number,
    // available seats
    availableSeats: number,
    // openHours
    openHours: openHour[],
    // computer Types
    computerTypes: computerType[],
    // seats
    seats: seats[]
}

interface openHour {
    day: string,
    open: string,
    close: string,
    isToday: boolean,
}
interface computerType {
    id: 0 | 1 | 2,
    name: "MacOS" | "Linux" | "Windows"
}
interface seats {
    id: number,
    alias: string,
    computerType: computerType,
    isAvailable: boolean,
}