function expect(val) {
  return {
    toBe: function (val2) {
      if (val === val2) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (val2) {
      if (val !== val2) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}
