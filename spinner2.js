let spinnerArray = ['\r|   ','\r/   ','\r-   ', '\r\\   ','\r|   ','\r/   ', '\r-   ','\r\\   ','\r|   ' ];

for (let i = 0; i < spinnerArray.length; i++) {
  const waitTime = 100 + (200 * (i + 1));
  setTimeout(()=> {
    process.stdout.write(spinnerArray[i]);
  }, waitTime);
}



