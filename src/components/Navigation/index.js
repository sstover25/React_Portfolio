import React from "react";

function Navigation(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <nav>
      <ul className="d-flex flex-column flex-sm-row align-items-center justify-content-between p-3 mw-100">
        {categories.map((category) => (
          <li
            className={`m-1 ${currentCategory === category && "navActive"}`}
            key={category.name}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
                console.log(category);
              }}
            >
              {category.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
