/* eslint-disable no-console */
import React, { useState } from 'react';
import { markets } from '../../../markets/markets';
import { useProviders } from '../../../hooks/useProviders';
import { getProviderByName } from '../../../functions/getProviderByName/getProviderByName';
import { Container } from '../../library/container/Container';
import { Sidebar } from '../sidebar/Sidebar';
import { ContainerJSON } from '../containerJSON/ContainerJSON';

export const ProvidersModel = () => {
  const [provider, setProvider] = useState([]);
  const [market, setMarket] = useState('Sweden');
  const [search, setSearch] = useState('');
  const { providersData, loading } = useProviders(market);
  const [filteredProviders, setFilteredProviders] = useState(providersData);

  const showAllProviders = () => {
    setFilteredProviders(providersData);
    setProvider([]);
  };

  const onClickProvider = e => {
    e.preventDefault();
    const filterProviderByName = getProviderByName(providersData);
    setProvider(filterProviderByName(e.target.innerText));
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
        setProvider={setProvider}
        showAllProviders={showAllProviders}
      />
      <Container noPaddingLeft>
        <ContainerJSON
          filteredProviders={filteredProviders}
          loading={loading}
          market={market}
          onSearch={e => onSearch(e)}
          provider={provider}
          providers={providersData}
          search={search}
          setProvider={setProvider}
          setFilteredProviders={setFilteredProviders}
        />
      </Container>
    </Container>
  );
};
