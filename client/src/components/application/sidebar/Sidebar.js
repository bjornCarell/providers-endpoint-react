import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useScrollTop } from '../../../hooks/useScrollTop';
import { providerStatus } from '../../../functions/providerStatus/providerStatus';
import { caseInsensitive } from '../../../functions/caseInsensitive/caseInsensitive';
import {
  SidebarStyled,
  LeftMenuInner,
  LeftMenuInnest,
  ButtonItem
} from './SidebarStyled';
import { FlexContainer, FlexItem } from '../../library/flex/FlexStyled';
import { ProvidersStatus } from '../providerStatus/ProviderStatus';
import { Ul } from '../../library/ul/UlStyled';
import { Li } from '../../library/li/LiStyled';
import { SidebarForm } from '../sidebarForm/SidebarForm';

export const Sidebar = ({
  filteredProviders,
  loading,
  market,
  markets,
  onChangeMarket,
  onClickProvider,
  providers,
  search,
  // searchNode,
  showAllProviders
}) => {
  const ref = useRef([]);
  const scrollTop = useRef('');
  const [arr, setArr] = useState([]);
  const [allProvidersShown, setAllProvidersShown] = useState(true);
  const [makeResetButtonActive, setMakeResetButtonActive] = useState(false);
  const [visitedProviders, setVisitedProviders] = useState({ markets: {} });

  //
  useState(() => {
    setVisitedProviders({
      markets: markets.reduce(
        (acc, mark) => ({
          ...acc,
          [caseInsensitive(mark.name)]: []
        }),
        {}
      )
    });
  }, []);

  // Resetting visited providers on change of market,
  // until I have figured out how to highligt visited on
  // market change.
  useEffect(() => {
    setVisitedProviders({
      markets: markets.reduce(
        (acc, mark) => ({
          ...acc,
          [caseInsensitive(mark.name)]: []
        }),
        {}
      )
    });
    showAllProviders();
    setMakeResetButtonActive(false);
  }, [market]);

  // The below will set the style of any button that has
  // been visited to have opacity 1 and signify "visited"
  const styleVisitedButtons = (currentRef, currentMarket, e = null) => {
    visitedProviders.markets[caseInsensitive(currentMarket)].forEach(visit => {
      currentRef.forEach(r => {
        if (e) {
          if (
            r.textContent === visit &&
            r.textContent !== e.target.textContent
          ) {
            r.style.backgroundColor = '#FFF';
            r.style.color = '#004146';
            r.style.opacity = '1';
          } else if (
            search.length < 1 &&
            r.textContent === visit &&
            r.textContent === e.target.textContent
          ) {
            e.target.style.background = '#F89572';
            e.target.style.color = '#FFF';
          }
        } else if (!e) {
          if (r.textContent === visit) {
            r.style.backgroundColor = '#FFF';
            r.style.color = '#004146';
            r.style.opacity = '1';
          }
        }
      });
    });
  };

  //
  useEffect(() => {
    if (providers.length !== filteredProviders.length && arr.length === 0) {
      setArr(filteredProviders);
      ref.current = new Array(filteredProviders.length);
      styleVisitedButtons(ref.current, market);
    } else {
      setArr(providers);
      ref.current = new Array(providers.length);
      styleVisitedButtons(ref.current, market);
    }
  }, [providers, filteredProviders]);

  //
  useEffect(() => {
    setAllProvidersShown(false);
    setMakeResetButtonActive(false);
    styleVisitedButtons(ref.current, market);
  }, [search]);

  //
  const toggleProvider = e => {
    e.preventDefault();
    onClickProvider(e);
    if (
      !visitedProviders.markets[caseInsensitive(market)].includes(
        e.target.textContent
      )
    ) {
      setVisitedProviders({
        markets: {
          ...visitedProviders.markets,
          [caseInsensitive(market)]: visitedProviders.markets[
            caseInsensitive(market)
          ].concat([e.target.textContent])
        }
      });
    }

    if (search.length < 1) {
      setMakeResetButtonActive(true);
      e.target.style.background = '#F89572';
      e.target.style.color = '#FFF';
      e.target.style.opacity = '1';
    } else {
      e.target.style.backgroundColor = '#FFF';
      e.target.style.color = '#004146';
      e.target.style.opacity = '1';
    }

    styleVisitedButtons(ref.current, market, e);
  };

  //
  const reset = e => {
    e.preventDefault();

    if (search.length < 1) {
      showAllProviders();
      setAllProvidersShown(true);
      setMakeResetButtonActive(false);
      styleVisitedButtons(ref.current, market);
    }

    ref.current.forEach(r => {
      r.style.background = '#FFF';
      r.style.color = '#004146';
    });

    if (scrollTop.current.scrollTop !== 0) scrollTop.current.scrollTop = 0;
  };

  return (
    <SidebarStyled>
      <FlexContainer>
        <FlexItem noPadding>
          <SidebarForm
            makeResetButtonActive={makeResetButtonActive}
            markets={markets}
            onChangeMarket={e => onChangeMarket(e)}
            reset={e => reset(e)}
            allProvidersShown={allProvidersShown}
          />
        </FlexItem>
      </FlexContainer>

      <LeftMenuInner>
        <LeftMenuInnest ref={scrollTop}>
          {loading ? (
            ''
          ) : (
            <Ul column>
              {!allProvidersShown // Make this into a component SidenbarList
                ? filteredProviders.map(({ name, status }, i) => (
                    <Li key={name} noPaddingBottom noPaddingTop>
                      <FlexContainer alignCenter>
                        <ButtonItem
                          key={name}
                          onClick={e => toggleProvider(e)}
                          ref={el => {
                            ref.current[i] = el;
                          }}
                        >
                          {name}
                        </ButtonItem>
                        <ProvidersStatus status={providerStatus(status)} />
                      </FlexContainer>
                    </Li>
                  ))
                : providers.map(({ name, status }, i) => (
                    <Li key={name} noPaddingBottom noPaddingTop>
                      <FlexContainer alignCenter>
                        <ButtonItem
                          key={name}
                          onClick={e => toggleProvider(e)}
                          ref={e => {
                            ref.current[i] = e;
                          }}
                        >
                          {name}
                        </ButtonItem>
                        <ProvidersStatus status={providerStatus(status)} />
                      </FlexContainer>
                    </Li>
                  ))}
            </Ul>
          )}
        </LeftMenuInnest>
      </LeftMenuInner>
    </SidebarStyled>
  );
};

Sidebar.propTypes = {
  filteredProviders: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  market: PropTypes.string.isRequired,
  markets: PropTypes.array.isRequired,
  onChangeMarket: PropTypes.func.isRequired,
  onClickProvider: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  providers: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  // searchNode: PropTypes.object.isRequired,
  showAllProviders: PropTypes.func.isRequired
};
