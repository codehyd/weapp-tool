export default defineAppConfig({
  pages: ["pages/home/index", "pages/mine/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "首页",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#000000",
    selectedColor: "#008df0",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "assets/tabbar/home.png",
        selectedIconPath: "assets/tabbar/home-active.png",
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "assets/tabbar/mime.png",
        selectedIconPath: "assets/tabbar/mime-active.png",
      },
    ],
  },
});
