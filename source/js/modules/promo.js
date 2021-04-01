const SECONDARY_ACTIVE_CLASS = 'promo__secondary--active';

export const promo = () => {
  const promoInner = document.querySelector('.promo__inner');
  const promoSecondary = promoInner && promoInner.querySelector('.promo__secondary');
  if (!promoSecondary) {
    return;
  }

  promoInner.addEventListener('click', () => {
    promoSecondary.classList.toggle(SECONDARY_ACTIVE_CLASS);
  });
};
