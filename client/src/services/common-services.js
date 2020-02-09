import moment from "moment";
const isNullOrUndefined = obj => {
  return obj == null || obj === undefined || obj.Lenth < 1;
};
const formatDateTime = data => {
  return moment(data).format("MM-DD-YYYY HH:mm");
};

const randomColor = () => {
  // let letters = "0123456789ABCDEF";
  const colors = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple"
  ];
  const rand = Math.random();
  const total = colors.length;
  const randIndex = Math.floor(rand * total);
  let color = "";

  color = colors[randIndex];

  return color;
};

export { isNullOrUndefined, formatDateTime, randomColor };
