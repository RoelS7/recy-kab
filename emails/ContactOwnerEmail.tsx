import * as React from 'react';
import { 
  Html, 
  Head, 
  Body,
  Preview, 
  Container, 
  Section, 
  Text, 
  Button, 
  Img 
} from '@react-email/components';

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
      <Preview>Nieuw bericht via de site van {company || name}</Preview>
      <Body style={{ backgroundColor: '#f3f4f6', margin: 0, padding: '20px 0', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
          
          {/* Header met Logo */}
          <Section style={{ backgroundColor: '#008d00', padding: '20px', textAlign: 'center' }}>
            <Img 
              src="https://www.recy-kab.com/images/logo.png" 
              width="220" 
              height="80" 
              alt="Recy-Kab" 
              style={{ 
                margin: '0 auto', 
                display: 'block', 
                width: '220px', 
                height: '80px', 
                border: '0', 
                outline: 'none', 
                textDecoration: 'none' 
              }}
            />
          </Section>

          {/* Inhoud */}
          <Section style={{ padding: '30px' }}>
            <Text style={{ fontSize: '22px', fontWeight: 'bold', color: '#008d00', margin: '0 0 20px 0' }}>
              Nieuwe offerte aanvraag
            </Text>

            <Text style={{ fontSize: '15px', color: '#374151', lineHeight: '1.8', margin: '0 0 20px 0' }}>
              <strong>Bedrijf:</strong> {company || 'Niet opgegeven'}<br />
              <strong>Contactpersoon:</strong> {name}<br />
              <strong>E-mail:</strong> {email}<br />
              {phone && <><strong>Telefoon:</strong> {phone}<br /></>}
            </Text>

            <Section style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '6px', margin: '20px 0', border: '1px solid #e2e8f0' }}>
              <Text style={{ fontWeight: 'bold', color: '#008d00', margin: '0 0 10px 0' }}>Bericht:</Text>
              <Text style={{ color: '#374151', lineHeight: '1.6', margin: 0 }}>{message}</Text>
            </Section>

            <Section style={{ textAlign: 'left', marginTop: '25px' }}>
              <Button 
                href={`mailto:${email}`}
                style={{ 
                  backgroundColor: '#008d00', 
                  color: '#ffffff', 
                  padding: '12px 24px', 
                  borderRadius: '6px', 
                  fontSize: '15px', 
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'inline-block',
                  textAlign: 'center'
                }}
              >
                Direct antwoorden
              </Button>
            </Section>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}