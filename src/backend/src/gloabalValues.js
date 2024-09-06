export let currentUsername = '';

export const setCurrentUsername = (username) => {
    currentUsername = username;
    localStorage.setItem("currentUsername", username);
}

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  export const formatDate = (dateObj) => {
    const { year, month, day } = dateObj;
    const monthIndex = parseInt(month, 10) - 1; // Convert month to zero-based index
    const monthName = monthNames[monthIndex];
    console.log("Today-> ",`${day} ${monthName} ${year}`)
    return `${day} ${monthName} ${year}`;
  };
  
  export const formatTime = (timeObj) => {
    const { hour, minute } = timeObj;
    let hourInt = parseInt(hour, 10);
    const minuteInt = parseInt(minute, 10);
    const period = hourInt >= 12 ? "PM" : "AM";
    
    if (hourInt === 0) {
      hourInt = 12; // Midnight case
    } else if (hourInt > 12) {
      hourInt -= 12;
    }
  
    const minuteStr = minuteInt.toString().padStart(2, "0");
    return `${hourInt}:${minuteStr} ${period}`;
  };