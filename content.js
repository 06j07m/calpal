const observer = new MutationObserver(() => {
  const toolbar = document.querySelector('[aria-label="Calendar controls"]');
  if (toolbar && !toolbar.dataset.injected) {
    toolbar.dataset.injected = "true";
    injectButton(toolbar);
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

function injectButton(toolbar) {
  const btn = document.createElement("button");
  btn.textContent = "My Button";
  btn.style.marginLeft = "8px";
  btn.onclick = () => alert("Clicked!");

  toolbar.appendChild(btn);
}


console.log("Calendar Helper injected!");

const banner = document.createElement("div");
banner.textContent = "📅 Calendar Extension Loaded";
banner.style.position = "fixed";
banner.style.bottom = "20px";
banner.style.right = "20px";
banner.style.padding = "10px 14px";
banner.style.background = "#1a73e8";
banner.style.color = "white";
banner.style.borderRadius = "8px";
banner.style.zIndex = "9999";
banner.style.fontSize = "14px";

document.body.appendChild(banner);
