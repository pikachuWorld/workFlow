/*
 * @Descripttion: 
 * @Version: 1.0
 * @Author: jinqingsong
 * @Date: 2022-11-23 20:29:09
 * @LastEditors: jinqingsong
 * @LastEditTime: 2022-11-26 21:46:22
 */

import { CircleNode, CircleNodeModel, h } from "@logicflow/core";

class EndTaskView extends CircleNode {

    getShape () {
        const { model } = this.props;
        const { x, y, r } = model;
        const style = model.getNodeStyle();
        // console.log('==StartTaskView==style=', style, '==model==', model)
        return h("g", {}, [

            h("circle", {
                ...style,
                r, // 半径保持不变
                cx: x,
                cy: y,
            }),

        ]);
    }
}

class EndTaskModel extends CircleNodeModel {
    setAttributes () {
        this.r = 30;

    }
    getTextStyle () {
        const style = super.getTextStyle();
        style.fontSize = 12;
        const properties = this.properties;
        style.color = properties.disabled ? "rgb24, 125, 255()" : "rgb(24, 125, 255)";
        return style;
    }
    getNodeStyle () {
        const style = super.getNodeStyle();
        const properties = this.properties;
        if (properties.disabled) {
            style.stroke = "rgb(24, 125, 255)";
        } else {
            style.stroke = "rgb(24, 125, 255)";
        }
        return style;
    }

    getAnchorStyle () {
        const style = super.getAnchorStyle();
        style.stroke = "rgb(24, 125, 255)";
        style.r = 3;
        style.hover.r = 8;
        style.hover.fill = "rgb(24, 125, 255)";
        style.hover.stroke = "rgb(24, 125, 255)";
        return style;
    }
    getAnchorLineStyle () {
        const style = super.getAnchorLineStyle();
        style.stroke = "rgb(24, 125, 255)";
        return style;
    }
    getOutlineStyle () {
        const style = super.getOutlineStyle();
        style.stroke = "rgb(24, 125, 255)";
        style.hover.stroke = "rgb(24, 125, 255)";
        return style;
    }
}

export default {
    type: "EndTask",
    view: EndTaskView,
    model: EndTaskModel
};
