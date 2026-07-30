export const TOTAL_SERIES_ID = 'total'

export function getCategorySeriesId(category: string) {
  return `category:${category}`
}

export function createTrafficSeriesIds(categories: string[]) {
  return [...categories.map(getCategorySeriesId), TOTAL_SERIES_ID]
}

export function filterVisibleSeries<T extends { id: string }>(
  series: T[],
  selectedSeries: ReadonlySet<string>
) {
  return series.filter((item) => selectedSeries.has(item.id))
}

export function updateSelectedSeries(
  selectedSeries: ReadonlySet<string>,
  seriesId: string,
  checked: boolean
) {
  const nextSelectedSeries = new Set(selectedSeries)

  if (checked) {
    nextSelectedSeries.add(seriesId)
  } else {
    nextSelectedSeries.delete(seriesId)
  }

  return nextSelectedSeries
}
