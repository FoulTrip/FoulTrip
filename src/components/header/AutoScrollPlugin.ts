// src/components/AutoScrollPlugin.ts
export function AutoScrollPlugin(slider: any, options = { speed: 0.05 }) {
    let animationFrame: number;
    let offset = 0;
    let lastTime = 0;
  
    function animate(time: number) {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;
  
      offset += delta * options.speed;
      const totalWidth = slider.track.details.width;
      const resetOffset = totalWidth / 2; // Debido a que el loop duplica los slides
  
      if (offset > resetOffset) {
        offset = offset - resetOffset;
      }
      // Actualiza la transformación manualmente
      slider.container.style.transform = `translate3d(-${offset}px, 0, 0)`;
  
      animationFrame = requestAnimationFrame(animate);
    }
  
    slider.on("created", () => {
      lastTime = 0;
      animationFrame = requestAnimationFrame(animate);
    });
  
    slider.on("destroyed", () => {
      cancelAnimationFrame(animationFrame);
    });
  }
  