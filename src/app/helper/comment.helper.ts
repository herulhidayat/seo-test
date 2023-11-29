/** CREATE NESTED Comments */
export function initNestedComments(
  parentId = '',
  flatMenuAll: any,
  flatMenuFiltered: any = null
) {
  flatMenuFiltered = flatMenuFiltered ? flatMenuFiltered : flatMenuAll;
  const countChild = (nodes: any) =>
    nodes.length +
    nodes
      .map(({ children = [] }) => countChild(children))
      .reduce((a: any, b: any) => a + b, 0);

  const makeTree = (id: string, xs: any) =>
    xs
      .filter(({ parentId }: any) => parentId == id)
      .map(({ id, parentId, ...rest }: any) => {
        const child = makeTree(id, flatMenuAll);
        return {
          id,
          ...rest,
          parentId: parentId,
          ...(child.length
            ? { count: countChild(child), children: child }
            : { count: 0, children: [] }),
        };
      });

  return makeTree(parentId, flatMenuFiltered).map((node: any) => ({
    ...node,
    root: true,
  }));
}
