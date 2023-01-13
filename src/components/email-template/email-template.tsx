import { memo, ReactElement } from 'react';

interface EmailTemplateProps {
  signature: ReactElement;
}

const EmailTemplate = ({ signature }: EmailTemplateProps) => {
  return (
    <>
      {/* First Bar */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '1rem',
          backgroundColor: '#4a515d',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '8px 8px 0px 0px',
        }}
      >
        {['rgb(242, 84, 91)', 'rgb(245, 194, 107)', 'rgb(0, 189, 165)'].map((bc, i) => (
          <div
            key={i}
            style={{
              height: '0.5rem',
              width: '0.5rem',
              borderRadius: '50%',
              marginRight: '0.5rem',
              backgroundColor: bc,
            }}
          />
        ))}
      </div>

      {/* Second Bar */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem 2rem',
          fontWeight: '500',
          color: 'rgb(255, 255, 255)',
          backgroundColor: '#4a515d',
        }}
      >
        <div style={{ marginBottom: '.25rem' }}>To: Your Recipient</div>
        <div>Subject: Check out my new Email Signature</div>
      </div>
      {/* Mail Content Area */}
      <div
        style={{
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          padding: '30px 20px',
          justifyContent: 'space-between',
          marginBottom: '10px',
          rowGap: '2rem',
        }}
      >
        <GhostLines />
        {signature}
      </div>
    </>
  );
};

export default EmailTemplate;

const GhostLines = memo(() => {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
        <div
          key={i}
          style={{
            height: '10px',
            backgroundColor: '#E0E0E0',
            width: Math.floor(Math.random() * 500) + 150,
            marginBottom: '15px',
          }}
        />
      ))}
    </div>
  );
});
