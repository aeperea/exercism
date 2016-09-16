"use strict";

// class Node {
//   constructor(value, prev = null, next = null) {
//     this.prev  = prev;
//     this.next  = next;
//     this.value = value;
//   }
// }

// export default class LinkedList {
//   constructor(){
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }
//   push(n){
//     this.head
//       ? this.tail = this.tail.next = new Node(n, this.tail)
//       : this.head = this.tail = new Node(n)
//     this.size++;
//   }
//   pop() {
//     if (this.size === 0) {return undefined};
//     let value = this.tail.value;

//     if (this.tail.prev) {this.tail.prev.next = null;}
//     this.tail = this.tail.prev;
//     if (!this.tail) {this.head = null;}
//     this.size--;
//     return value;
//   }
//   unshift(n){
//     this.head
//       ? this.head = this.head.prev = new Node(n, null, this.head)
//       : this.head = this.tail = new Node(n)
//     this.size++;
//   }
//   shift(){
//     if (this.size === 0) {return undefined};
//     let value = this.head.value;

//     if (this.head.next) {this.head.next.prev = null;}
//     this.head = this.head.next;
//     if (!this.head) {this.tail = null;}
//     this.size--;
//     return value
//   }
//   delete(val){
//     let current = this.head;
//     while (current != null) {
//       if (current.value === val) {
//         current.prev
//           ? current.prev.next = current.next
//           : this.head = this.head.next
//         current.next
//           ? current.next.prev = current.prev
//           : this.tail = this.tail.prev
//         this.size--;
//         break;
//       }
//       current = current.next;
//     }
//   }
//   count(){
//     return this.size;
//   }
// }

// class Node {
//   constructor(value, prev = null, next = null) {
//     this.prev  = prev;
//     this.next  = next;
//     this.value = value;
//   }
// }

// export default class LinkedList {
//   constructor(){
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }
//   push(n){
//     this.head
//       ? this.tail = this.tail.next = new Node(n, this.tail)
//       : this.head = this.tail = new Node(n)
//     this.size++;
//   }
//   pop() {
//     if (this.size === 0) {return undefined};
//     let value = this.tail.value;

//     if (this.tail.prev) {this.tail.prev.next = null;}
//     this.tail = this.tail.prev;
//     if (!this.tail) {this.head = null;}
//     this.size--;
//     return value;
//   }
//   unshift(n){
//     this.head
//       ? this.head = this.head.prev = new Node(n, null, this.head)
//       : this.head = this.tail = new Node(n)
//     this.size++;
//   }
//   shift(){
//     if (this.size === 0) {return undefined};
//     let value = this.head.value;

//     if (this.head.next) {this.head.next.prev = null;}
//     this.head = this.head.next;
//     if (!this.head) {this.tail = null;}
//     this.size--;
//     return value
//   }
//   delete(val){
//     let current = this.head;
//     while (current != null) {
//       if (current.value === val) {
//         current.prev
//           ? current.prev.next = current.next
//           : this.head = this.head.next
//         current.next
//           ? current.next.prev = current.prev
//           : this.tail = this.tail.prev
//         this.size--;
//         break;
//       }
//       current = current.next;
//     }
//   }
//   count(){
//     return this.size;
//   }
// }