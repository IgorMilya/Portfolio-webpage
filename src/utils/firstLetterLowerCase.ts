export const firstLetterLowerCase = (str: string | null) => {
  if (!str) return
  return str[0].toLowerCase() + str.slice(1)
}
