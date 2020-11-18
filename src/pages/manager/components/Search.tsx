import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import { Container, BoxRegister, BoxSearch } from '../../../styles/pages/manager/components/search';

type SearchProps = {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
}

const Search = ({ setSearch, search }: SearchProps) => (
  <Container>
    <BoxRegister>
      <Link to="create"><h2>Criar Nova Pessoa</h2></Link>
      <BoxSearch>
        <input onChange={(e) => setSearch(e.target.value)} value={search} type="search" />
      </BoxSearch>
    </BoxRegister>

  </Container>
);

export default Search;
