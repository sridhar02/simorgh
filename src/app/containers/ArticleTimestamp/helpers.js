import { formatDate, formatDateAndTime } from './timeFormats';

export const isTenHoursAgoOrLess = milliseconds => {
  const now = Date.now();
  return now - milliseconds <= 10 * 60 * 60 * 1000;
};

export const isFirstRelative = (lastPublished, firstPublished) =>
  lastPublished === firstPublished && isTenHoursAgoOrLess(firstPublished);

export const isLastRelative = lastPublished =>
  isTenHoursAgoOrLess(lastPublished);

export const isToday = timestamp => {
  const today = new Date(Date.now());
  const timestampDay = new Date(timestamp);
  const todayDate = `${today.getDay()}/${today.getMonth()}/${today.getFullYear()}`;
  const timestampDate = `${timestampDay.getDay()}/${timestampDay.getMonth()}/${timestampDay.getFullYear()}`;
  return todayDate === timestampDate;
};

export const formatType = timestamp =>
  isToday(timestamp) ? formatDateAndTime : formatDate;
