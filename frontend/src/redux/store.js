import { configureStore } from "@reduxjs/toolkit";

import users from "./user";

export const store = configureStore({
    reducer: {
        users: users,
    },
});