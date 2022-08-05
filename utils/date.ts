const d = new Date();
const date = d.getDate();
const day = d.getDay();
// eslint-disable-next-line import/prefer-default-export
export const weekOfMonth = Math.ceil((date - 1 - day) / 7); // 5
