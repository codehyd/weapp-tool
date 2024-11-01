import Taro from "@tarojs/taro";

class TaroUtils {
  // 跳转
  navigateTo(url: string) {
    Taro.navigateTo({
      url,
    });
  }

  // 获取当前小时 补零
  getHour() {
    const now = new Date();
    return now.getHours().toString().padStart(2, "0");
  }

  // 获取当前分钟 补零
  getMinute() {
    const now = new Date();
    return now.getMinutes().toString().padStart(2, "0");
  }

  // 获取当前秒 补零
  getSecond() {
    const now = new Date();
    return now.getSeconds().toString().padStart(2, "0");
  }

  // 保持屏幕常亮
  setScreenBrightness() {
    console.log("保持常亮");
    Taro.setKeepScreenOn({
      keepScreenOn: true,
    });
  }

  // 取消屏幕常亮
  cancelScreenBrightness() {
    console.log("取消常亮");
    Taro.setKeepScreenOn({
      keepScreenOn: false,
    });
  }

  // 返回上一页
  navigateBack() {
    Taro.navigateBack();
  }
}

export default new TaroUtils();
