export const filtrar = (array, key, value) => {
  const filtro = array.filter((item) => item[key] === value);
  return filtro;
}