import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatJSON } from '../../../functions/formatJSON/formatJSON';
import { searchModel } from '../../../functions/searchModel/searchModel';
import { FlexContainer, FlexItem } from '../../library/flex/FlexStyled';
import { Pre } from '../../library/pre/Pre';
import { ControlJSON } from '../controlJSON/ControlJSON';

export const ContainerJSON = ({
  node,
  onSearch,
  provider,
  providers,
  search,
  setProvider,
  setFilteredProviders
}) => {
  const [space, setSpace] = useState(4);
  const [displayProviders, setDisplayProviders] = useState('');
  const [displayProvider, setDisplayProvider] = useState('');
  const [fontSize, setFontSize] = useState('1.8');

  useEffect(() => {
    setDisplayProviders(formatJSON(providers, space));
  }, [providers, space]);

  useEffect(() => {
    setDisplayProvider(formatJSON(provider, space));
  }, [provider, space]);

  useEffect(() => {
    if (search) {
      setProvider([]);
      const filter = searchModel(providers);
      const result = filter(search);

      setFilteredProviders(result);
      setDisplayProviders(formatJSON(result, space));
    } else {
      setFilteredProviders(providers);
      setDisplayProviders(formatJSON(providers, space));
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
          display={provider.length > 0 ? 'none' : 'block'}
          fontSize={`${fontSize}`}
          JSON={displayProviders}
          model={providers}
        />
        <Pre
          display={provider.length > 0 ? 'block' : 'none'}
          fontSize={`${fontSize}`}
          JSON={displayProvider}
          model={provider}
        />
      </FlexItem>
    </FlexContainer>
  );
};

ContainerJSON.propTypes = {
  displayProvider: PropTypes.string.isRequired,
  displayProviders: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  onChangeSpace: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  provider: PropTypes.array.isRequired,
  providers: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  setProvider: PropTypes.func.isRequired,
  setFilteredProviders: PropTypes.func.isRequired
};
