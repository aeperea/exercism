const Node = (val, prev = null, next = null) => {
  return {
    val,
    prev,
    next,
  }
};

const LinkedList = () => {
  // [1,2,3,4]
  // head = 1, tail = 4
  //
  let head = null,
      tail = null,
      size = 0;

  // push action 
  // [1,2,3,4] => [1,2,3,4,x]
  //
  const push = (n) => {
    head
      ? tail = tail.next = new Node(n, tail, null)
      : head = tail = new Node(n)
    size++;
  }

  // pop action 
  // [1,2,3,4] => [1,2,3]
  //
  const pop = () => {
    if (size === 0) {return undefined;}

    let val = tail.val;
    if (tail.prev) {tail.prev.next = null;} //tail.prev podría ser null si tail == head
    tail = tail.prev;
    if (!tail) {head = null;}
    size--;

    return val;
  }

  // unshift action 
  // [1,2,3,4] => [x,1,2,3,4]
  //
  const unshift = (val) => {
    head
      ? head = head.prev = new Node(val, null, head)
      : head = tail = new Node(val);
    size++;
  }

  // shift action 
  // [1,2,3,4] => [2,3,4]
  //
  const shift = () => {
    if (size === 0) return undefined;

    let val = head.val;
    if (head.next) head.next.prev = null;
    head = head.next;
    if (!head) tail = null;
    size--;

    return val;
  }

  const remove = (val) => {
    let current = head;
    while (current) {
      if (current.val === val) {
        current.prev
          ? current.prev.next = current.next
          : head = head.next;
        current.next
          ? current.next.prev = current.prev
          : tail = tail.prev;
        size--;
        break;
      }
      current = current.next;
    }
  };

  return {
    push, pop, shift, unshift,
    delete: remove,
    count: () => size
  }
}

export default LinkedList;
