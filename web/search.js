const normalize = (str) => {
  let result = " ";
  for (const c of str) {
    const char = c.normalize("NFD")[0].toLowerCase();
    if (
      (96 < char.charCodeAt(0) && char.charCodeAt(0) < 123) ||
      (48 <= char.charCodeAt(0) && char.charCodeAt(0) < 58)
    )
      result += char;
    else if (result[result.length - 1] !== " ") result += " ";
  }
  return result.trim().replaceAll(" ", "-");
};

const handleSearch = (query) => {
  Array.from(document.getElementsByClassName("song-li")).forEach((item) => {
    if (item.dataset.plaintext.includes(query)) item.style.display = "block";
    else item.style.display = "none";
  });
};

document
  .getElementById("search")
  .addEventListener("input", (event) =>
    handleSearch(normalize(event.target.value))
  );
