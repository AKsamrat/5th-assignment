const addBtn = document.querySelectorAll('.seat-btn');
let count = 0;
let totalCost = 0;
let grandTotal = 0;
let coupon = 0;
for (let index = 0; index < addBtn.length; index++) {
  const btn = addBtn[index];
  // console.log(btn);
  btn.addEventListener('click', function (event) {
    count += 1;
    totalCost += 550;
    grandTotal = totalCost - totalCost * coupon;
    setElementValueById('total-price', totalCost);
    setElementValueById('grand-total', grandTotal);
    const leftSeat =
      parseInt(document.getElementById('left-seat').innerText) - 1;
    setElementValueById('left-seat', leftSeat);
    setElementValueById('count-seat', count);
    const seatName = event.target.innerText;
    setSeatInfo(seatName);

    console.log(seatName);
  });
}
//===========================================
function setElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function setSeatInfo(seatName) {
  const ulContainer = document.getElementById('ul-container');
  const li = document.createElement('li');
  const p = document.createElement('p');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  p.innerText = seatName;
  p1.innerText = 'economy';
  p2.innerText = 550;
  li.appendChild(p);
  li.appendChild(p1);
  li.appendChild(p2);
  ulContainer.appendChild(li);
}
