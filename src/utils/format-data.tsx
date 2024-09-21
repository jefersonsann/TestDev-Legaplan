export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  const str = String(date.toLocaleDateString("pt-BR", options));
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
