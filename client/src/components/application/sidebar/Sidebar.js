import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useScrollTop } from '../../../hooks/useScrollTop';
import { providerStatus } from '../../../functions/providerStatus/providerStatus';
import {
  SidebarStyled,
  LeftMenuInner,
  LeftMenuInnest,
  ButtonItem
} from './SidebarStyled';
import { FlexContainer, FlexItem } from '../../library/flex/FlexStyled';
import { Button } from '../../library/button/Button';
import { Form } from '../../library/form/Form';
import { Label } from '../../library/label/Label';
import { Select } from '../../library/select/Select';
import { ProvidersStatus } from '../providerStatus/ProviderStatus';
import { Ul } from '../../library/ul/UlStyled';
import { Li } from '../../library/li/LiStyled';

export const Sidebar = ({
  filteredProviders,
  markets,
  onChangeMarket,
  onClickProvider,
  provider,
  providers,
  search,
  showAllProviders
}) => {
  const ref = useRef([]);
  const scrollTop = useRef('');
  const [arr, setArr] = useState([]);
  const [visited, setVisited] = useState([]);

  useEffect(() => {
    if (
      (providers.length !== filteredProviders.length && arr.length === 0) ||
      provider.length < 1
    ) {
      setArr(filteredProviders);
      ref.current = new Array(filteredProviders.length);
    } else {
      setArr(providers);
      ref.current = new Array(providers.length);

      ref.current.forEach(r => {
        r.style.background = '#FFF';
        r.style.color = '#004146';
      });
    }
  }, [providers, filteredProviders]);

  // The below will set the style of any button that has
  // been visited to have opacity 1 and signify "visited"
  const styleVisitedButtons = () =>
    visited.forEach(visit => {
      ref.current.forEach(r => {
        if (r.textContent === visit) {
          r.style.backgroundColor = '#FFF';
          r.style.color = '#004146';
          r.style.opacity = '1';
        }
      });
    });

  useEffect(() => {
    if (visited.length > 0 && search.length < 1) {
      styleVisitedButtons();
    }
  }, [search]);

  //
  const toggleProvider = e => {
    e.preventDefault();
    setVisited([...visited, e.target.textContent]);

    // toggles highlighted background when changing providers
    e.target.style.background = '#F89572';
    e.target.style.color = '#FFF';
    e.target.style.opacity = '1';

    if (visited.length > 0) {
      styleVisitedButtons();
    }

    onClickProvider(e);
  };

  const reset = e => {
    e.preventDefault();

    ref.current.forEach(r => {
      r.style.background = '#FFF';
      r.style.color = '#004146';
    });

    showAllProviders();
    scrollTop.current.scrollTop = 0;
  };

  const notAllProvidersShown =
    provider.length > 0 ||
    (search && filteredProviders.length !== providers.length);

  return (
    <SidebarStyled>
      <FlexContainer>
        <FlexItem noPadding>
          <Form
            boxShadow
            noMargin
            width="35rem"
            style={{
              background: 'rgba(1, 63, 69, 0.97)',
              boxShadow: '-3px 9px 17px -2px rgba(0,0,0,0.3)',
              position: 'fixed',
              zIndex: 5
            }}
          >
            <FlexContainer>
              <FlexItem noPaddingTop>
                <Label block>Market </Label>
                <Select
                  data={markets}
                  dataType="markets"
                  fontWeight="bold"
                  inverse
                  defaultValue={'Sweden'}
                  onChange={onChangeMarket}
                />
              </FlexItem>
              <FlexItem noPaddingTop>
                <Label block>Providers</Label>
                <Button
                  secondary
                  width="11rem"
                  onClick={e => reset(e)}
                  disabled={!notAllProvidersShown}
                  style={{
                    opacity: notAllProvidersShown ? '1' : '0.8'
                  }}
                >
                  {notAllProvidersShown ? 'Show all' : 'All shown'}
                </Button>
              </FlexItem>
            </FlexContainer>
          </Form>
        </FlexItem>
      </FlexContainer>

      <LeftMenuInner>
        <LeftMenuInnest ref={scrollTop}>
          <Ul column>
            {notAllProvidersShown // Make this into a component SidenbarList
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
                        ref={el => {
                          ref.current[i] = el;
                        }}
                      >
                        {name}
                      </ButtonItem>
                      <ProvidersStatus status={providerStatus(status)} />
                    </FlexContainer>
                  </Li>
                ))}
          </Ul>
        </LeftMenuInnest>
      </LeftMenuInner>
    </SidebarStyled>
  );
};

Sidebar.propTypes = {
  filteredProviders: PropTypes.array.isRequired,
  markets: PropTypes.array.isRequired,
  node: PropTypes.object.isRequired,
  onChangeMarket: PropTypes.func.isRequired,
  onClickProvider: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  provider: PropTypes.array.isRequired,
  providers: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  showAllProviders: PropTypes.func.isRequired
};
