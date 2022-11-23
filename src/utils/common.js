/*
 * @Descripttion: 
 * @Version: 1.0
 * @Author: jinqingsong
 * @Date: 2022-11-23 14:56:17
 * @LastEditors: jinqingsong
 * @LastEditTime: 2022-11-23 14:56:18
 */

/*
 *数组对象去重
 */
export function removedup (arr, batch) {
    if (!Array.isArray(arr)) {
        return arr;
    }
    if (arr.length == 0) {
        return [];
    }
    let obj = {};
    let uniqueArr = arr.reduce(function (total, item) {
        obj[item[batch]] ? '' : (obj[item[batch]] = true && total.push(item));
        return total;
    }, []);
    return uniqueArr;
}