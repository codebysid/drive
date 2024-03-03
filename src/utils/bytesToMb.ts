export const bytesToMb = (bytes: number) => {
  if (!bytes) return 0
  const inMb = Number((bytes / (1024 * 1024)).toFixed(2).toString())
  return inMb
}
