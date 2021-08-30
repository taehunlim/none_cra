interface IAuth {
    clear(key: string): void;
    clearAppStorage(): void;
    get(key: string): JSON;
    setToken(token: string): void;
    getToken(): string;
    setRefreshToken(token: string): void;
    getRefreshToken(): string;
    setEmail(key: string): void;
    getEmail(): string;
}
declare const auth: IAuth;
export default auth;
