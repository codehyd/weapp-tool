import Taro from "@tarojs/taro";

class TaroUtils {
  // 跳转
  navigateTo(url: string) {
    Taro.navigateTo({
      url,
    });
  }
}

export default new TaroUtils();
