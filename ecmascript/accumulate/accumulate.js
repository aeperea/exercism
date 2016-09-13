export default function (list, fn) {
  let newList = [];
  if (list.length === 0) { return newList; }
  list.forEach((el) => {
    newList.push(fn(el));
  });
  return newList;
}
