import { caseInsensitive } from '../../../functions/caseInsensitive/caseInsensitive';

// The below will set the style of any button that has
// been visited to have opacity 1 and signify "visited"
export const styleVisitedButtons = (
  visitedProviders,
  currentRef,
  currentMarket,
  e = null
) => {
  if (visitedProviders.markets[caseInsensitive(currentMarket)])
    visitedProviders.markets[caseInsensitive(currentMarket)].forEach(visit => {
      currentRef.forEach(button => {
        if (
          e &&
          button &&
          button.textContent === visit &&
          button.textContent !== e.target.textContent
        ) {
          // styles already visited button
          // that are not currently active
          button.style.backgroundColor = '#FFF';
          button.style.color = '#004146';
        } else if (
          e &&
          button &&
          button.textContent === visit &&
          button.textContent === e.target.textContent
        ) {
          // styles already visited button
          // if button is not highlighted with secondary color
          button.style.background = '#F89572';
          button.style.color = '#FFF';
        } else if (
          !e &&
          button &&
          button.textContent === visit &&
          button.style.opacity !== '1'
        ) {
          // highlighted secondary color will be set if below statement is not true
          // this is set useing e.target in the toggleProvider function in the Sidebar component
          button.style.backgroundColor = '#FFF';
          button.style.color = '#004146';
          button.style.opacity = '1';
        }
      });
    });
};
