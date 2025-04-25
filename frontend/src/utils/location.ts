export function navigateToAddress(
    address: string,
    onStart: () => void,
    onFinish: () => void,
    onError?: (error: any) => void
  ) {
    try {
      onStart(); // Ativa o loading
  
      const destination = encodeURIComponent(address);
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
      const mapUrl = isMobile
        ? `https://www.google.com/maps/search/?api=1&query=${destination}`
        : `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
  
      // Abrir em nova aba para não travar a execução
      const win = window.open(mapUrl, '_blank');
  
      if (win) {
        win.focus();
        onFinish(); // Finaliza o loading imediatamente
      } else {
        throw new Error('Não foi possível abrir o Google Maps.');
      }
    } catch (error) {
      onError?.(error);
      onFinish(); // Finaliza o loading mesmo em caso de erro
    }
  }
  