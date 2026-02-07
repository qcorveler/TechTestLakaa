import { IndicatorValue } from './indicator-value.model';

export interface Collecte {
  id?: number;
  date: string; // ou Date
  association: string;
  indicatorValues?: IndicatorValue[];
}