const HousePagePath = '/house-page/' as const;

const routes = {
  HomePage: '/',
  HousePage: {
    routePath: `${HousePagePath}:id`,
    createLink: (id: string | number) => `${HousePagePath}${id}`,
  },
  HouseCreatePage: '/house-create-page',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
