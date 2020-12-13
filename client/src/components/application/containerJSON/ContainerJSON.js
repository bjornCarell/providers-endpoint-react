import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatJSON } from '../../../functions/formatJSON/formatJSON';
import { searchModel } from '../../../functions/searchModel/searchModel';
import { FlexContainer, FlexItem } from '../../library/flex/FlexStyled';
import { Pre } from '../pre/Pre';
import { ControlJSON } from '../controlJSON/ControlJSON';
import { Loader } from '../../library/loader/Loader';

export const ContainerJSON = ({
  loading,
  market,
  onSearch,
  provider,
  providers,
  search,
  setFilteredProviders
}) => {
  const [space, setSpace] = useState(4);
  const [providersJSON, setProvidersJSON] = useState('');
  const [providerJSON, setProviderJSON] = useState('');
  const [fontSize, setFontSize] = useState('1.8');
  const [displayProviders, setDisplayProviders] = useState(true);
  const [displayProvider, setDisplayProvider] = useState(false);

  useEffect(() => {
    setProvidersJSON(formatJSON(providers, space));
    setDisplayProvider(false);
  }, [market]);

  useEffect(() => {
    setProvidersJSON(formatJSON(providers, space));
    setDisplayProviders(true);
    setDisplayProvider(false);
  }, [providers, space]);

  useEffect(() => {
    if (provider.length > 0) {
      setProviderJSON(formatJSON(provider, space));
      setDisplayProviders(false);
      setDisplayProvider(true);
    } else {
      setDisplayProviders(true);
      setDisplayProvider(false);
    }
  }, [provider, space]);

  useEffect(() => {
    if (search) {
      setDisplayProviders(true);
      setDisplayProvider(false);

      const filter = searchModel(providers);
      const result = filter(search);

      setFilteredProviders(result);
      setProvidersJSON(formatJSON(result, space));
    } else {
      setFilteredProviders(providers);
      setProvidersJSON(formatJSON(providers, space));
    }
  }, [search, providers, space]);

  const onChangeFontSize = e => {
    const { value } = e.target;
    const rems = value / 10;
    setFontSize(`${rems}`);
  };

  return (
    <FlexContainer column style={{ marginLeft: '50rem' }}>
      <FlexItem noPadding>
        <ControlJSON
          onChangeSpace={e => setSpace(e.target.value)}
          onChangeFontSize={e => onChangeFontSize(e)}
          onSearch={e => onSearch(e)}
        />
      </FlexItem>
      <FlexItem>
        {loading ? (
          <Loader />
        ) : (
          <>
            {' '}
            <Pre
              display={displayProviders ? 'block' : 'none'}
              fontSize={`${fontSize}`}
              JSON={providersJSON}
            />
            <Pre
              display={displayProvider ? 'block' : 'none'}
              fontSize={`${fontSize}`}
              JSON={providerJSON}
            />
          </>
        )}
      </FlexItem>
    </FlexContainer>
  );
};

ContainerJSON.propTypes = {
  loading: PropTypes.bool,
  market: PropTypes.string.isRequired,
  onChangeSpace: PropTypes.func,
  onSearch: PropTypes.func.isRequired,
  provider: PropTypes.array.isRequired,
  providers: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  setProvider: PropTypes.func.isRequired,
  setFilteredProviders: PropTypes.func.isRequired
};
