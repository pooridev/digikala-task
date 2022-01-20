/**
 *
 * Generates and returns a unique id
 */
export const getUID = (): string => {
  const head = Date.now().toString(36);
  const tail = Math.random().toString(36).substr(2);

  return head + tail;
};
