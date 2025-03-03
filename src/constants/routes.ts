export const ROUTES = {
  LOGIN: "/login",
  HOME: "/",
  DASHBOARD: "/dashboard",
  RECORDS_ADD: "/records/add",
  EXERCISE_SEARCH: "/exercise/search",
  EXERCISE_ADD: "/exercise/add",
  ANALYTICS: "/analytics",
} as const;

export type RouteType = (typeof ROUTES)[keyof typeof ROUTES];
