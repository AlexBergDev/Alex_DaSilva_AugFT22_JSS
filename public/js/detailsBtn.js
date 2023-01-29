async function detailsBtn() {
  var rowId = event.target.parentNode.parentNode.id;
  var meme = document.getElementById(rowId).querySelectorAll(".data");

  var id = meme[0].innerHTML.trim();
  var name = meme[1].innerHTML.trim();
  var url = meme[2].innerHTML.trim();
  var width = meme[3].innerHTML.trim();
  var height = meme[4].innerHTML.trim();

  data = JSON.stringify({
    id: id,
    name: name,
    url: url,
    width: width,
    height: height,
  });

  console.log(id, name);

  try {
    const response = await fetch("/meme", {
      method: "post",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(`Error: ${err}`);
  }

  open_new_window("/meme/" + id);
}
