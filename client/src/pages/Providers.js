import React, { useState, useRef } from 'react';
import { markets } from '../api/markets';
import { useProviders } from '../hooks/useProviders';
import { getProviderByName } from '../functions/getProviderByName/getProviderByName';
import { Container } from '../components/library/container/Container';
import { Sidebar } from '../components/application/sidebar/Sidebar';
import { ContainerJSON } from '../components/application/containerJSON/ContainerJSON';

export const Providers = () => {
  const [provider, setProvider] = useState([]);
  const [market, setMarket] = useState('Sweden');
  const [search, setSearch] = useState('');

  const node = useRef(null);
  const providers = useProviders(market);
  const [filteredProviders, setFilteredProviders] = useState(providers);

  const onClickProvider = e => {
    e.preventDefault();
    const filterProviderByName = getProviderByName(providers);
    setProvider(filterProviderByName(e.target.innerText));
  };

  const showAllProviders = () => {
    setProvider([]);
    setSearch('');
    setFilteredProviders(providers);

    node.current.value = '';
  };

  const onSearch = e => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <Container full fullVertical>
      <Sidebar
        filteredProviders={filteredProviders}
        markets={markets}
        onChangeMarket={e => setMarket(e.target.value)}
        onClickProvider={onClickProvider}
        onSearch={e => onSearch(e)}
        node={node}
        provider={provider}
        providers={providers}
        search={search}
        showAllProviders={showAllProviders}
      />
      <Container noPaddingLeft>
        <ContainerJSON
          filteredProviders={filteredProviders}
          node={node}
          onSearch={e => onSearch(e)}
          provider={provider}
          providers={providers}
          search={search}
          setProvider={setProvider}
          setFilteredProviders={setFilteredProviders}
        />
      </Container>
    </Container>
  );
};
