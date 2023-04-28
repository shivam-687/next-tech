function getBreadcrumbs(pathname: string): { label: string; href: string }[] {
    const pathArray = pathname.split('/').filter((x) => x);
    const crumbs = [{ label: 'Home', href: '/' }];
    let href = '/';
    pathArray.forEach((pathItem) => {
      href += `${pathItem}/`;
      crumbs.push({ label: pathItem, href });
    });
    return crumbs;
  }