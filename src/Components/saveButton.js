
function saveData(){
  let input = this.siblings('input').val()
  let label = this.siblings('p').text()
  localStorage.setItem(label, input)
}