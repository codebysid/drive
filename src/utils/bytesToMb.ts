export const bytesToMb = (bytes: number) => {
  if (!bytes) return
  return (bytes / (1024 * 1024)).toFixed(2).toString()
}
