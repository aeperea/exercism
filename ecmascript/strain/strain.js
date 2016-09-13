export default {
  keep(list, fn) {
    return this.execution(list, fn, true);
  },
  discard(list, fn) {
    return this.execution(list, fn, false);
  },
  execution(list, fn, condition) {
    let match = [];
    list.forEach((el) => {
      if (fn(el) === condition) {
        match.push(el);
      }
    });
    return match;
  }
}
