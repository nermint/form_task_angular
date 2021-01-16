export interface FormData {
    name?: string;
    surname?: string;
    fathername?: string;
    birthdate?: string;
    familyAddress?: string;
    regionId?: number;
    dateOfMartyrdomOrVeteran?: string;
    contactInfo?: string;
    fin?: string;
    identityPhotoId?: string;
    rewards?: Rewards[],
    children?: Children[],
    apartments?: Apartments[]
}

export interface Children{
    name: string;
    surname: string;
    fin: string;
    birthdate: string;
    gender: number;
    identityPhotoId: string;
}
export interface Rewards{
    name: string;
    date: string;
}
export interface Apartments{
    peopleCount: number;
    totalArea: number;
    roomCount: number,
    hasDocument: boolean;
    photos: Photos[]
}

export interface Photos{
    photoId: string;
}
