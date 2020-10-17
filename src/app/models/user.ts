export interface User {
    id: number;
    name: string;
    email: String;
    password: String;
    gender: String;
    birth_date: Date;
    city: String;
    photo_path: String;
    is_active: boolean;
    role: String;
}