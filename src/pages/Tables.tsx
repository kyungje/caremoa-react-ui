import Breadcrumb from '../components/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import ContractList from "../components/ContractList";

const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="계약" />

      <div className="flex flex-col gap-10">
        {/*<TableOne />*/}
        <ContractList />
        {/*<TableThree />*/}
      </div>
    </DefaultLayout>
  );
};

export default Tables;
