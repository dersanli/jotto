/***
 * Returns node(s) with the given data-test attribute.
 * @param wrapper - Enzyme shallow wrapper
 * @param val - the data-test attribute search value
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}
