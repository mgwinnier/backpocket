const binaryCreate = () => {
  const binary = document.createElement('div');
  binary.classList.add('binary');
  binary.style.left = Math.random() * 100 + "vw";
  binary.style.animationDuration = Math.random() * 2 + 3 + "s";
  const binaryText = Math.random() < 0.5 ? "0" : "1"; // randomly choose 0 or 1
  binary.innerText = binaryText;
  document.getElementById('binary-rain').appendChild(binary);

  setTimeout(()=>{
      binary.remove();
  },5000);
}

setInterval(binaryCreate,  100); // create binary elements more frequently
