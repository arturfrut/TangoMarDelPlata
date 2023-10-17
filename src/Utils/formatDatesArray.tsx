export const generateDateArray = () : Array<{ day: string, dayNumber: number, date: Date }> => {
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  const dateArray: Array<{ day: string, dayNumber: number, date: Date }> = [];

  const currentDate = new Date();
  for (let i = 0; i < 7; i++) {
    const day = daysOfWeek[currentDate.getDay()];
    const dayNumber = currentDate.getDate();
    dateArray.push({ day, dayNumber, date: new Date(currentDate) });
    currentDate.setDate(dayNumber + 1);
  }

  return dateArray;
}

