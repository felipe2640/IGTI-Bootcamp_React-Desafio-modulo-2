function Winner({ children, value, valuet }) {
  // prettier-ignore
  const color = parseFloat(value) > parseFloat(valuet)? 'text-red-500': parseFloat(valuet)?'text-green-500' : ""
  const winner =
    parseFloat(value) > parseFloat(valuet)
      ? "Não eleito"
      : parseFloat(valuet)
      ? "Eleito"
      : "";
  return <span className={color}>{winner}</span>;
}

export { Winner };
