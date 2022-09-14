export const paths = {
  dashboard: () => "/dashboard",
  people: {
    index: () => "/people",
    show: (id) => `/people/${id}`,
  },
  program: {
    index: () => "/program",
  },
  inbox: {
    index: () => "/inbox",
  },
  calendar: {
    index: () => "/calendar",
  },
  tasks: {
    index: () => "/tasks",
  },
  tasks: {
    index: () => "/tasks",
  },
  reports: {
    index: () => "/reports",
  },
  powerUps: {
    index: () => "/power-ups",
  },
  settings: {
    index: () => "/settings",
    business: {
      index: () => "/settings/business",
    },
    payments: {
      index: () => "/settings/payments",
    },
    schedule: {
      index: () => "/settings/schedule",
    },
    plans: {
      index: () => "/settings/plans",
    },
    account: {
      index: () => "/settings/account",
    },
    billing: {
      index: () => "/settings/billing",
    },
    team: {
      index: () => "/settings/team",
    },
    notifications: {
      index: () => "/settings/notifications",
    },
  },
};
