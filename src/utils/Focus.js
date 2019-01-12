export const getFocus = () => {
    setTimeout(() => {
      let target = document.querySelector('.modal-content');
      target.focus();
    }, 500);
  }
