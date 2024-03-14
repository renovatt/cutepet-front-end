export function translateWord(object: object, words: string) {
  return words.split(', ')
    .map(word => object[word as keyof typeof object] || word)
    .join(', ')
}
