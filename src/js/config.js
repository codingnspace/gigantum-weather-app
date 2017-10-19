import moment from 'moment';
const latitude = 38.9072;
const longitude = 77.0369;

export const baseApiUrl = `https://1miudhz7a9.execute-api.us-east-1.amazonaws.com/dev/forecast/${latitude},${longitude},`;
export const buildApiUrl = (time) => `${baseApiUrl},${time}`;

export const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const d = new Date();
const currentDay = d.getDay();
const nextDay = currentDay + 1;


const nextSevenDays = daysOfWeek.slice(currentDay).concat(daysOfWeek.slice(0, nextDay));

const formattedDate = (daysToAdd) => {
  const futureDate = moment().add(daysToAdd, 'days');
  return futureDate.format('YYYY-MM-DD');
};

export const weekDays = nextSevenDays
  .map((day, idx) => {
    const dateHash = formattedDate(idx);
    return {
      dateHash: `${dateHash}T00:00:00`,
      idx,
      day
    };
})
  .filter((dayWithHash) => dayWithHash.day !== 'Sunday' && dayWithHash.day !== 'Saturday');
