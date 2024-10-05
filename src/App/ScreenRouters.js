import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateNotePage from "../Notes/Components/CreateNotePage";

/**
 * Custom component mapping
 * @param {component} : Component being mapped
 * @param {routers} : Creating route for a component specified with route link
 */
function getRoutes() {
    return ({
        Notes: {
            component: CreateNotePage,
            routers: [
                <Switch>
                    <Route exact path="/" render={<CreateNotePage />} />
                </Switch>
            ]
        }
    })
}

export default getRoutes;