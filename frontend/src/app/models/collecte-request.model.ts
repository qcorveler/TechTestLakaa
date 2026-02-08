// src/app/models/collecte-request.model.ts
import { IndicatorValue } from "./indicator-value.model";

export interface CreateCollecteRequest {
  date: string; // ou Date si ton backend accepte ISO strings
  association: string;
  valeurs: IndicatorValue[]; // tableau des indicateurs et leurs valeurs
}
