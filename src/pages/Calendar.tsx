import Breadcrumb from '../components/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import TableTwo from "../components/TableTwo";

const Calendar = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Calendar" />

        <TableTwo />
    </DefaultLayout>
  );
};

export default Calendar;
