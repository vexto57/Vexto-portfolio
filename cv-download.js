document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('download-cv');
  if (btn) {
    btn.addEventListener('click', function() {
      // Let the browser handle the download via the href + download attribute
      // Just give visual feedback
      const original = this.innerHTML;
      this.innerHTML = '<i class="fas fa-check"></i> Downloading...';
      setTimeout(() => { this.innerHTML = original; }, 1800);
    });
  }
});
