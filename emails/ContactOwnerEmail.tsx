import { Button } from '@react-email/button';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';

interface ContactOwnerEmailProps {
  company: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactOwnerEmail({ company, name, email, phone, message }: ContactOwnerEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nieuwe offerte aanvraag van {company}</Preview>
      <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <Section style={{ backgroundColor: '#008d00', padding: '20px', borderRadius: '8px 8px 0 0' }}>
          <Img 
            src="https://recy-kab.be/images/logo.png" 
            width="220" 
            height="80" 
            alt="Recy-Kab" 
            style={{ margin: '0 auto', display: 'block' }}
          />
        </Section>

        <Section style={{ backgroundColor: '#ffffff', padding: '30px', border: '1px solid #e5e7eb' }}>
          <Text style={{ fontSize: '24px', fontWeight: 'bold', color: '#008d00', marginBottom: '20px' }}>
            Nieuwe offerte aanvraag
          </Text>

          <Text style={{ fontSize: '16px', color: '#374151' }}>
            <strong>Bedrijf:</strong> {company}<br />
            <strong>Contactpersoon:</strong> {name}<br />
            <strong>E-mail:</strong> {email}<br />
            {phone && <><strong>Telefoon:</strong> {phone}<br /></>}
          </Text>

          <Section style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '6px', margin: '20px 0' }}>
            <Text style={{ fontWeight: 'bold', color: '#008d00', marginBottom: '10px' }}>Bericht:</Text>
            <Text style={{ color: '#374151', lineHeight: '1.6' }}>{message}</Text>
          </Section>

          <Button 
            href={`mailto:${email}`}
            style={{ backgroundColor: '#008d00', color: '#ffffff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none' }}
          >
            Direct antwoorden
          </Button>
        </Section>

        <Text style={{ textAlign: 'center', color: '#6b7280', fontSize: '12px', marginTop: '20px' }}>
          Recy-Kab BVBA • Maastrichtersteenweg 523 bus 1, 3700 Tongeren
        </Text>
      </Container>
    </Html>
  );
}