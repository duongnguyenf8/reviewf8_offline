fetch("./assets/data/data.json")
  .then((response) => response.json())
  .then((data) => {
    const menuList = document.querySelector(".menu_list");

    for (const key in data) {
      const listItem = document.createElement("li");
      listItem.classList.add("menu_list-item");

      const link = document.createElement("a");
      link.href = "#";
      link.textContent = key;

      const subList = document.createElement("ul");
      subList.classList.add("item_list");

      for (const subItem of data[key]) {
        const subListItem = document.createElement("li");
        subListItem.classList.add("item_list-item");

        const subLink = document.createElement("a");
        const subLinkPath = `./Review/${key}/${subItem}`; 
        subLink.href = subLinkPath;
        subLink.textContent = subItem;

        subListItem.appendChild(subLink);
        subList.appendChild(subListItem);
      }

      listItem.appendChild(link);
      listItem.appendChild(subList);
      menuList.appendChild(listItem);
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
