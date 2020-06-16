import { ListNode } from './LinkedList.js'
import { LinkedList } from './LinkedList.js'


let testNode = new ListNode("Hello", 1000);
let testLinkedList = new LinkedList();

//testArray.push(new City(Name, Latitude, Longitude, Population));
console.log(testNode);



//testing the ListNode creation methods
test('Does the ListNode creation work?', () => {
    expect(testNode).toEqual({subject: "Hello", amount: 1000, forwardNode: null});

});

//testing the LinkedList Insert
test('Does the Insert method work?', () => {
    expect(testLinkedList.insert("first", 5)).toEqual({subject: "first", amount: 5, forwardNode: null});
    expect(testLinkedList.insert("second", 10)).toEqual({subject: "second", amount: 10, forwardNode: {subject: "first", amount: 5, forwardNode: null}});
    // expect(testObject.key2.show(testObject)).toEqual();
});

//Get first Node
test('Does the first method work?', () => {
    expect(testLinkedList.first()).toEqual({subject: "first", amont: 5, forwardNode: null});

});



















//OLD OBSOLETE TESTS FOR THE REFERENCE CODE
// //testing the ListNode show method
// test('Does the show method work?', () => {
//     expect(testNode.show()).toBe("Data: Hello;");
//     // expect(testObject.key2.show(testObject)).toEqual();
// });

// //testing the LinkedList Insert
// test('Does the InsertFirst method work?', () => {
//     expect(testLinkedList.insertFirst("first")).toEqual({data: "first", next: null});
//     expect(testLinkedList.insertFirst("second")).toEqual({data: "second", next: {data: "first", next: null}});
//     // expect(testObject.key2.show(testObject)).toEqual();
// });

// //testing the LinkedList Size
// test('Does the LinkedList size work?', () => {
//     expect(testLinkedList.size).toEqual(2);
//     // expect(testObject.key2.show(testObject)).toEqual();
// });

// //testing the LinkedList InsertLast
// test('Does the InsertLast method work?', () => {
//     expect(testLinkedList.insertLast("third")).toEqual({data: "second", next: {data: "first", next: {data: "third", next: null}}});
// });
// console.log(testLinkedList);

// //testing the LinkedList InsertAt
// test('Does the InsertLast method work?', () => {
//     expect(testLinkedList.insertAt("fourth", 2)).toEqual({data: "second", next: {data: "first", next: {data: "fourth", next: {data: "third", next: null}}}});
//     //test to verify that it won't insert something at an index that doesn't exsist
//     expect(testLinkedList.insertAt("fifth", 10)).toEqual({data: "second", next: {data: "first", next: {data: "fourth", next: {data: "third", next: null}}}});
// });

// //testing the LinkedList GetAt
// test('Does the GetAt method work?', () => {
//     expect(testLinkedList.getAt(1)).toEqual("first");
// });

// //testing the LinkedList RemoveAt
// test('Does the RemoveAt method work?', () => {
//     //test to verify that it won't remove something at an index that doesn't exsist
//     expect(testLinkedList.removeAt(15)).toEqual({data: "second", next: {data: "first", next: {data: "fourth", next: {data: "third", next: null}}}});
//     //test to verify removing the first element
//     expect(testLinkedList.removeAt(0)).toEqual({data: "first", next: {data: "fourth", next: {data: "third", next: null}}});
//     //test to verify removing an element
//     expect(testLinkedList.removeAt(1)).toEqual({data: "first", next: {data: "third", next: null}});
// });