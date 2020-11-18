import { Dispatch, SetStateAction } from 'react';
import PeopleData from './PeopleData';

type ModalProps = {
  showModal: boolean;
  people: PeopleData | undefined;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  peoples: PeopleData[];
  setPeoples: Dispatch<SetStateAction<PeopleData[]>>;
};

export default ModalProps;
