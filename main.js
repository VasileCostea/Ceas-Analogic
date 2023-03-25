class CeasAnalogic {
  constructor(element) {
    this.element = element;
  }
  start() {
    this.update();
    setInterval(() => {
      this.update();
    }, 500);
  }

  update() {
    const timp = this.getTimeParts();
    const minuteFormat = timp.minute.toString().padStart(2, "0");
    const timpFormat = `${timp.ora}:${minuteFormat}`;
    const amPM = timp.isAm ? "AM" : "PM";

    this.element.querySelector(".ceas-timp").textContent = timpFormat;
    this.element.querySelector(".ceas-ampm").textContent = amPM;
  }
  getTimeParts() {
    //ne trebuie orele,minutele si PM or AM
    const timpExact = new Date();

    return {
      ora: timpExact.getHours() % 12 || 12,
      minute: timpExact.getMinutes(),
      isAm: timpExact.getHours() < 12,
    };
  }
}
const ceasElement = document.querySelector(".ceas");
const ceasObject = new CeasAnalogic(ceasElement);

ceasObject.start();
