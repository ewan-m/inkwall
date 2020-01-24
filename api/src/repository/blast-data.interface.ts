

export interface BlastData {
    message: string;
    date: string; // YYYY/MM/DDT
    location: {
        lat: number,
        lon: number
    }
    score: number;
}