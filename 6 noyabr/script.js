fetch("https://northwind.vercel.app/api/categories")
  .then((res) => res.json()
  )
  .then((data) => {
    data.forEach((element) => {
        createElementforCard(element.id, element.name, element.description);
      console.log(element);
   
    });
  });

function createElementforCard(id, name, description) {
  const card = document.createElement("a");
  const cardId = document.createElement("div");
  const cardName = document.createElement("div");
  const cardDescription = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("href", "index2.html#"+id);
 

  cardId.textContent = id;
  cardName.textContent = name;
  cardDescription.textContent = description;
  card.append(cardId, cardDescription, cardName);
  document.body.appendChild(card);
  
}
