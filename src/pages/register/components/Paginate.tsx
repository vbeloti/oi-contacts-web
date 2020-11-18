import React, { Dispatch } from 'react';
import { Container, Button } from '../../../styles/pages/register/components/Paginate';

type PaginateProps = {
  page: number;
  infoPage: {
    pages: number;
  }
  setPage: Dispatch<React.SetStateAction<number>>
}

const Paginate = ({ page, infoPage, setPage }: PaginateProps) => {
  const handlePrevious = () => {
    if (page > 1) {
      setPage(() => page - 1);
    }
  };

  const handleNext = () => {
    if (page >= 1) {
      setPage(() => page + 1);
    }
  };

  return (
    <Container>
      {page > 1 && (
        <Button type="submit" onClick={handlePrevious}>
          Voltar
        </Button>
      )}

      <p>
        {page}
        {' '}
        de
        {' '}
        {infoPage.pages}
      </p>

      {page < infoPage.pages && (
      <Button type="submit" onClick={handleNext}>
        Proximo
      </Button>
      )}

    </Container>
  );
};

export default Paginate;
