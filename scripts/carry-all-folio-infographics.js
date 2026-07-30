(() => {
  const graphics = [
    ['Project Brief and Success Criteria', '01-project-brief.png'],
    ['Working Drawing and Cutting List', '02-working-drawing.png'],
    ['WHS, SWMS and Risk Controls', '03-whs-swms.png'],
    ['Materials, Culture and Responsible Use', '04-materials-responsibility.png'],
    ['Corner Joint Choice and Practice', '05-joint-choice.png'],
    ['Mark-out and Corner Joint Construction', '06-joint-making.png'],
    ['Base Rebate, Housings and Internal Parts', '07-structure.png'],
    ['Handle Design, Drawing and Shaping', '08-handle.png'],
    ['Dry Fit, Adhesive and Clamping', '09-assembly.png'],
    ['Surface Preparation and Approved Finish', '10-finish.png'],
    ['Photos, Captions and Problem Solving', '11-evidence-problems.png'],
    ['PMI Evaluation and Final Quality', '12-pmi-evaluation.png']
  ];

  function addInfographics() {
    const cards = document.querySelectorAll('#folioCards .folio-card');
    cards.forEach((card, index) => {
      const graphic = graphics[index];
      const header = card.querySelector('.folio-head');
      if (!graphic || !header || card.querySelector('.folio-card-graphic')) return;

      const figure = document.createElement('figure');
      figure.className = 'folio-card-graphic';
      figure.innerHTML = `
        <img src="assets/folio/cards/${graphic[1]}" alt="${graphic[0]} infographic" loading="lazy" decoding="async">
        <figcaption>Use this visual to help you identify the evidence and explanation needed for this stage.</figcaption>
      `;
      header.insertAdjacentElement('afterend', figure);
    });
  }

  function start() {
    requestAnimationFrame(addInfographics);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
