export function formatToBRL(value) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

export function formatToBRLInput(value) {
  if (!value) return "0,00";
  const numericValue = value.replace(/[^\d]/g, "");
  const floatValue = parseFloat(numericValue) / 100;

  return floatValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
  