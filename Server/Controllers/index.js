import { login , register } from "../Services/authService.js";

export const resolvers = {
    Query: {
        login,
        register,
    },
}