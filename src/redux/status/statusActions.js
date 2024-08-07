
import { createAction } from "@reduxjs/toolkit";

const statusLogOn = createAction("CHANGE_STATUS_LOGON");
const statusRemember = createAction("CHANGE_STATUS_REMEMBER");

export { statusLogOn, statusRemember };
