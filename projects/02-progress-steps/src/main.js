const [prevBtn, nextBtn] = document.querySelectorAll('.controls button');
const progressBar = document.querySelector('.steps__progress');
const steps = document.querySelectorAll('.step');
const NUM_STEPS = steps.length;
const porcentageByStep = 100 / (NUM_STEPS - 1);

const stepsProgress = {
  counter: 1,
  nextAction: function () {
    this.counter += 1;
  },
  prevAction: function () {
    this.counter -= 1;
  }
};

nextBtn.addEventListener('click', () => {
  stepsProgress.nextAction();
  if (stepsProgress.counter === NUM_STEPS) nextBtn.disabled = true;

  updateStepProgress({ btnToDisabled: prevBtn, indexStep: stepsProgress.counter - 1, colorStep: '#3498DB' });
});

prevBtn.addEventListener('click', () => {
  stepsProgress.prevAction();
  if (stepsProgress.counter === 1) prevBtn.disabled = true;

  updateStepProgress({ btnToDisabled: nextBtn, indexStep: stepsProgress.counter, colorStep: '#E0E0E0' });
});

function updateStepProgress ({ btnToDisabled, indexStep, colorStep }) {
  progressBar.style.width = `${porcentageByStep * (stepsProgress.counter - 1)}%`;
  btnToDisabled.disabled = false;
  const stepElement = steps[indexStep];
  stepElement.style.borderColor = colorStep;
}
