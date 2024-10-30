import React from "react";
import { Popup } from "@taroify/core";
import { ScrollView, View } from "@tarojs/components";
import styles from "./index.module.less";

interface IBaseuiPopupProps {
  show: boolean;
  setShow: () => void;
  mode?: "top" | "bottom" | "left" | "right" | "center";
  children?: React.ReactNode;
  radius?: number;
  titleChildren?: React.ReactNode;
}

const BasePopup = React.memo((props: IBaseuiPopupProps) => {
  // 弹出层样式
  const popupStyle = React.useMemo(() => {
    let radius = props.radius || 14 + "rpx";
    let style = {};
    if (props.mode == "bottom") {
      style["borderRadius"] = `${radius} ${radius} 0 0`;
    } else if (props.mode == "top") {
      style["borderRadius"] = `0 0 ${radius} ${radius}`;
    } else if (props.mode == "left") {
      style["borderRadius"] = `0 ${radius} ${radius} 0`;
    } else if (props.mode == "right") {
      style["borderRadius"] = `${radius} 0 0 ${radius}`;
    } else if (props.mode == "center") {
      style["borderRadius"] = `${radius}`;
    }
    return style;
  }, [props.mode, props.radius]);

  const titleChildrenEl = () => {
    return (
      <View className={`${styles.title_container} one-line`}>
        {props.titleChildren}
      </View>
    );
  };

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

      {/* left */}
      {props.mode == "left" && (
        <View className={styles.left_container}>
          <ScrollView scroll-y style={{ height: "100%" }}>
            {props.children}
          </ScrollView>
        </View>
      )}

      {/* center */}
      {props.mode == "center" && (
        <View className={styles.center_container}>
          <ScrollView scroll-y style={{ height: "100%" }}>
            {props.children}
          </ScrollView>
        </View>
      )}

      {/* right */}
      {props.mode == "right" && (
        <View className={styles.right_container}>
          <ScrollView scroll-y style={{ height: "100%" }}>
            {props.children}
          </ScrollView>
        </View>
      )}

      {/* top */}
      {props.mode == "top" && (
        <View className={styles.top_container}>
          <ScrollView scroll-y style={{ height: "100%" }}>
            {props.children}
          </ScrollView>
        </View>
      )}

      {/* bottom */}
      {props.mode == "bottom" && (
        <View className={styles.bottom_container}>
          <ScrollView scroll-y style={{ height: "100%" }}>
            {props.children}
          </ScrollView>
        </View>
      )}
    </Popup>
  );
});

export default BasePopup;
