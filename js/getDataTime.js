const datetimeElement = document.getElementById("datetime");

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

function updateDateTime() {
  const currentDateTime = new Date();
  const formattedDateTime = formatDate(currentDateTime);
  datetimeElement.textContent = formattedDateTime;
}

export default updateDateTime;
