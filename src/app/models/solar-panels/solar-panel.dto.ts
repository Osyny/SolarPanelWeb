export interface SolarPanelsResponse {
  solarPanels: SolarPanelDto[];
  total: number;
  skip: number;
  limit: number;
}

export interface SolarPanelDto {
  id?: string;
  width?: number;
  length?: number;
  power?: number;
  stock?: number;
}
