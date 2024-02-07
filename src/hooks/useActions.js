import {useDispatch} from "react-redux";
import {useMemo} from "react";

import {usersActions} from "../store/users/users.slice";
import {bindActionCreators} from "@reduxjs/toolkit";

const rootActions = {
    ...usersActions
}
export function useActions(actions, deps) {
    const dispatch = useDispatch()
    return useMemo(
        () => {
            if (Array.isArray(actions)) {
                return actions.map((a) => bindActionCreators(a, dispatch))
            }
            return bindActionCreators(actions, dispatch)
        },
        deps ? [dispatch, ...deps] : [dispatch],
    )
}