export const pathCreator = (root: string, ...sublinks: string[]): string => {
  let path = root;

  if (sublinks && sublinks.length) {
    path = sublinks.reduce((result, sublink) => result + sublink, root);
  }

  return path;
};
