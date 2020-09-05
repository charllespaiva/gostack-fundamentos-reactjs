const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '4-digit',
  }).format(date); // TODO

export default formatDate;
