import { CertificateRegular } from '@fluentui/react-icons';
import withTitle from 'helpers/withTitle';

const Exams = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl'>Exams</h1>
    </div>
  );
};

export default withTitle(Exams, 'Exámenes Médicos', CertificateRegular);
