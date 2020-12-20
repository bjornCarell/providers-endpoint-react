import React, { useState, useRef } from 'react';
import { markets } from '../../../markets/markets';
import { useProviders } from '../../../hooks/useProviders/useProviders';
import { getProviderByName } from '../../../functions/getProviderByName/getProviderByName';
import { delay } from '../../../functions/delay/delay';
import { Container } from '../../library/container/ContainerStyled';
import { Sidebar } from '../sidebar/Sidebar';
import { ContainerJSON } from '../containerJSON/ContainerJSON';

export const ProvidersContainer = () => {
  const [provider, setProvider] = useState([]);
  const [market, setMarket] = useState('Sweden');
  const [search, setSearch] = useState('');
  const searchNode = useRef(null);
  const { providersData, loading } = useProviders(market);
  const [filteredProviders, setFilteredProviders] = useState(providersData);

  const showAllProviders = () => {
    setFilteredProviders(providersData);
    setProvider([]);
  };

  const onClickProvider = e => {
    e.preventDefault();
    const { innerText } = e.target;

    const filterProviderByName = getProviderByName(providersData);
    return delay(setProvider, filterProviderByName(innerText), 200);
  };

  const onSearch = e => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <Container full fullVertical>
      <Sidebar
        filteredProviders={filteredProviders}
        loading={loading}
        market={market}
        markets={markets}
        onChangeMarket={e => setMarket(e.target.value)}
        onClickProvider={onClickProvider}
        onSearch={e => onSearch(e)}
        provider={provider}
        providers={providersData}
        search={search}
        searchNode={searchNode}
        setSearch={setSearch}
        setProvider={setProvider}
        showAllProviders={showAllProviders}
      />
      <Container noPaddingLeft>
        <ContainerJSON
          loading={loading}
          market={market}
          onSearch={e => onSearch(e)}
          provider={provider}
          providers={providersData}
          search={search}
          searchNode={searchNode}
          setProvider={setProvider}
          setFilteredProviders={setFilteredProviders}
        />
      </Container>
    </Container>
  );
};
