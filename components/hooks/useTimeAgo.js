export function useTimeAgo(timeToFormat) {
  const time = new Date(timeToFormat)

  const timeSince = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000)

    let interval = seconds / 31536000

    if (interval > 1) {
      return Math.floor(interval) + " years"
    }
    interval = seconds / 2592000
    if (interval > 1) {
      return Math.floor(interval) + " months"
    }
    interval = seconds / 86400
    if (interval > 1) {
      return Math.floor(interval) + " days"
    }
    interval = seconds / 3600
    if (interval > 1) {
      return Math.floor(interval) + " hours"
    }
    interval = seconds / 60
    if (interval > 1) {
      return Math.floor(interval) + " minutes"
    }
    return Math.floor(seconds) + " seconds"
  }
  const aDay = 24 * 60 * 60 * 1000

  const timeToReturn = timeSince(new Date(time - aDay))

  // Making time more precise
  if (timeToReturn === "1 hours") {
    return "1 hour"
  } else if (timeToReturn === "1 days") {
    return "1 day"
  } else if (timeToReturn === "1 months") {
    return "1 month"
  } else if (timeToReturn === "1 years") {
    return "1 year"
  } else {
    return timeToReturn
  }
}
