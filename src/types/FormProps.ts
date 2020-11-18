import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import CityData from './CityData';
import PeopleData from './PeopleData';
import UfData from './UfData';

type FormProps = {
  type: string;
  setType: Dispatch<SetStateAction<string>>;
  handleDocument: (event: ChangeEvent<HTMLInputElement>) => void;
  document: string;
  errors: {
    document: string;
    phone: string;
  }
  uf: string;
  setUf: Dispatch<SetStateAction<string>>;
  ufs: UfData[];
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  cities: CityData;
  setPeople: Dispatch<SetStateAction<PeopleData>>;
};

export default FormProps;
