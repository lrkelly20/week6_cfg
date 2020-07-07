function appendModal(nameValue, topicValue, messageValue) {
  // Add name text to modal
  const nameField = document.createElement("p");
  nameField.setAttribute("id", "nameField");
  nameField.textContent = nameValue;
  document.getElementById("nameDiv").appendChild(nameField);

  // Add topic text to modal
  // Add message text to modal
}

appendModal(
  "Code First Girls",
  "New Website",
  "We want a new website, please help!"
);

// Add event listener
