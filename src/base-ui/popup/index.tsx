import React from "react";
import { Popup } from "@taroify/core";
import { ScrollView, View } from "@tarojs/components";
import styles from "./index.module.less";
import { IBasePopupMode } from "./type";

export interface IBaseuiPopupProps extends React.PropsWithChildren<any> {
  show: boolean;
  setShow: (show: boolean) => void;
  mode: IBasePopupMode;
  radius?: number;
  titleChildren?: React.ReactNode;
}

const BasePopup = React.memo((props: IBaseuiPopupProps) => {
  // 弹出层样式
  const popupStyle = React.useMemo(() => {
    const radius = props.radius || 14 + "rpx";
    const style: React.CSSProperties = {};
    switch (props.mode) {
      case "bottom":
        style.borderRadius = `${radius} ${radius} 0 0`;
        break;
      case "top":
        style.borderRadius = `0 0 ${radius} ${radius}`;
        break;
      case "left":
        style.borderRadius = `0 ${radius} ${radius} 0`;
        break;
      case "right":
        style.borderRadius = `${radius} 0 0 ${radius}`;
        break;
      case "center":
        style.borderRadius = radius;
        break;
    }
    return style;
  }, [props.mode, props.radius]);

  const titleChildrenEl = () => (
    <View className={`${styles.title_container} one-line`}>
      {props.titleChildren}
    </View>
  );

  const renderContent = () => (
    <View className={styles[`${props.mode}_container`]}>
      <ScrollView scroll-y style={{ height: "100%" }}>
        {props.children}
      </ScrollView>
    </View>
  );

  return (
    <Popup
      open={props.show}
      defaultOpen={props.show}
      placement={props.mode}
      onClose={props.setShow}
      style={popupStyle}
    >
      {titleChildrenEl()}

      {/* 关闭按钮 */}
      <Popup.Close placement="top-right" />

      {/* 渲染内容 */}
      {["left", "center", "right", "top", "bottom"].includes(props.mode) &&
        renderContent()}
    </Popup>
  );
});

export default BasePopup;
