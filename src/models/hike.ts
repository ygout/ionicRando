export interface Hike {
    id: number;
    name: string;
    region: string;
    area: string;
    startingPoint: string;
    distance: number;
    distanceUnit: string;
    duration: number;
    durationUnit: string;
    heightDifference?: number; // ? attribut  facultative
    heightDifferenceUnit?: string;
    description: string;
}