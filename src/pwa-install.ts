let deferredPrompt: BeforeInstallPromptEvent | null = null;
let installBanner: HTMLDivElement;

export function setupPWAPrompt() {
  // 创建安装提示横幅
  installBanner = document.createElement("div");
  installBanner.style.position = "fixed";
  installBanner.style.bottom = "0";
  installBanner.style.left = "0";
  installBanner.style.right = "0";
  installBanner.style.backgroundColor = "#42b983";
  installBanner.style.color = "white";
  installBanner.style.padding = "10px";
  installBanner.style.textAlign = "center";
  installBanner.innerHTML = `
    <span>Install this app for a better experience!</span>
    <button id="install-btn" style="background-color: white; color: #42b983; padding: 5px 10px; border: none; cursor: pointer;">Install</button>
  `;
  document.body.appendChild(installBanner);
  installBanner.style.display = "none"; // 默认隐藏

  console.log("PWA test2");

  // 监听 beforeinstallprompt 事件
  window.addEventListener(
    "beforeinstallprompt",
    (e: BeforeInstallPromptEvent) => {
      console.log("PWA install prompt fired");
      e.preventDefault();
      deferredPrompt = e;

      // 显示安装提示
      installBanner.style.display = "block";

      // 安装按钮点击事件
      const installButton = document.getElementById(
        "install-btn"
      ) as HTMLButtonElement;
      installButton.addEventListener("click", () => {
        console.log("PWA install prompt fired click");
        if (deferredPrompt) {
          deferredPrompt.prompt(); // 显示安装提示
          deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === "accepted") {
              console.log("User accepted the PWA installation");
            } else {
              console.log("User dismissed the PWA installation");
            }
            installBanner.style.display = "none"; // 隐藏安装提示
            deferredPrompt = null;
          });
        }
      });
    }
  );
}
