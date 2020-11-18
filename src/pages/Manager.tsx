/* eslint-disable no-return-assign */
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Container, ContainerHeaderForm } from '../styles/pages/manager';
import Search from './manager/components/Search';
import People from './manager/components/People';
import Header from '../components/Header';
import Aside from '../components/Aside';
import api from '../services/api';
import PeopleData from '../types/PeopleData';
import Modal from './manager/components/Modal';
import PeoplesData from '../types/PeoplesData';
import Paginate from './register/components/Paginate';

const Manager = () => {
  const [peoples, setPeoples] = useState<PeopleData[]>([]);
  const [people, setPeople] = useState<PeopleData>();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  const [page, setPage] = useState(1);

  const [infoPage, setInfoPage] = useState({ pages: 1 });

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      api
        .get<PeoplesData>(`/contacts/?page=${page}`)
        .then((response) => {
          setPeoples(response.data.data);
          setInfoPage({ pages: response.data.pages });
        })
        .catch((error) => toast.error(error?.response?.data?.message))
        .finally(() => setIsLoading(false));
    }

    return () => { mounted = false; };
  }, [page]);

  const handleModal = (index: number) => {
    setPeople(peoples[index]);

    if (showModal) {
      setShowModal(false);
    } else setShowModal(true);
  };

  const filterResults = useCallback(
    (peopleR: PeopleData) => peopleR?.name.toLowerCase().includes(search.toLowerCase())
    || peopleR?.document.toLowerCase().includes(search.toLowerCase())
    || peopleR?.city.toLowerCase().includes(search.toLowerCase())
    || peopleR?.type.toLowerCase().includes(search.toLowerCase()),
    [search],
  );

  return (
    <>
      <Container>
        <Aside title="Pessoas" phrase="Gerencie contatos da" />
        <ContainerHeaderForm>
          <Header />
          <Search setSearch={setSearch} search={search} />
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            people={people}
            setPeoples={setPeoples}
            peoples={peoples}
          />
          <People
            isLoading={isLoading}
            peoples={peoples}
            handleModal={handleModal}
            setPeoples={setPeoples}
            filterResults={filterResults}
          />
          <Paginate setPage={setPage} infoPage={infoPage} page={page} />
        </ContainerHeaderForm>
      </Container>
    </>
  );
};

export default Manager;
