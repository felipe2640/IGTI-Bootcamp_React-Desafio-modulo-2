function ColorValue({ children, value, valuet }) {
  // prettier-ignore
  const color = parseFloat(value) > parseFloat(valuet)? 'text-red-500': parseFloat(valuet)?'text-green-500' : ""

  return <span className={color}>{valuet} %</span>;
}

export { ColorValue };
