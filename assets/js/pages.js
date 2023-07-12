window.onload = () => {
  const liTag = document.querySelectorAll("li");
  const backBtn = document.createElement("button");
  let count = 1;
  for (var i = 0; i < liTag.length; i++) {
    const innerHtml = liTag[i].innerHTML;
    if (innerHtml.includes("Bài 1")) {
      count = 1;
    }
    if (innerHtml.includes("[x]")) {
      const html = `<span class="x-icon" data-index="${count++}" ></span>`;
      const newHTML = innerHtml.replace("[x]", html);
      liTag[i].innerHTML = newHTML;
    }
  }
  const tagA = document.querySelectorAll("a");

  for (var i = 0; i < tagA.length; i++) {
    tagA[i].setAttribute("target", "_blank");
  }

  backBtn.className = "back-btn";
  backBtn.innerText = "Back";
  backBtn.onclick = () => {
    window.location.href = "/";
  };
  document.body.appendChild(backBtn);
};
