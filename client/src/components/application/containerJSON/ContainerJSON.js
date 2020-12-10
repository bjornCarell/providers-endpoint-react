import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatJSON } from '../../../functions/formatJSON/formatJSON';
import { searchModel } from '../../../functions/searchModel/searchModel';
import { FlexContainer, FlexItem } from '../../library/flex/FlexStyled';
import { Pre } from '../pre/Pre';
import { ControlJSON } from '../controlJSON/ControlJSON';

export const ContainerJSON = ({
  market,
  node,
  onSearch,
  provider,
  providers,
  search,
  setProvider,
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
    setProviderJSON(formatJSON(provider, space));
    setDisplayProviders(false);
    setDisplayProvider(true);
  }, [provider, space]);

  useEffect(() => {
    if (search) {
      setProvider([]);
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
          node={node}
        />
      </FlexItem>
      <FlexItem>
        <Pre
          display={displayProviders ? 'block' : 'none'}
          fontSize={`${fontSize}`}
          JSON={providersJSON}
          model={providers}
        />
        <Pre
          display={displayProvider ? 'block' : 'none'}
          fontSize={`${fontSize}`}
          JSON={providerJSON}
          model={provider}
        />
      </FlexItem>
    </FlexContainer>
  );
};

ContainerJSON.propTypes = {
  market: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  onChangeSpace: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  provider: PropTypes.array.isRequired,
  providers: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  setProvider: PropTypes.func.isRequired,
  setFilteredProviders: PropTypes.func.isRequired
};
