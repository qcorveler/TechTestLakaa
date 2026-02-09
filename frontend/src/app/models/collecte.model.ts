import { IndicatorValueDTO } from './indicator-value-DTO.dto';

export interface Collecte {
  id?: number;
  date: string;
  association: string;
  indicatorValuesDTO?: IndicatorValueDTO[];
}