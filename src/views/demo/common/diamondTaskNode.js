
/*
 * @Descripttion: 
 * @Version: 1.0
 * @Author: jinqingsong
 * @Date: 2022-11-23 20:29:09
 * @LastEditors: jinqingsong
 * @LastEditTime: 2022-11-25 16:44:38
 */

// 菱形   Diamond
// import { DiamondNode, DiamondNodeModel, h } from "@logicflow/core";
import { h, PolygonNode, PolygonNodeModel } from '@logicflow/core';

class DiamondTaskView extends PolygonNode {

    getShape () {
        const { model } = this.props;
        const { x, y, width, height, points } = model;
        const style = model.getNodeStyle();
        return h(
            'g',
            {
                transform: `matrix(1 0 0 1 ${x - width / 2} ${y - height / 2})`,
            },
            h('polygon', {
                ...style,
                x,
                y,
                points,
            }),
            h('path', {
                d:
                    'm 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z',
                ...style,
            }),
        );
    }
    // getShape () {
    //     const { model } = this.props;
    //     const { r, x, y, rx, ry, points } = this.props.model;
    //     const style = model.getNodeStyle();
    //     console.log('==Diamond==style=', points)
    //     // let newPoints = [
    //     //     [25, 0],  上
    //     //     [50, 25],  右
    //     //     [25, 50],  下
    //     //     [0, 25]  左
    //     // ]
    //     let newPoints = [
    //         [25, 0],
    //         [50, 25],
    //         [25, 50],
    //         [0, 25]
    //     ]
    //     return h("g", {}, [
    //         h("polygon", {
    //             ...style,
    //             rx,
    //             ry,
    //             // points: newPoints

    //         }),
    //         // this.getLabelShape()
    //     ]);
    // }
}

class DiamondTaskModel extends PolygonNodeModel {
    setAttributes () {
        console.log('DiamondTaskModel===surper====', this)
        this.points = [
            [25, 0],
            [50, 25],
            [25, 50],
            [0, 25],
        ];

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
    type: "DiamondTask",
    view: DiamondTaskView,
    model: DiamondTaskModel
};
