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

  // if href is a image, open in this tab, fullscreen, add a close button
  for (var i = 0; i < tagA.length; i++) {
    const href = tagA[i].getAttribute("href");
    if (
      href.includes(".png") ||
      href.includes(".jpg") ||
      href.includes(".jpeg") ||
      href.includes(".gif") ||
      href.includes(".svg") ||
      href.includes(".webp") ||
      href.includes(".bmp") ||
      href.includes(".ico") ||
      href.includes(".tiff") ||
      href.includes(".tif") ||
      href.includes(".jfif") ||
      href.includes(".pjpeg") ||
      href.includes(".pjp") ||
      href.includes(".avif") ||
      href.includes(".apng") ||
      href.includes(".jfif-tbnl") ||
      href.includes(".svgz") ||
      href.includes(".ico") ||
      href.includes(".cur") ||
      href.includes(".ani") ||
      href.includes(".jpe") ||
      href.includes(".avifs") ||
      href.includes(".avif")
    ) {
      tagA[i].setAttribute("target", "_self");
      tagA[i].setAttribute("onclick", "openFullscreen()");
      tagA[i].setAttribute("oncontextmenu", "return false;");
    }
  }

  backBtn.className = "back-btn";
  backBtn.innerText = "Back";
  backBtn.onclick = () => {
    window.location.href = "/";
  };
  document.body.appendChild(backBtn);
};
