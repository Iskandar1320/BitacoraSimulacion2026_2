export function createPerformanceHud() {
  const hud = document.createElement('aside');
  hud.className = 'performance-hud hidden';
  hud.innerHTML = `
    <div class="performance-kicker">LESALPX · INTERPRETACIÓN MANUAL</div>
    <h1>Corrientes topográficas</h1>
    <p class="performance-copy">Conduce el campo como si el puntero fuera una cumbre móvil.</p>
    <div class="score-row" aria-label="score de interpretación">
      <button data-stage="1"><span>1</span> Bruma</button>
      <button data-stage="2"><span>2</span> Ascenso</button>
      <button data-stage="3"><span>3</span> Cresta</button>
      <button data-stage="4"><span>4</span> Ruptura</button>
    </div>
    <div class="performance-controls">
      <span><kbd>P</kbd> laboratorio</span>
      <span><kbd>R</kbd> reiniciar</span>
      <span><kbd>ESPACIO</kbd> avalancha</span>
      <span><kbd>PUNTERO</kbd> mover cumbre</span>
    </div>
  `;

  document.body.append(hud);

  const buttons = [...hud.querySelectorAll('[data-stage]')];
  let stageHandler = null;

  for (const item of buttons) {
    item.addEventListener('click', () => {
      const stage = Number(item.dataset.stage);
      stageHandler?.(stage);
    });
  }

  return {
    element: hud,
    setVisible(visible) {
      hud.classList.toggle('hidden', !visible);
    },
    setStage(stage) {
      for (const item of buttons) {
        item.classList.toggle('active', Number(item.dataset.stage) === stage);
      }
    },
    onStageChange(handler) {
      stageHandler = handler;
    }
  };
}
