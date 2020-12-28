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
  const [allRefs, setAllRefs] = useState([]);
  const [allProvidersShown, setAllProvidersShown] = useState(true);
  const [makeResetButtonActive, setMakeResetButtonActive] = useState(false);
  const [visitedProviders, setVisitedProviders] = useState({ markets: {} });

  // If there are visited providers for the market,
  // those will be set and styled accordingly
  useEffect(() => {
    setVisitedProviders({
      markets: markets.reduce(
        (acc, country) => ({
          ...acc,
          [caseInsensitive(country.name)]:
            markets[caseInsensitive(country.name)] || []
        }),
        {}
      )
    });
    setAllRefs([]);
  }, []);

  // if search or filtering is made toggle reset button
  // if filteredProviders is not of the same length as
  // providers, it signifies a search or filter.
  useEffect(() => {
    if (
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

  // Reset providers and search string on change of market
  useEffect(() => {
    showAllProviders();
    setSearch('');
    if (searchNode.current) searchNode.current.value = '';
  }, [market]);

  // save original refs to allRefs when user makes a search
  // this to be able to style all visited buttons when resetting
  useEffect(() => {
    if (search.length === 1) setAllRefs(ref.current);
    if (allRefs.length > 0 && search.length === 0) {
      ref.current = allRefs;
    }
    styleVisitedButtons(visitedProviders, ref.current, market);
    setAllProvidersShown(false);
  }, [search, ref.current]);

  //
  const toggleProvider = e => {
    e.preventDefault();
    onClickProvider(e);

    // give style to active provider
    e.target.style.background = '#F89572';
    e.target.style.color = '#FFF';
    e.target.style.opacity = '1';

    if (
      !visitedProviders.markets[caseInsensitive(market)].includes(
        e.target.textContent
      )
    ) {
      // Add provider to visited providers list
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
    showAllProviders();
    setSearch('');

    // reset style of all buttons, should be no
    // button with secondary color
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
            loading={loading}
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
