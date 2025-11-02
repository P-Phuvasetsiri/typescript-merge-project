"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(col_1, col_2, col_3) {
    let reversed3 = [];
    for (let i = col_3.length - 1; i >= 0; i--) {
        reversed3.push(col_3[i]);
    }
    // Merge two sorted arrays into one (ascending)
    function mergeTwoArrays(a, b) {
        const result = [];
        let i = 0, j = 0;
        while (i < a.length && j < b.length) {
            if (a[i] <= b[j]) {
                result.push(a[i]);
                i++;
            }
            else {
                result.push(b[j]);
                j++;
            }
        }
        // Append remaining elements
        while (i < a.length)
            result.push(a[i++]);
        while (j < b.length)
            result.push(b[j++]);
        return result;
    }
    // Merge all three arrays step by step
    const merged12 = mergeTwoArrays(col_1, col_2);
    const mergedAll = mergeTwoArrays(merged12, reversed3);
    return mergedAll;
}
