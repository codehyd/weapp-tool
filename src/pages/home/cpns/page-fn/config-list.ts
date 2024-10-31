import TimeScreen from "@/assets/image/time-screen.png";
import utils from "@/utils";

export const configList = [
  {
    title: "时间屏幕",
    img: TimeScreen,
    onClick: () => {
      utils.navigateTo("/pages-chunks/time-screen/index");
    },
  },
];
