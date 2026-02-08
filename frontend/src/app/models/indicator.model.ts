export interface Indicator {
  id?: number;
  name: string;
  unit?: string;
  type: 'NUMBER' | 'TEXT' | 'BOOLEAN';
  required: boolean;
}