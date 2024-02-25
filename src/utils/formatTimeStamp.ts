export const formatTimeStamp = (createdAt: EpochTimeStamp) => {
  if (!createdAt) return
  const createdAtTimestamp = new Date(createdAt)

  const formattedCreatedAt = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(createdAtTimestamp);

  return formattedCreatedAt.toString()
}
