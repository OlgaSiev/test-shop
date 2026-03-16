import React from "react";
import { Route, Routers } from "react-router-dom";
import HomePage from "@/pages/HomePage/HomePage";

export default () => {
    return (
        <Routers>
            <Route path="/" element={<HomePage />} />
        </Routers>
    )
}