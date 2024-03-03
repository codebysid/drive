export const bytesToMb = (bytes: number) => {
  if (!bytes) return 0
  return (bytes / (1024 * 1024)).toFixed(2)
}
