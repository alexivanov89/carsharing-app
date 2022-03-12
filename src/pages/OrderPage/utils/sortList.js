export const sortList = (list) =>
  list.sort((a, b) => {
    if (a.label.toLowerCase() < b.label.toLowerCase()) {
      return -1;
    } else if (a.label.toLowerCase() > b.label.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
