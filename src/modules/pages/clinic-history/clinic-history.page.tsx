import { ClipboardBulletListLtrRegular } from '@fluentui/react-icons';
import withTitle from 'helpers/withTitle';

const ClinicHistory = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl'>Clinic History</h1>
    </div>
  );
};

export default withTitle(
  ClinicHistory,
  'Historia Clínica',
  ClipboardBulletListLtrRegular
);
