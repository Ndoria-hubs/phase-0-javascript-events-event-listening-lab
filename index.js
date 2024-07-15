function addingEventListener() {
    const input = document.getElementById('button')

    function clickAlert() {
    alert('I was clicked!')
}
  //.addEventListener('click',function() {
  //  console.log('I was clicked!');
    input.addEventListener('click', clickAlert)

}

addingEventListener();