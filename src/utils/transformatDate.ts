export const transformatedDate = (date: string) => {
  const [year, month, day] = date.split('-')

  const inputDate = new Date(
    Number(year),
    Number(month) - 1,
    Number(day)
  )

  const today = new Date()
  const yesterday = new Date()
  yesterday.setDate(today.getDate() - 1)

  const isSameDay = (d1: Date, d2: Date) =>
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()

  const formatted = inputDate.toLocaleDateString('pt-BR')
  const [newDay, newMonth] = formatted.split('/')

  if (isSameDay(inputDate, today)) {
    return `Hoje, ${newDay}/${newMonth}`
  }

  if (isSameDay(inputDate, yesterday)) {
    return `Ontem, ${newDay}/${newMonth}`
  }

  return `${newDay}/${newMonth}`
}