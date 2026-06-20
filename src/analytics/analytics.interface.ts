export interface AnalyticsDataEntry {
  continentCode: string;
  countryCode: string;
  countryName: string;
  cityName: string;
  visits: number;
}

export interface AnalyticsData {
  data: AnalyticsDataEntry[];
  count: number;
}
