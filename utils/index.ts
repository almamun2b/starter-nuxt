export const dateFormat = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

export const bdNumberFormat = (number: number) => {
  const options: Intl.NumberFormatOptions = {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return number.toLocaleString("en-IN", options);
};

export const redirectToParentPath = () => {
  const route = useRoute();
  const currentPath = route.path;
  const parentPath = currentPath.slice(0, currentPath.lastIndexOf("/"));
  navigateTo(parentPath);
};
