btnCopyClipboard = document.querySelector(".registro-output button");

btnCopyClipboard.addEventListener("click", () => {
  var copyText = document.getElementById("registroFinal");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  alert("Registro copiado");
});

btnSubmit = document.getElementById("submit")

btnSubmit.addEventListener("click", () => {
  nameInput = document.getElementById("name").value
  mainCharInput = document.getElementById("mainChar").value
  friendNameInput = document.getElementById("friendName").value
  liderNameInput = document.getElementById("liderName").value
  registroFinal = document.getElementById("registroFinal")

  if (nameInput == '' || mainCharInput == '' || liderNameInput == '') {
    alert("Preencha todos os campos obrigatorios")
    return
  }
  registroFinal.value = `${nameInput} - Main: ${mainCharInput} | Amigo de: ${friendNameInput} | Reg: ${liderNameInput}`
})
