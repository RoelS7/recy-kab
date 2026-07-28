import * as React from 'react';
import { 
  Html, 
  Head, 
  Preview, 
  Container, 
  Section, 
  Text, 
  Button, 
  Img 
} from '@react-email/components';

interface ContactConfirmationEmailProps {
  name: string;
}

export function ContactConfirmationEmail({ name }: ContactConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Bedankt voor uw aanvraag - Recy-Kab</Preview>
      <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <Section style={{ backgroundColor: '#008d00', padding: '30px', borderRadius: '8px 8px 0 0', textAlign: 'center' }}>
          <Img 
            src="https://recy-kab.be/images/logo.png" 
            width="220" 
            height="80" 
            alt="Recy-Kab" 
            style={{ margin: '0 auto', display: 'block' }}
          />
        </Section>

        <Section style={{ backgroundColor: '#ffffff', padding: '40px 30px', border: '1px solid #e5e7eb', borderTop: 'none' }}>
          <Text style={{ fontSize: '28px', fontWeight: 'bold', color: '#008d00', textAlign: 'center' }}>
            Bedankt, {name}!
          </Text>

          <Text style={{ fontSize: '17px', lineHeight: '1.7', color: '#374151', textAlign: 'center', marginTop: '20px' }}>
            We hebben uw offerte aanvraag goed ontvangen.<br />
            Ons team bekijkt deze zo snel mogelijk en neemt persoonlijk contact met u op.
          </Text>

          <Section style={{ textAlign: 'center', margin: '30px 0' }}>
            <Button 
              href="https://recy-kab.be"
              style={{ backgroundColor: '#008d00', color: '#ffffff', padding: '14px 32px', borderRadius: '6px', fontSize: '16px', textDecoration: 'none' }}
            >
              Terug naar website
            </Button>
          </Section>

          <Text style={{ color: '#6b7280', textAlign: 'center', fontSize: '15px' }}>
            Met vriendelijke groeten,<br />
            <strong>Het Recy-Kab team</strong>
          </Text>
        </Section>
      </Container>
    </Html>
  );
}