const Node = (val, prev = null, next = null) => {
  return {
    val,
    prev,
    next,
  }
};

const LinkedList = () => {
  let head = null,
      tail = null,
      size = 0;

  const push = (n) => {
    head
      ? tail = tail.next = new Node(n, tail, null)
      : head = tail = new Node(n)
    size++;
  }

  const pop = () => {
    if (size === 0) {return undefinded;}

    let val = tail.val;
    if (tail.prev) {tail.prev.next = null;}
    tail = tail.prev;
    if (!tail) {head = null;}
    size--;

    return val;
  }

  const unshift = (val) => {
    head
      ? head = head.prev = new Node(val, null, head)
      : head = tail = new Node(val);
    size++;
  }

  const shift = () => {
    if (size === 0) return undefined;

    const val = head.val;
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
