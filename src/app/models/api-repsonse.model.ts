export interface ApiRepsonse<T>{
    status: boolean;
    value: T | null;
    msg: string;
}
