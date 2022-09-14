const BASE_PATH = "/api";

export const api = {
  people: {
    index: () => `${BASE_PATH}/people`,
    autocomplete: (query) => {
      const path = `${BASE_PATH}/people/autocomplete`;
      return pathWithQuery(path, query);
    },
    show: (id) => `${BASE_PATH}/people/${id}`,
    create: () => `${BASE_PATH}/people`,
  },
  profile: () => `${BASE_PATH}/profile`,
  programs: {
    index: (query) => {
      const path = `${BASE_PATH}/programs`;
      return pathWithQuery(path, query);
    },
    create: () => `${BASE_PATH}/programs`,
    show: (id) => `${BASE_PATH}/programs/${id}`,
    update: (id) => `${BASE_PATH}/programs/${id}`,
  },
  plans: {
    index: () => `${BASE_PATH}/plans`,
    show: (id) => `${BASE_PATH}/plans/${id}`,
    create: () => `${BASE_PATH}/plans`,
    update: (id) => `${BASE_PATH}/plans/${id}`,
    destroy: (id) => `${BASE_PATH}/plans/${id}`,
  },
  teamMembers: {
    index: () => `${BASE_PATH}/team_members`,
    show: (id) => `${BASE_PATH}/team_members/${id}`,
    create: () => `${BASE_PATH}/team_members`,
    update: (id) => `${BASE_PATH}/team_members/${id}`,
    destroy: (id) => `${BASE_PATH}/team_members/${id}`,
  },
  authentication: {
    login: () => `${BASE_PATH}/login`,
    logout: () => `${BASE_PATH}/logout`,
    signup: () => `${BASE_PATH}/signup`,
  },
};

const pathWithQuery = (path: string, options: any): string => {
  if (!options) {
    return path;
  }

  const pathname = path[0] !== "/" ? `/${path}` : path;
  const query = buildQuery(options);

  return pathname + query;
};

const buildQuery = (options: any): string => {
  if (Object.keys(options).length === 0) {
    return "";
  }

  return (
    "?" +
    Object.keys(options)
      .map((key) => `${key}=${options[key]}`)
      .join("&")
  );
};
