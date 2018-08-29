/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = l2
    while (l1.next !== null) {
        l2.val = l2.val + l1.val
        if (!l2.next) {
            l2.next = new ListNode(0)
        }
        l2 = l2.next
        l1 = l1.next
    }
    l2.val = l2.val + l1.val
    l2 = result
    while (l2.next !== null) {
        if (l2.val > 9) {
            l2.val -= 10
            l2.next.val += 1
        }
        l2 = l2.next
    }
    if (l2.val > 9) {
        l2.val -= 10
        l2.next = new ListNode(0)
        l2.next.val += 1
    }
    return result
};