/*
 * @Descripttion: 
 * @Version: 1.0
 * @Author: jinqingsong
 * @Date: 2022-11-25 12:21:26
 * @LastEditors: jinqingsong
 * @LastEditTime: 2022-11-25 13:06:37
 */
import { PolylineEdge, PolylineEdgeModel } from "@logicflow/core";

class CustomEdgeModel extends PolylineEdgeModel {
    // customTextPosition = true;
    initEdgeData (data) {
        super.initEdgeData(data);
        this.customTextPosition = true;
    }
    setAttributes () {
        this.isAnimation = true;
    }
    setHovered (isHovered) {
        super.setHovered(isHovered);
        this.isAnimation = isHovered;
    }
    // getOutlineStyle () {
    //     const style = super.getOutlineStyle();
    //     style.stroke = "orange";
    //     style.hover.stroke = "orange";
    //     return style;
    // }
    getEdgeAnimationStyle () {
        const style = super.getEdgeAnimationStyle();
        console.log('===style===', style)
        style.strokeDasharray = "5 5";
        style.strokeDashoffset = "100%";
        style.animationDuration = "10s";
        style.stroke = "rgb(24, 125, 255)";
        return style;
    }
    getTextPosition () {
        const position = super.getTextPosition();
        const currentPositionList = this.points.split(" ");
        const pointsList = [];
        currentPositionList &&
            currentPositionList.forEach((item) => {
                const [x, y] = item.split(",");
                pointsList.push({ x: Number(x), y: Number(y) });
            });
        if (pointsList.length > 1) {
            let { x: x1, y: y1 } = pointsList[0];
            let { x: x2, y: y2 } = pointsList[1];
            let distence = 50;
            // 垂直
            if (x1 === x2) {
                if (y2 < y1) {
                    // 上
                    distence = -50;
                }
                position.y = y1 + distence;
                position.x = x1;
            } else {
                // 水平
                if (x2 < x1) {
                    // 左
                    distence = -50;
                }
                position.x = x1 + distence;
                position.y = y1 - 10;
            }
        }
        return position;
    }
}

class CustomEdge extends PolylineEdge {

}

export default {
    type: "custom-edge",
    model: CustomEdgeModel,
    view: CustomEdge
};
