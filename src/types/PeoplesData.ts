type Data = {
  _id: string;
  name: string;
  type: string;
  document: string;
  state: string;
  city: string;
  birthday: string;
  phone: string;
  created_at: string;
}

type PeoplesData = {
  pages: number;
  total: number;
  limit: number;
  data: Data[];
};

export default PeoplesData;
