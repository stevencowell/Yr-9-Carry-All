(() => {
  const graphics = [
    ['Project Brief and Success Criteria', 'assets/folio/cards/01-project-brief.png', 'Use this visual to identify the evidence and explanation needed for this stage.'],
    ['Working Drawing and Cutting List', 'assets/folio/cards/02-working-drawing.png', 'Use this visual to identify the evidence and explanation needed for this stage.'],
    ['WHS, SWMS and Risk Controls', 'assets/folio/cards/03-whs-swms.png', 'Use this visual to identify the evidence and explanation needed for this stage.'],
    ['Materials, Culture and Responsible Use', 'assets/folio/cards/04-materials-responsibility.png', 'Use this visual to identify the evidence and explanation needed for this stage.'],
    ['Required Rebate-and-Housing Construction', 'assets/carry-all-working-drawing.png', 'The supplied working drawing is authoritative: rebate-and-housing is required; box-pin and dovetail are comparative theory only.'],
    ['Mark-out and Rebate-and-Housing Construction', 'assets/reference/rebate-joint.jpg', 'Rebate principle reference only. Use the supplied working drawing and teacher direction for the assessed Carry-All detail and method.'],
    ['Base Rebate, Housings and Internal Parts', 'assets/folio/cards/07-structure.png', 'Use this source-aware visual to plan the required dry-fit evidence without scaling or inventing details.'],
    ['Handle Design, Drawing and Shaping', 'assets/folio/cards/08-handle.png', 'Use this visual to identify the evidence and explanation needed for this stage.'],
    ['Dry Fit, Adhesive and Clamping', 'assets/folio/cards/09-assembly.png', 'Use this visual to identify the evidence and explanation needed for this stage.'],
    ['Surface Preparation and Approved Finish', 'assets/folio/cards/10-finish.png', 'Use this visual to identify the evidence and explanation needed for this stage.'],
    ['Photos, Captions and Problem Solving', 'assets/folio/cards/11-evidence-problems.png', 'Use this visual to identify the evidence and explanation needed for this stage.'],
    ['PMI Evaluation and Final Quality', 'assets/folio/cards/12-pmi-evaluation.png', 'Use this visual to identify the evidence and explanation needed for this stage.']
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
        <img src="${graphic[1]}" alt="${graphic[0]} visual guide" loading="lazy" decoding="async">
        <figcaption>${graphic[2]}</figcaption>
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
