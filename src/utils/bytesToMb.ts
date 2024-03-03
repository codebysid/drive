export const bytesToMb = (bytes: Number): number => {
  if (!bytes) return
  return (bytes / (1024 * 1024)).toFixed(2)
}
