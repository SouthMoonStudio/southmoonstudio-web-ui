export function renderNavBarBrand(title) {
  return (
    <a className="navbar-brand" href="home">
      {title}
    </a>
  );
}

export function renderNavBarItems(items) {
  return (
    <div className="collapse navbar-collapse justify-content-end">
      <ul className="navbar-nav">
        {items.map((item) => (
          <li className="nav-item">
            <a className="nav-link" href={item.path}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
