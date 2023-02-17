const HousePagePath = '/house-page/' as const;
const HouseUpdatePagePath = '/house-update-page/' as const;

const routes = {
  HomePage: '/',
  HousePage: {
    routePath: `${HousePagePath}:id`,
    createLink: (id: string | number) => `${HousePagePath}${id}`,
  },
  HouseUpdatePage: {
    routePath: `${HouseUpdatePagePath}:id`,
    createLink: (id: string | number) => `${HouseUpdatePagePath}${id}`,
  },
  HouseCreatePage: '/house-create-page',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
