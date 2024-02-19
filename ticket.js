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
    if (count === 4) {
      getCouponValue();
      removeHiddenById('apply-btn');
    }
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
    setBackgroundById(seatName);
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

function getCouponValue() {
  document.getElementById('apply-btn').addEventListener('click', function () {
    if (document.getElementById('input-coupon').value === 'NEW15') {
      coupon = 0.15;
      grandTotal = totalCost - totalCost * coupon;
      setElementValueById('grand-total', grandTotal);
      setHiddenById('coupon-div');
    } else if (document.getElementById('input-coupon').value === 'Couple 20') {
      coupon = 0.2;
      grandTotal = totalCost - totalCost * coupon;
      setElementValueById('grand-total', grandTotal);
      setHiddenById('coupon-div');
    } else {
      alert('Please enter valid Coupon');
    }
  });
}

// console.log(coupon);

function grandTotalCalculation(value) {
  let totalValue = document.getElementById('total-price').innerText;
  console.log(totalValue);
}
function setBackgroundById(element) {
  const backgroundText = document.getElementById(element);
  backgroundText.classList.add('bg-lime-500');
  backgroundText.classList.add('visibility-none');
}
function removeHiddenById(element) {
  const removeHiddenScreen = document.getElementById(element);
  removeHiddenScreen.classList.remove('hidden');
}
function setHiddenById(element) {
  const setHiddenScreen = document.getElementById(element);
  // console.log(setHiddenScreen.classList);
  setHiddenScreen.classList.add('hidden');
}
