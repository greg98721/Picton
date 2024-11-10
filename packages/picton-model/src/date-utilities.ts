import {
  startOfDay,
  endOfDay,
} from 'date-fns';

import { tz, TZDate } from '@date-fns/tz';

export function startOfDayInTimezone(timezone: string, d: Date): Date {
  const r = startOfDay(d, { in: tz(timezone) });
  return r;
}

export function endOfDayInTimezone(timezone: string, d: Date): Date {
  const r = endOfDay(d, { in: tz(timezone) });
  return r;
}

export function toTimezone(timezone: string, d: Date): Date {
  return new TZDate(d, timezone);
}
