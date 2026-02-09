// src/app/models/collecte-request.model.ts
import { IndicatorValue } from "./indicator-value.model";

export interface CreateCollecteRequest {
  date: string;
  association: string;
  indicatorValues: IndicatorValue[]; // tableau des indicateurs et leurs valeurs
}
