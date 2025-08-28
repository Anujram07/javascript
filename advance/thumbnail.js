function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr = "";

    if (views >= 1000000) {
        viewStr = (views / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else {
        viewStr = (views / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }

    let html = `
        <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} • ${viewStr} • ${monthsOld} months ago</p>
            </div>
        </div>
    `;

    document.querySelector(".container").insertAdjacentHTML("beforeend", html);
}
createCard(
  "Learn JavaScript in 10 Minutes",
  "Code Academy",
  1200000,
  5,
  "10:23",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw" 
);

createCard(
  "CSS Flexbox Crash Course",
  "Design Hub",
  98000,
  2,
  "8:45",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
