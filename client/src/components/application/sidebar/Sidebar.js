import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useScrollTop } from '../../../hooks/useScrollTop';
import { providerStatus } from '../../../functions/providerStatus/providerStatus';
import { caseInsensitive } from '../../../functions/caseInsensitive/caseInsensitive';
import { styleVisitedButtons } from './styleVisitedButtons';
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
  setSearch,
  searchNode,
  showAllProviders
}) => {
  const ref = useRef([]);
  const scrollTop = useRef('');
  const [allProvidersShown, setAllProvidersShown] = useState(true);
  const [makeResetButtonActive, setMakeResetButtonActive] = useState(false);
  const [visitedProviders, setVisitedProviders] = useState({ markets: {} });

  const [allRefs, setAllRefs] = useState([]);

  useEffect(() => {
    if (
      providers.length > 0 &&
      filteredProviders.length > 0 &&
      providers.length !== filteredProviders.length
    ) {
      setMakeResetButtonActive(true);
    } else if (
      providers.length > 0 &&
      search.length > 0 &&
      providers.length !== filteredProviders.length
    ) {
      setMakeResetButtonActive(true);
    } else {
      setMakeResetButtonActive(false);
    }
    ref.current = new Array(filteredProviders.length);
  }, [providers, filteredProviders, search]);

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
    setSearch('');
    if (searchNode.current) searchNode.current.value = '';
  }, [market]);

  //
  useEffect(() => {
    if (search.length === 1) setAllRefs(ref.current);
    if (allRefs.length > 0 && search.length === 0) {
      ref.current = allRefs; // used to be able to style all buttons
    }
    styleVisitedButtons(visitedProviders, ref.current, market);
    setAllProvidersShown(false);
  }, [search, ref.current]);

  //
  const toggleProvider = e => {
    e.preventDefault();
    onClickProvider(e);

    e.target.style.background = '#F89572';
    e.target.style.color = '#FFF';
    e.target.style.opacity = '1';

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
    setMakeResetButtonActive(true);
    styleVisitedButtons(visitedProviders, ref.current, market, e);
  };

  //
  const reset = e => {
    e.preventDefault();

    showAllProviders();
    setAllProvidersShown(true);
    setMakeResetButtonActive(false);
    // styleVisitedButtons(visitedProviders, ref.current, market);
    showAllProviders();
    setSearch('');

    ref.current.forEach(button => {
      button.style.background = '#FFF';
      button.style.color = '#004146';
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
              {filteredProviders.map(({ displayName, name, status }, i) => (
                <Li
                  key={`${name}: ${displayName}`}
                  noPaddingBottom
                  noPaddingTop
                >
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
  setSearch: PropTypes.func.isRequired,
  searchNode: PropTypes.object,
  showAllProviders: PropTypes.func.isRequired
};
