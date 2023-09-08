import { useCompanies } from 'contexts/companies';

const PositionAndDepartment = ({ jobTitle, department }) => {
  const company = useCompanies();

  const styles = {
    td: {
      fontFamily: 'Arial, sanserif',
      fontWeight: 'bold',
      fontSize: '10pt',
      lineHeight: '10pt',
      color: company.brandColor,
      paddingBottom: '2.5pt',
    },
  };

  return (
    <tr>
      <td style={styles.td}>
        {jobTitle} | {department}
      </td>
    </tr>
  );
};

export default PositionAndDepartment;
