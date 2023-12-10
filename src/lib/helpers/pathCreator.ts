export const pathCreator = (root: string, ...sublinks: string[]): string => {
  if (!sublinks || !sublinks.length) return root;

  return sublinks.reduce((result, sublink) => result + sublink, root);
};
