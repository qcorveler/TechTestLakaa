import { IndicatorValueDTO } from './indicator-value-DTO.dto';

export interface Collecte {
  id?: number;
  date: string; // ou Date
  association: string;
  indicatorValuesDTO?: IndicatorValueDTO[];
}