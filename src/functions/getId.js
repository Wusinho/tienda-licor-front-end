/* eslint-disable */

function objectsAreSame(cat) {
  const ids = [];

  Object.entries(obj1).forEach(([key, value]) => {
    Object.entries(obj2).forEach(([key2, value2]) => {
      if (value == true && key == value2.name) {
        ids.push(value2.id);
      }
    });
  });
  return ids;
}
export default objectsAreSame;
