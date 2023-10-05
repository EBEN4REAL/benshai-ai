export interface ICity {
    name: string;
    distance: number,
    continent: string;
    active: boolean;
    country: string;
    description: string;
    image: string;
    
    coords: {
        lat: number;
        lng: number;
    };
}