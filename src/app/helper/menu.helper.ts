import { MENU } from '@app/config/menu.config';
import head from 'lodash/head';
import { getItem } from './localstorage.helper';
import { get, isPlainObject } from 'lodash';

/** CREATE NESTED MENU */
export function initNestedMenu(
  idParent = '',
  flatMenuAll: any,
  flatMenuFiltered: any = null,
  group?: string
) {
  flatMenuFiltered = flatMenuFiltered ? flatMenuFiltered : flatMenuAll;
  const countChild = (nodes: any) =>
    nodes.length +
    nodes
      .map(({ children = [] }) => countChild(children))
      .reduce((a: any, b: any) => a + b, 0);

  const makeTree = (id: string, xs: any) =>
    xs
      .filter(({ idParent }: any) => idParent == id)
      .filter((f: any) => f.show === true)
      .filter((f: any) => (group ? f.group === group : f))
      .map(({ id, idParent, ...rest }: any) => {
        const child = makeTree(id, flatMenuAll);
        return {
          id,
          ...rest,
          idParent: idParent,
          path: rest.path,
          ...(child.length
            ? { count: countChild(child), children: child }
            : { count: 0, children: [] }),
        };
      });

  return makeTree(idParent, flatMenuFiltered).map((node: any) => ({
    ...node,
    root: true,
  }));
}

export const getActivePageMenu = (cmenus: any = undefined) => {
  const menus = cmenus || MENU
  const pathmenu = location?.pathname?.replace('/i/', '/')
  const wsp = getItem('wsp')
  const pathName = wsp ? pathmenu?.replace(`/${wsp?.prefixPath}`, '') : pathmenu
  const activeMenu: any = head(menus.filter((f: any) => f?.path != '' && pathName == f.path)) || {}

  const privileges = isPlainObject(menus?.privileges) || get(getItem('priv'), `privileges.${activeMenu?.name}`)
  return activeMenu ? { ...activeMenu, privileges: privileges } : {}
};
