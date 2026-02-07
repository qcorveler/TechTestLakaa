import { Indicator } from './indicator.model';

export interface IndicatorValue {
  id?: number;
  value: string;
  indicator: Indicator;
}